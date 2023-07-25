import { Controller, Get, HostParam, Param, Query } from '@nestjs/common';

@Controller('test')
export class TestController {

    @Get()
    testGetRequest(@Param() param) {
        console.log("🚀 ~ file: test.controller.ts:8 ~ TestController ~ testGetRequest ~ param:", param)

        return 'testGetRequest'
    }

    @Get('quary')
    testByQuery(@Query() query: any) {
        console.log("🚀 ~ file: test.controller.ts:21 ~ TestController ~ testByQuery ~ query:", query)
        const { idQ } = query
        return `testByQuery ${idQ}`
    }

    @Get(':id')
    getById(@Param() param: any) {
        const { id } = param
        return `id ${id}`
    }

}
