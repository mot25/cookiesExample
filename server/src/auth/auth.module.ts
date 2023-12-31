import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule { }
