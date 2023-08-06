import { ApiProperty } from "@nestjs/swagger";
import { RoleCreateDto } from "role/dto/Role.dto";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserModel } from "user/model/user.model";
import { rolesUsersModel } from "./rolesUsersModel";

@Table({ tableName: 'roles' })
export class RoleModel extends Model<RoleModel, RoleCreateDto> {
    @ApiProperty({ example: '1', description: 'Уникальный id role' })
    @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
    id: number

    @ApiProperty({ example: 'admin', description: 'Role user' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string

    @ApiProperty({ example: 'God mode', description: 'description role' })
    @Column({ type: DataType.STRING, allowNull: true })
    description: string

    @BelongsToMany(() => UserModel, () => rolesUsersModel)
    users: UserModel[]
}