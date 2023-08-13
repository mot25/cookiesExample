import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
    @ApiProperty({ example: 'mail@mail.com', description: 'email пользователя' })
    readonly email: string | null

    @ApiProperty({ example: 'qwerty12345', description: 'Пароль пользователя' })
    readonly password: string

    @ApiProperty({ example: 'true', description: "Вошел как гость" })
    readonly isGuest?: boolean
}
