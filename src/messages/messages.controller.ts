import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './DTO/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessage() {}

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id); 
    }
}
