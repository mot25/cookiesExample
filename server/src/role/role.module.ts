import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'user/model/user.model';

import { RoleModel } from './model/roleModel';
import { rolesUsersModel } from './model/rolesUsersModel';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [
    SequelizeModule.forFeature([
      RoleModel,
      UserModel,
      rolesUsersModel
    ]),
  ],
  exports: [RoleService]
})
export class RoleModule { }
