import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleCreateDto } from './dto/Role.dto';

@Controller('role')
export class RoleController {
    constructor(private roleServices: RoleService) { }

    @Get()
    getAllRole() {
        return this.roleServices.getAllRoles()
    }

    @Post('create')
    createRole(@Body() dto: RoleCreateDto) {
        return this.roleServices.createRole(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleServices.getRoleByValue(value)
    }

}
