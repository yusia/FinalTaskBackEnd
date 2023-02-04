import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Pashtet:FInalTask369350@cluster0.z8u3ut3.mongodb.net/users?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}