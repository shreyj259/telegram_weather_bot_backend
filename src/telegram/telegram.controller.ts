import { Controller,Get,Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
    constructor(private telegramService:TelegramService){}
    
    @Get()
    async getAllBooks(){
        return this.telegramService.getAllUsers
    }

}
