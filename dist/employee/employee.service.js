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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./employee.entity");
let EmployeeService = class EmployeeService {
    constructor(employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    async insertEmployee(name, email, phone, hireDate, position) {
        const newData = new employee_entity_1.Employee();
        newData.name = name;
        newData.email = email;
        newData.phone = phone;
        newData.hireDate = hireDate;
        newData.position = position;
        const id = await this.employeeRepo.save(newData);
        return id;
    }
    async getemployee() {
        return await this.employeeRepo.find();
    }
    async getSingleEmployee(id) {
        const result = await this.employeeRepo.findOne({
            where: {
                id: id
            }
        });
        if (!result) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return result;
    }
    async updateEmployeeById(id, name, email, phone, hireDate, position) {
        const result = await this.employeeRepo.update(id, {
            name: name,
            email: email,
            phone: phone,
            hireDate: hireDate,
            position: position
        });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return "Updated Successfully";
    }
    async removeEmployee(id) {
        const result = await this.employeeRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Could not find Employee');
        }
        return "Deleted Successfully";
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map