import { ApiProperty } from "@nestjs/swagger";
import {IsNumber} from "class-validator";

export class RemoveTaskDto {
    @ApiProperty({example: '1', description: 'ID задачи'})
    @IsNumber({}, {message: 'ID должен быть цифрой'})
    readonly id: number;
}