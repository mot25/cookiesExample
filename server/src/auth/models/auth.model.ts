import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: 'auth' , createdAt: false, updatedAt: false})
export class AuthModel extends Model<AuthModel, any> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: false, allowNull: true })
    password: string;

    @Column({ type: DataType.STRING, unique: false, allowNull: true })
    login: string;

}