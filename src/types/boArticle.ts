import { MeLiked } from "./product";
import { Member } from "./user";

export interface BoArticle {
  _id: string;
  art_subject: string;
  art_constent: string;
  art_image?: string | null;
  bo_id: string;
  art_status: number;
  art_likes: number;
  art_views: string;
  mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  member_data: Member;
  me_liked: MeLiked[];
}

export interface SearchArticlesObj {
   page: number
   limit: number
   bo_id: string
   order?: number | null
}