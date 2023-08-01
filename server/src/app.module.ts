import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { AuthModel } from './auth/models/auth.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    TestModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: `postgres`,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'cookie',
      models: [
        AuthModel
      ],
      synchronize: false,
      autoLoadModels: true

    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
