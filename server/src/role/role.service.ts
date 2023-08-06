import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { RoleCreateDto } from './dto/Role.dto';
import { RoleModel } from './model/roleModel';

@Injectable()
export class RoleService {
    constructor(@InjectModel(RoleModel) private roleRepo: typeof RoleModel) { }

    getAllRoles() {
        return this.roleRepo.findAll()
    }

    createRole(dto: RoleCreateDto) {
        return this.roleRepo.create(dto)
    }

    getRoleByValue(value: string) {
        return this.roleRepo.findOne({ where: { value } })
    }
}
