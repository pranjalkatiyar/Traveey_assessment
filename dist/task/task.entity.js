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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../employee/employee.entity");
let Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        name: 'id'
    }),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "title",
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "description",
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "dueDate",
        nullable: false,
    }),
    __metadata("design:type", Date)
], Task.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, employee => employee.tasks, { onDelete: 'CASCADE' }),
    __metadata("design:type", employee_entity_1.Employee)
], Task.prototype, "employee", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map