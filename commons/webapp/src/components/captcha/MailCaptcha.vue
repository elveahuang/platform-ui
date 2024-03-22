<template>
    <a-button style="min-width: 100px" type="primary" :disabled="disabled" @click="getCaptcha">{{ text }}</a-button>
</template>

<script setup lang="ts">
import { onMounted, ref, createVNode, reactive } from 'vue';
import { getEmailCaptchaApi } from '@commons/core/api/captcha.ts';
import { log } from '@commons/core/utils';
import { isEmpty } from 'lodash-es';
import { useI18n } from 'vue-i18n';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

const { t } = useI18n();
const emits = defineEmits(['change']);
const props = defineProps({
    email: {
        type: String,
        default: '',
    },
});
const disabled = ref(false);
const text = ref(t('common.field_captcha_button'));

let time = 0;
let timer: any = null;
const getCaptcha = async (): Promise<void> => {
    log('获取邮箱验证码');
    log(props.email);
    if (isEmpty(props.email)) {
        log('邮箱为空');
        Modal.confirm({
            icon: createVNode(ExclamationCircleOutlined),
            content: createVNode('div', { style: 'color:red;' }, t('common.field_captcha_validation_email')),
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
            class: 'test',
        });
        return;
    }
    await getEmailCaptchaApi({ email: props.email }).then((resp) => {
        emits('change', resp.data.key);

        disabled.value = true;
        time = 60;
        timer = setInterval(() => {
            time--;
            if (time <= 0) {
                text.value = t('common.field_captcha_button');
                disabled.value = false;
                clearInterval(timer);
            } else {
                text.value = t('common.field_captcha_tip', { time: time });
            }
        }, 1000);
    });
};

onMounted(async () => {
    log('Component <<MailCaptcha>> mounted.');
});
</script>
