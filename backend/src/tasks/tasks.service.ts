import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task-dto';
import { RemoveTaskDto } from './dto/remove-task-dto';
import { Tasks } from './tasks.model';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Tasks) private tasksRepository: typeof Tasks){}

    async createTask(dto: CreateTaskDto) {
        const task = await this.tasksRepository.create(dto);
        const allTasks = await this.getAllTasks()
        return {task, allTasks};
    }

    async getAllTasks() {
        const tasks = await this.tasksRepository.findAll({include: {all: true}});
        return this.sortableTasks(tasks);
    }

    async removeTask(dto: RemoveTaskDto) {
        const {id} = dto
        const task = await this.getTaskById(id)

        if (!task) {
            throw new HttpException(`Задача с ID: ${id} не найдена`, HttpStatus.NOT_FOUND)
        }

        await this.tasksRepository.destroy({
            where: {id}
        })

        return task
    }

    async getTaskById(id: number) {
        const task = await this.tasksRepository.findOne({where: {id}, include: {all: true}})
        return task;
    }

    sortableTasks(tasks: any) {
        return tasks.sort((a: any, b: any) => {
            const dateA = new Date(a.taskExecution).getTime();
            const dateB = new Date(b.taskExecution).getTime();
            return (dateA > dateB) ? -1 : 1;  
        })
    }
}
