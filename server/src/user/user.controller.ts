import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.dto';
import { UserModel } from './model/user.model';



@Controller('user')
export class UserController {
    constructor(private userServices: UserService) { }

    @ApiOperation({ summary: 'Получение всех юзеров' })
    @ApiResponse({ type: [UserModel], status: 200 })
    @Get('users')
    getAllUser() {
        return this.userServices.getAllUsers()
    }

    @ApiOperation({ summary: 'Создания юзера' })
    @ApiResponse({ type: UserModel, status: 200 })
    @Post('create')
    sigUpUser(@Body() dto: UserCreateDto) {
        return this.userServices.sigUpUser(dto)
    }
}
