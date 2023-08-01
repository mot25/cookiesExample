import { Injectable } from '@nestjs/common';

import { AuthModel } from './models/auth.model';
import { Sequelize } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthModel) private authRepositori: typeof AuthModel
    ) { }


    async siginAuth(user: any): Promise<any> {
        return await this.authRepositori.create(user)
    }

}