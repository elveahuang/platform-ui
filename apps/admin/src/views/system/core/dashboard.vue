<template>
    <!--    <a-row :gutter="24">-->
    <!--        <a-col :span="16"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--        <a-col :span="8"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--    </a-row>-->

    <!--    <a-row :gutter="24">-->
    <!--        <a-col :span="6"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--        <a-col :span="6"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--        <a-col :span="6"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--        <a-col :span="6"-->
    <!--            ><a-card> <div class="text-center"></div> </a-card-->
    <!--        ></a-col>-->
    <!--    </a-row>-->
    <a-card>
        <div class="text-center">
            <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane key="actNum" :tab="$t('活跃数')">
                    <v-chart class="chart" :option="actNumOption" autoresize :init-options="{ width: 1380, height: 380 }" />
                </a-tab-pane>
                <a-tab-pane key="logNum" :tab="$t('登陆数')">
                    <v-chart class="chart" :option="logNumOption" autoresize :init-options="{ width: 1380, height: 380 }" />
                </a-tab-pane>
                <template #rightExtra>
                    <a-row :gutter="12">
                        <a-col>
                            <a-radio-group v-model:value="placement">
                                <a-radio-button value="1">今日</a-radio-button>
                                <!--                                <a-radio-button value="2">本周</a-radio-button>-->
                                <a-radio-button value="3">本月</a-radio-button>
                                <a-radio-button value="4">全年</a-radio-button>
                            </a-radio-group>
                        </a-col>
                        <a-col>
                            <a-range-picker v-model:value="dateRange" />
                        </a-col>
                    </a-row>
                </template>
            </a-tabs>
        </div>
    </a-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Dayjs } from 'dayjs';
import VChart from 'vue-echarts';
import { log } from '@commons/core/utils';
import { useECharts } from '@commons/core/utils/chart.ts';
import { loginPlatformLineChartApi } from '@commons/core/api/admin';
import { EChartsOption } from 'echarts';
import { useI18n } from 'vue-i18n';
import { ChartVo, LineData } from '@commons/core/types/echarts.ts';

const { t } = useI18n();

useECharts();
const activeKey = ref('actNum');
const actNumOption = reactive({});
const logNumOption = reactive({});

const placement = ref('day' as const);
const dateRange = ref<[Dayjs, Dayjs]>();
const getEchartsOptions = (data: ChartVo): EChartsOption => {
    return {
        grid: {
            left: '3',
            right: '4',
            bottom: '3',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: data.xaxisDataList,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
        },
        legend: {
            data: data.legendList,
        },
        tooltip: {
            trigger: 'axis',
        },
        yAxis: {
            type: 'value',
        },
        series: data.lineDataList?.map((item: LineData) => ({
            name: item.name,
            type: 'line',
            data: item.data,
            stack: item.name,
            emphasis: {
                focus: 'series',
            },
        })),
    };
};

const initLoginPlatformLineChart = async () => {
    await loginPlatformLineChartApi({ type: 3, time: '', goHeavy: false }).then((result) => {
        Object.assign(actNumOption, getEchartsOptions(result.data));
    });
    await loginPlatformLineChartApi({ type: 3, time: '', goHeavy: true }).then((result) => {
        Object.assign(logNumOption, getEchartsOptions(result.data));
    });
};

onMounted(() => {
    log('Page <<Dashboard>> mounted.');
    initLoginPlatformLineChart();
});
</script>
