import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manga } from "../Interfaces/Manga_interface";
import { CreateMangaDto } from '../DTO/Create-manga.dto';


@Injectable()
export class ChapterServices {

   constructor(@InjectModel('Manga') private readonly mangaModel: Model<Manga>) {}

   async createManga(createMangaDto: CreateMangaDto): Promise<Manga> {
      const createdManga = new this.mangaModel(createMangaDto);
      return createdManga.save();
    }

   

   async findAll(): Promise<Manga[]>{
      return this.mangaModel.find().exec();
   }
}