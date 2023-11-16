import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import {MongooseModule} from '@nestjs/mongoose'
import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { TelegramController } from './telegram.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:"User",schema:UserSchema}])],
  providers: [TelegramService],
  controllers: [TelegramController]
})
export class TelegramModule {}
