import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserCreateDto } from 'user/dto/user.dto';

import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseToken } from './dto/auth.dto';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // @ApiResponse({ type: ResponseToken, status: 200 })
    @Post('login')
    async login(
        @Body() userDto: UserCreateDto,
        @Res({ passthrough: true }) response: Response
    ) {
        response.cookie('token', (await this.authService.login(userDto)).token);
        return 'ok'
    }

    @ApiResponse({ type: ResponseToken, status: 200 })
    @Post('/registration')
    registration(
        @Res({ passthrough: true }) response: Response
    ) {
        response.cookie('jwt', 'jwt22', { httpOnly: true, secure: false });
        return "this.authService.registration(userDto)"
    }

    @Get()
    testCookie(@Res({ passthrough: true }) response: Response) {
        response.cookie('jwt35', 'jwtToken56ß', { httpOnly: true, path: "/" });
        return 'ok'
    }
}
