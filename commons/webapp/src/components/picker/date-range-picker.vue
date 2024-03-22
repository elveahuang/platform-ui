<template>
    <a-range-picker
        :allow-clear="allowClear"
        :allow-empty="allowEmpty"
        v-model:value="modelValue"
        :show-time="showTime"
        :format="format"
        @change="onChange"
    />
</template>
<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { computed, ref, watch } from 'vue';
import {
    DATE_PATTEN,
    DATETIME_PATTEN,
    formatDate,
    formatDatetime,
    formatTime,
    parseDate,
    parseDatetime,
    parseTime,
    TIME_PATTEN,
} from '@commons/core/utils/date';
import { isNull } from 'lodash-es';

const emits = defineEmits(['update:from', 'update:to']);
const props = defineProps({
    with: {
        type: Number,
        required: false,
        default: 360,
    },
    type: {
        type: String,
        default: 'datetime',
    },
    from: {
        type: String,
        default: '',
    },
    to: {
        type: String,
        default: '',
    },
});
const getShowTimeValue = () => {
    if (props.type === 'datetime') {
        return {
            hideDisabledOptions: true,
            defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')],
        };
    }
    return false;
};
const getDateFormat = (type: string): string => {
    if (type === 'datetime') {
        return DATETIME_PATTEN;
    } else if (type === 'date') {
        return DATE_PATTEN;
    } else if (type === 'time') {
        return TIME_PATTEN;
    } else {
        return DATETIME_PATTEN;
    }
};
const getValue = (from: string | Date, to: string | Date): [Dayjs, Dayjs] => {
    if (props.type === 'datetime') {
        return [parseDatetime(from), parseDatetime(to)];
    } else if (props.type === 'date') {
        return [parseDate(from), parseDatetime(to)];
    } else if (props.type === 'time') {
        return [parseTime(from), parseTime(to)];
    } else {
        return [null, null];
    }
};
const formatValue = (obj: string | Date | Dayjs): string => {
    if (!isNull(obj)) {
        if (props.type === 'datetime') {
            return formatDatetime(obj, '');
        } else if (props.type === 'date') {
            return formatDate(obj, '');
        } else if (props.type === 'time') {
            return formatTime(obj, '');
        }
    }
    return '';
};
const fromValue = computed<string>(() => props.from);
const toValue = computed<string>(() => props.to);
const modelValue = ref<[Dayjs, Dayjs]>(getValue(props.from, props.to));
const format = ref<string>(getDateFormat(props.type));
const allowEmpty = ref<[boolean, boolean]>([true, true]);
const allowClear = ref<boolean>(true);
const showTime = ref(getShowTimeValue());
const onChange = (values: [Dayjs, Dayjs]) => {
    if (isNull(values)) {
        emits('update:from', '');
        emits('update:to', '');
    } else {
        emits('update:from', formatValue(values[0]));
        emits('update:to', formatValue(values[1]));
    }
};

watch([fromValue, toValue], ([newFromValue, newToValue]) => {
    modelValue.value = getValue(newFromValue, newToValue);
});
</script>
