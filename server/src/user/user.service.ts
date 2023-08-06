import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleService } from 'role/role.service';

import { UserCreateDto } from './dto/user.dto';
import { UserModel } from './model/user.model';
import { RoleModel } from 'role/model/roleModel';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel) private userReposetories: typeof UserModel,
        private roleService: RoleService
    ) { }

    async getAllUsers() {
        return this.userReposetories.findAll({ include: { all: true } })
    }

    async sigUpUser(dto: UserCreateDto) {
        const user = await this.userReposetories.create(dto)
        const role = await this.roleService.getRoleByValue('user')
        user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getUserByEmail(email: string) {
        return this.userReposetories.findOne({ where: { email } })
    }
}
