import mongoose, { Schema, Document } from 'mongoose';


export const ChapterSchema = new Schema({
  chapterNumber: { type: Number, required: true },
  images: [{ type: String, required: true }],
});


export const VolumeSchema = new Schema({
  volumeNumber: { type: Number, required: true }, 
  chapters: [ChapterSchema], 
});


export const MangaSchema = new Schema({
  title: { type: String, required: true },
  volumes: [VolumeSchema], 
});


export interface Chapter extends Document {
  chapterNumber: number;
  images: string[]; 
}


export interface Volume extends Document {
  volumeNumber: number;
  chapters: Chapter[];
}


export interface Manga extends Document {
  title: string;
  volumes: Volume[];
}

export default mongoose.model<Manga>('Manga', MangaSchema);