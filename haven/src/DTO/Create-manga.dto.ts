export class CreateMangaDto {
   readonly title: string;
   readonly volumes: {
     volumeNumber: number;
     chapters: {
       chapterNumber: number;
       images: string[];
     }[];
   }[];
 }