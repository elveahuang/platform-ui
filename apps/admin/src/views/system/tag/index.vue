<template>
    <app-page-header>
        <template #title>{{ $t('common.tag_type_management') }}</template>
    </app-page-header>

    <a-card>
        <data-table
            ref="dataTableRef"
            v-model:model="dataTableModel"
            @getDataList="getDataList"
            :row-selection-enabled="dataTableRowSelectionEnabled"
            :tool-bar-enabled="true"
        >
            <template #toolBar>
                <a-button type="primary" @click="showEntityFormModal(0)">{{ $t('common.button_add') }}</a-button>
                <a-button @click="dataTableRowSelectionEnabled = !dataTableRowSelectionEnabled">
                    {{ dataTableRowSelectionEnabled ? $t('common.label_batch_operation_cancel') : $t('common.label_batch_operation') }}
                </a-button>
                <a-button @click="handleDelete(0)">{{ $t('common.button_delete') }}</a-button>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space>
                        <a-button type="primary" size="small" @click="showPreviewModal(record)">
                            <template #icon>
                                <app-icon icon="mdi:eye-outline" />
                            </template>
                        </a-button>
                        <a-button type="primary" size="small" @click="showEntityFormModal(record.id)">
                            <template #icon>
                                <app-icon icon="ant-design:edit-outlined" />
                            </template>
                        </a-button>
                        <router-link :to="{ path: '/tag/items', query: { typeId: record.id, title: record.title } }">
                            <a-button type="primary" size="small">
                                <template #icon>
                                    <app-icon icon="ant-design:unordered-list-outlined" />
                                </template>
                            </a-button>
                        </router-link>
                        <a-popconfirm
                            v-if="record['source'] !== 1"
                            :title="$t('common.label_confirm_delete_record')"
                            @confirm="handleDelete(record.id)"
                        >
                            <a-button danger type="primary" size="small">
                                <template #icon>
                                    <app-icon icon="ant-design:close-outlined" />
                                </template>
                            </a-button>
                        </a-popconfirm>
                    </a-space>
                </template>
            </template>
        </data-table>
    </a-card>

    <a-modal
        class="app-modal"
        v-model:open="previewModalOpen"
        :title="$t('common.label_preview')"
        @ok="handlePreviewModalOk"
        @cancel="handlePreviewModalCancel"
    >
        <a-card>
            <div v-html="previewContentHtml"></div>
        </a-card>
    </a-modal>

    <a-modal class="app-modal" v-model:open="entityFormModalOpen" :title="entityFormModalTitle" @ok="handleFormSubmit" @cancel="handleFormCancel">
        <a-card>
            <a-form
                ref="entityForm"
                :model="entityFormModel"
                :rules="entityFormRules"
                @finish="handleFormSubmit"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 12 }"
            >
                <a-form-item name="code" :label="$t('common.field_code')">
                    <a-input
                        :readonly="entityFormModel['source'] === 1"
                        :maxlength="100"
                        v-model:value="entityFormModel['code']"
                        :placeholder="t('common.field_code_placeholder')"
                    />
                </a-form-item>
                <a-form-item name="title" :label="$t('common.field_title')">
                    <a-input :maxlength="150" v-model:value="entityFormModel['title']" :placeholder="t('common.field_title_placeholder')" />
                </a-form-item>
                <a-form-item name="label" :label="$t('common.field_label')">
                    <a-input :maxlength="150" v-model:value="entityFormModel['label']" :placeholder="t('common.field_label_placeholder')" />
                </a-form-item>
                <a-form-item name="description" :label="$t('common.field_description')">
                    <a-textarea
                        :maxlength="250"
                        v-model:value="entityFormModel['description']"
                        :placeholder="t('common.field_description_placeholder')"
                    />
                </a-form-item>
            </a-form>
        </a-card>
    </a-modal>
</template>

<script setup lang="ts">
import { useDataTable } from '@commons/core/utils/data-table.ts';
import { checkCodeApi, CheckCodePayload } from '@commons/core/api/admin/dict.ts';
import { onMounted, reactive, ref, Ref } from 'vue';
import { log } from '@commons/core/utils';
import { AppIcon, AppPageHeader, DataTable } from '@commons/webapp/components';
import { useI18n } from 'vue-i18n';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';
import { Key, R } from '@commons/core/types';
import { isEmpty } from 'lodash-es';
import { showMessage } from '@commons/webapp/utils';
import { message } from 'ant-design-vue';
import { tagTypeEntityDeleteApi, tagTypeEntityDetailsApi, tagTypeEntityPageApi, tagTypeEntitySaveApi } from '@commons/core/api/admin/tag.ts';
import { TagTypeEntity } from '@commons/core/types/tag.type.ts';

const { t } = useI18n();
// 数据列表
const { initialize, handleResult, handleParams } = useDataTable();
const dataTableColumns = [
    {
        title: t('common.field_code'),
        dataIndex: 'code',
        key: 'code',
        width: 100,
        sorter: true,
    },
    {
        title: t('common.field_title'),
        dataIndex: 'title',
        key: 'title',
        width: 180,
        sorter: true,
    },

    {
        title: t('common.field_last_modified_at'),
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        width: 120,
        sorter: true,
        ellipsis: true,
    },
    {
        title: t('common.label_action'),
        dataIndex: 'operation',
        key: 'operation',
        width: 60,
        ellipsis: true,
        fixed: 'right',
    },
];
const dataTableModel = reactive(initialize(dataTableColumns));
const dataTableRef: Ref<typeof DataTable> = ref<typeof DataTable>();
const dataTableRowSelectionEnabled: Ref<boolean> = ref<boolean>(false);
const getDataList = async () => {
    await tagTypeEntityPageApi(handleParams(dataTableModel)).then((result) => {
        handleResult(dataTableModel, result);
    });
};
// 添加编辑
const entityFormModalTitle = ref<string>('');
const entityFormModalOpen = ref<boolean>(false);
const entityForm: Ref<FormInstance> = ref<FormInstance>();
let entityFormModel = reactive<TagTypeEntity>(new TagTypeEntity());
const entityFormRules: Record<string, Rule[]> = {
    code: [
        {
            validator: async (rule: Rule, payload: CheckCodePayload): Promise<void> => {
                const result: R<Boolean> = await checkCodeApi({ ...payload });
                if (result.code == '200' && result.data === true) {
                    return Promise.resolve();
                }
                return Promise.reject();
            },
            message: t('common.dict_field_code_validation_check'),
            transform: (value: string): CheckCodePayload => {
                return { code: value, id: entityFormModel.id };
            },
        },
    ],
    title: [{ required: true, message: t('common.field_title_validation') }],
};
const showEntityFormModal = async (id?: number) => {
    entityForm.value?.clearValidate();
    entityFormModalOpen.value = true;
    if (id && id > 0) {
        entityFormModalTitle.value = t('common.edit_tag');
        await tagTypeEntityDetailsApi({ id: id }).then((result) => {
            Object.assign(entityFormModel, { ...result.data });
        });
    } else {
        Object.assign(entityFormModel, { ...new TagTypeEntity() }); // 重置表单参数
        entityFormModalTitle.value = t('common.edit_add_tag');
    }
};
const handleFormCancel = () => {
    entityFormModalOpen.value = false;
};
const handleFormSubmit = async () => {
    await entityForm.value.validate().then(async () => {
        tagTypeEntitySaveApi(entityFormModel).then((result) => {
            if (result.code == '200') {
                entityFormModalOpen.value = false;
                dataTableRef.value.refresh();
            }
        });
    });
};
// 删除
const handleDelete = async (id: number = 0) => {
    const ids: Key[] = id > 0 ? [id] : dataTableRef.value.selectedRowKeys();
    if (isEmpty(ids)) {
        showMessage({ message: t('common.label_please_select_one_record') }).then();
    } else
        tagTypeEntityDeleteApi({ ids: ids }).then((result) => {
            if (result.code == '200') {
                entityFormModalOpen.value = false;
                dataTableRef.value.refresh();
            } else {
                for (const key in result.data as Object) {
                    if (result.data.hasOwnProperty(key)) {
                        message.error(`${result.data[key]} - ${key}`);
                    }
                }
            }
        });
};

// 预览
const previewModalOpen = ref<boolean>(false);
const previewContentHtml = ref<string>('');
const showPreviewModal = async (entity: TagTypeEntity) => {
    previewContentHtml.value = entity.description;
    previewModalOpen.value = true;
};
const handlePreviewModalOk = async () => {
    previewContentHtml.value = '';
    previewModalOpen.value = false;
};
const handlePreviewModalCancel = async () => {
    previewContentHtml.value = '';
    previewModalOpen.value = false;
};

onMounted(async () => {
    log('Page <<DictionaryAdminListPage>> mounted.');
});
</script>
