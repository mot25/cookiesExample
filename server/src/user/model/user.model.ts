import { ApiProperty } from '@nestjs/swagger';
import { RoleModel } from 'role/model/roleModel';
import { rolesUsersModel } from 'role/model/rolesUsersModel';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserCreateDto } from 'user/dto/user.dto';


@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, UserCreateDto> {

    @ApiProperty({ example: '1', description: 'Уникальный id пользователя' })
    @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
    id: number

    @ApiProperty({ example: 'mail@mail.com', description: 'email пользователя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
    email: string

    @ApiProperty({ example: 'qwerty12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({ example: 'Matvey', description: 'Name пользователя', })
    @Column({ type: DataType.STRING, allowNull: true })
    name: string

    @ApiProperty({ example: 'false', description: 'Флаг зашел как гость' })
    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    isGuest: boolean

    @ApiProperty({ example: 'true', description: 'Удален или нет пользователь' })
    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
    isActive: boolean

    @BelongsToMany(() => RoleModel, () => rolesUsersModel)
    roles: RoleModel[]

}