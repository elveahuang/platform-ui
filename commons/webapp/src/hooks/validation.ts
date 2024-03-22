import { isEmpty, isEqual } from 'lodash-es';
import validator from 'validator';
import { useI18n } from 'vue-i18n';

// export type Validations = {
//     required: (message?: string) => (val: any) => string | true;
//     email: (message?: string) => (val: any) => string | true;
//     mobile: (message?: string) => (val: any) => string | true;
//     url: (message?: string) => (val: any) => string | true;
//     is: (message?: string) => (val: any) => string | true;
// };

export function useValidations() {
    const { t } = useI18n({ useScope: 'global' });

    function required(message = '') {
        const label = isEmpty(message) ? t('validations_required') : message;
        return (val: any) => !isEmpty(val) || label;
    }

    function is(value: any, message = '') {
        const label = isEmpty(message) ? t('validations_required') : message;
        return (val: any) => isEqual(val, value) || label;
    }

    function email(message = '') {
        const label = isEmpty(message) ? t('validations_email') : message;
        return (val: any) => isEmpty(val) || validator.isEmail(val) || label;
    }

    function mobile(message = '') {
        const label = isEmpty(message) ? t('validations_mobile') : message;
        return (val: any) => isEmpty(val) || validator.isMobilePhone(val) || label;
    }

    function url(message = '') {
        const label = isEmpty(message) ? t('validations_mobile') : message;
        return (val: any) => isEmpty(val) || validator.isURL(val) || label;
    }

    return {
        required,
        email,
        mobile,
        url,
        is,
    };
}

export type Validations = ReturnType<typeof useValidations>;
