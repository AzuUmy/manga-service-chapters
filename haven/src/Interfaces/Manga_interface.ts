import { Document } from 'mongoose';

interface Chapter {
  chapterNumber: number;
  images: string[];
}


interface Volume {
  volumeNumber: number;
  chapters: Chapter[];
}


export interface Manga extends Document {
  title: string;
  volumes: Volume[];
}