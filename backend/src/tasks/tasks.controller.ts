import { Body, Controller, Get, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateTaskDto } from './dto/create-task-dto';
import { RemoveTaskDto } from './dto/remove-task-dto';
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @ApiOperation({summary: 'Создание задачи'})
    @ApiResponse({status: HttpStatus.CREATED, type: [Tasks]})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createTask(taskDto)
    }

    @ApiOperation({summary: 'Получить все задания'})
    @ApiResponse({status: HttpStatus.OK, type: [Tasks]})
    @Get()
    getAll() {
        return this.tasksService.getAllTasks()
    }

    @ApiOperation({summary: 'Удаление задания'})
    @ApiResponse({status: 200, type: Tasks})
    @UsePipes(ValidationPipe)
    @Post('/remove')
    remove(@Body() taskDto: RemoveTaskDto) {
        return this.tasksService.removeTask(taskDto)
    }
}
