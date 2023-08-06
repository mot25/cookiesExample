import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from 'role/model/roleModel';
import { rolesUsersModel } from 'role/model/rolesUsersModel';
import { RoleModule } from 'role/role.module';
import { UserModel } from 'user/model/user.model';
import { UserModule } from 'user/user.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST_BD,
      port: +process.env.PORT_DB,
      username: process.env.USERNAME_BD,
      password: process.env.PASSWORD_DB,
      database: process.env.database,
      models: [
        UserModel,
        RoleModel,
        rolesUsersModel,
      ],
      // synchronize: true,
      autoLoadModels: true

    }),
    UserModule,
    RoleModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

