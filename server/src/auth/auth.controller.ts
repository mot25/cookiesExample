import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServices: AuthService) { }



    @Post('sigin')
    async siginUser(@Body() body: any) {
        const res = await this.authServices.siginAuth(body)
        return res
    }
}
