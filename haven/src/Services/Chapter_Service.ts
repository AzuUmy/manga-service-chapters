import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapters } from '../Interfaces/Chapters';
import { Chapters as ChaptersDocument } from "../Interfaces/Chapters";


@Injectable()
export class ChapterServices {

   constructor(@InjectModel('Chapters') private chapterModel: Model<ChaptersDocument> ){}

   async findAll(): Promise<Chapters[]>{
      return this.chapterModel.find().exec();
   }
}