import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TasksCreationAttrs {
    readonly label: string,
    readonly taskExecution: string,
}

@Table({tableName: 'tasks'})
export class Tasks extends Model<Tasks, TasksCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор задачи'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Выполнить тестовое задание', description: 'Описание задачи'})
    @Column({type: DataType.STRING, allowNull: false})
    label: string;

    @ApiProperty({example: '2022-08-25 00:00:00', description: 'Дата выполнения заачи'})
    @Column({type: DataType.DATE, allowNull: true})
    taskExecution: string;
}