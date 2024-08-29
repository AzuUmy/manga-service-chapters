import { Controller, Get, Post, Body } from "@nestjs/common";
import { ChapterServices } from '../Services/Chapter_Service';
import { Manga } from '../Interfaces/Manga_interface';

@Controller('Chapters')
export class ChapterController {
   constructor( private readonly chapterSerivces: ChapterServices){}

   @Get()
   async findAll(): Promise<Manga[]> {
      return this.chapterSerivces.findAll();
   }
}
