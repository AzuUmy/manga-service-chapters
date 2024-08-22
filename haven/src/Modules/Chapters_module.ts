import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterController } from "src/Controllers/Chapters_controller";
import { ChapterServices } from "src/Services/Chapter_Service";
import { ChaptersSchema } from "src/Schema/Chapters_schema";

@Module({
   imports: [
      MongooseModule.forFeature([{ name: 'Chapters', schema: ChaptersSchema}]),
   ],

   controllers: [ChapterController],
   providers: [ChapterServices]
})


export class chapterModule {}