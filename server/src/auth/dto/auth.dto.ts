import { ApiProperty } from "@nestjs/swagger";

export class ResponseToken {
    @ApiProperty({ example: "token jwt" })
    readonly token: string
}