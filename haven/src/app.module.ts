import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { chapterModule } from './Modules/Chapters_module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo-db:27017/nest'),
    chapterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
