import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserCreateDto } from 'user/dto/user.dto';
import { UserModel } from 'user/model/user.model';
import { UserService } from 'user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(userDto: UserCreateDto) {
        return this.generateToken(await this.validateUser(userDto))
    }
    async registration(userDto: UserCreateDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) throw new HttpException('Такой email уже есть', HttpStatus.BAD_REQUEST)
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.sigUpUser({ ...userDto, password: hashPassword })
        return this.generateToken(user)
    }

    private generateToken(userDto: UserModel) {
        const payload = {
            email: userDto.email,
            password: userDto.password,
            roles: userDto.roles
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: UserCreateDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if (!user) throw new UnauthorizedException('Uset not found')
        const comparePass = await bcrypt.compare(userDto.password, user.password)
        if (!comparePass) throw new UnauthorizedException('Password not correct ')
        return user
    }
}
