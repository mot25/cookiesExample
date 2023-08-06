import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'user/dto/user.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('login')
    login(@Body() userDto: UserCreateDto) {
        return this.authService.login(userDto)
    }
    @Post('registration')
    registration(@Body() userDto: UserCreateDto) {
        return this.authService.registration(userDto)
    }
}
