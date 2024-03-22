/**
 * 接口响应数据
 */
export class R<T = any> {
    static readonly CODE_SUCCESS: number = 1;
    static readonly CODE_ERROR: number = 0;
    code!: number | string;
    message!: string;
    data!: T;
}

/**
 * 分页请求接口响应数据
 */
export interface PageResult<T = any> {
    content?: T[];
    totalElements?: number | string;
    pageable?: {
        pageNumber?: number;
        pageSize?: number;
    };
    last?: boolean;
}

/**
 * 分页请求参数
 */
export interface PageRequestParams {
    page?: number;
    size?: number;
    sort?: string;
    order?: string;
    q?: string;
}

/**
 * 实体主键
 */
export type Key = string | number;

/**
 * 主键实体基类
 */
export abstract class AbstractEntity {
    id?: number | string = 0;
}

/**
 * 实体基类
 */
export abstract class BaseEntity extends AbstractEntity {
    active?: boolean = false;
    createdAt?: Date = null;
    createdBy?: number | string = 0;
    lastModifiedAt?: Date | null = null;
    lastModifiedBy?: number | string = 0;
    deletedAt?: Date | null = null;
    deletedBy?: number | string = 0;
}
