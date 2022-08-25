import { ApiProperty } from "@nestjs/swagger";
import {IsDateString, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @ApiProperty({example: 'Сделать тестовое задание', description: 'Описание задачи'})
    @IsString({message: 'Должно быть строкой'})
    @MinLength(4, {message: "Не меньше 4 и не больше 16 символов"})
    readonly label: string;

    @ApiProperty({example: '2022-08-25 00:00:00', description: 'Дата выполнения задачи'})
    @IsDateString()
    readonly taskExecution: string;
}