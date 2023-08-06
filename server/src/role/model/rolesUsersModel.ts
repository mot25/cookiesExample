import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { RoleModel } from './roleModel';
import { UserModel } from 'user/model/user.model';

@Table({ tableName: 'rolesUsers', createdAt: false, updatedAt: false })
export class rolesUsersModel extends Model<rolesUsersModel> {
    @ApiProperty({ example: '1', description: 'Уникальный id rolesUsers' })
    @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
    id: number

    @ForeignKey(() => RoleModel)
    @ApiProperty({ example: '1', description: 'Уникальный id role' })
    @Column({ type: DataType.INTEGER })
    roleId: number

    @ForeignKey(() => UserModel)
    @ApiProperty({ example: '1', description: 'Уникальный id user' })
    @Column({ type: DataType.INTEGER })
    userId: number
}