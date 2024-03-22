import { useUserStore } from '@commons/core/store';
import { isEmpty, isString } from 'lodash-es';
import { Directive, DirectiveBinding } from 'vue';

/**
 * 指令 - 用于检查是否拥有指定的权限
 */
function checkAuthority(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const { user } = useUserStore();
    if (Array.isArray(value)) {
        if (value.length > 0) {
            const hasAuthority = user?.authorities?.some((authority) => {
                return value.includes(authority);
            });
            if (!hasAuthority && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    } else if (isString(value) && !isEmpty(value)) {
        const hasAuthority = user?.authorities?.includes(value);
        if (!hasAuthority && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
}

/**
 * 指令 - 用于检查是否拥有指定的角色
 */
function checkRole(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const { user } = useUserStore();
    if (Array.isArray(value)) {
        if (value.length > 0) {
            const hasRole = user?.roles?.some((role) => {
                return value.includes(role);
            });
            if (!hasRole && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    } else if (isString(value) && !isEmpty(value)) {
        const hasRole = user?.roles?.includes(value);
        if (!hasRole && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
}

export const hasAuthority: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        checkAuthority(el, binding);
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        checkAuthority(el, binding);
    },
};

export const hasRole: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        checkRole(el, binding);
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        checkRole(el, binding);
    },
};
