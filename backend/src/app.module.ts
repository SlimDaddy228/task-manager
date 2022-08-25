import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Tasks } from "./tasks/tasks.model";
import { TasksModule } from './tasks/tasks.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
         envFilePath: `./env/.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_DATABASE,
          models: [Tasks],
          autoLoadModels: true
      }),
      TasksModule,
    ]
})
export class AppModule {}