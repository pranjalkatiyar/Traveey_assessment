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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_entity_1 = require("./task.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TaskService = class TaskService {
    constructor(TaskRepo) {
        this.TaskRepo = TaskRepo;
    }
    async insertTask(title, description, dueDate, employeeId) {
        const newData = new task_entity_1.Task();
        newData.title = title;
        newData.description = description;
        newData.dueDate = dueDate;
        newData.employee = { id: employeeId };
        const id = await this.TaskRepo.save(newData);
        return id;
    }
    async getTaskById(id) {
        const task = await this.TaskRepo.findOne({
            where: {
                id: id
            },
            relations: ['employee'],
        });
        if (!task) {
            throw new common_1.NotFoundException('Could not find Task');
        }
        return task;
    }
    async getAllTask() {
        const result = await this.TaskRepo.find({ relations: ['employee'] });
        if (!result) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return result;
    }
    async updateTaskById(id, title, description, dueDate, employeeId) {
        const result = await this.TaskRepo.update(id, {
            title: title,
            description: description,
            dueDate: dueDate,
            employee: { id: employeeId },
        });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return "Updated Successfully";
    }
    async removeEmployee(id) {
        const result = await this.TaskRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return "Deleted Successfully";
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map