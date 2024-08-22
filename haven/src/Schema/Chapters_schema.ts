import { Schema, Document} from 'mongoose';


export const ChaptersSchema = new Schema({
   
   title: { type: String, required: true },
   volume: { type: Number, required: true },
   chapters: [
      {
         url: { type: [String], required: true }
      }
   ]
});

export interface Chapters extends Document {
   title: string;
   volume: Number;
   chapters: {
      url: string[];
   }[];
}