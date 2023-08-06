import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from 'role/model/roleModel';
import { rolesUsersModel } from 'role/model/rolesUsersModel';
import { RoleModule } from 'role/role.module';

import { UserModel } from './model/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      RoleModel,
      rolesUsersModel
    ]),
    RoleModule,
  ],
  exports: [UserService]
})
export class UserModule { }
