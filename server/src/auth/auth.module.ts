import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthModel } from './models/auth.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([AuthModel])],
  providers: [AuthService,],
  controllers: [AuthController]
})
export class AuthModule { }
