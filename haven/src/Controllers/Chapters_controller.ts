import { Controller, Get, Post, Body } from "@nestjs/common";
import { ChapterServices } from '../Services/Chapter_Service';
import { Chapters } from "src/Interfaces/Chapters";

@Controller('Chapters')
export class ChapterController {
   constructor( private readonly chapterSerivces: ChapterServices){}

   @Get()
   async findAll(): Promise<Chapters[]> {
      return this.chapterSerivces.findAll();
   }
}
