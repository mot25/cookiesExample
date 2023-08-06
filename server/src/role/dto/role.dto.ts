import { ApiProperty } from '@nestjs/swagger';

export class RoleCreateDto {

    @ApiProperty({ example: 'admin', description: 'Role user' })
    readonly value: string

    @ApiProperty({ example: 'God mode', description: 'Description role' })
    readonly description: string

}