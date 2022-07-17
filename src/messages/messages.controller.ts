import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './DTO/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        //DON'T DO THIS ON REAL APP, USE DEPENDECY INJECTION

        this.messagesService = new MessagesService();
    }


    @Get()
    listMessage() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
