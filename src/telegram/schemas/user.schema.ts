import { Schema,Prop,SchemaFactory} from "@nestjs/mongoose";


@Schema()
export class User{
    @Prop()
    name:string;

    @Prop({unique:true,required:true})
    chatId:string;

    @Prop({unique:true})
    username:string;

    @Prop({default:false})
    isBlocked:boolean;

    @Prop()
    city:string;

}


export const UserSchema=SchemaFactory.createForClass(User)