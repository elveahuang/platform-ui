"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSessionEntity = void 0;
const id_entity_1 = require("../../../commons/entity/id.entity");
const typeorm_1 = require("typeorm");
let UserSessionEntity = class UserSessionEntity extends id_entity_1.IdEntity {
    userId;
    sessionId;
    username;
    host;
    ua;
    lastAccessDatetime;
};
exports.UserSessionEntity = UserSessionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'user_id' }),
    __metadata("design:type", BigInt)
], UserSessionEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'session_id' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'username' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'host' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "host", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ua' }),
    __metadata("design:type", String)
], UserSessionEntity.prototype, "ua", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_access_datetime' }),
    __metadata("design:type", Date)
], UserSessionEntity.prototype, "lastAccessDatetime", void 0);
exports.UserSessionEntity = UserSessionEntity = __decorate([
    (0, typeorm_1.Entity)('sys_user_session')
], UserSessionEntity);
//# sourceMappingURL=user-session.entity.js.map