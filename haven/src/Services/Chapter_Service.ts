import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manga } from "../Interfaces/Manga_interface";


@Injectable()
export class ChapterServices {

   constructor(@InjectModel('Manga') private readonly mangaModel: Model<Manga>) {}
   
   async findAll(): Promise<Manga[]>{
      return this.mangaModel.find().exec();
   }
}