import { MeFollowed } from "./follow";
import { MeLiked } from "./product";

export interface Restaurant {
  _id: string;
  mb_nick: string; //MVS yani bacendda schima ichida mb_nickni typi kattabilan String deb yozilgan edi. shunki bu JS ni birligi lekin bu yerda TS ni birligi boyicha kichik harfda yoziladi => string
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_discription?: string;
  mb_address?: string;
  mb_images?: string;
  mb_point: string;
  mb_top: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt?: number;
  createdAt?: Date;
  me_liked: MeLiked[]; //Meliked
}

export interface Member {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status?: string;
  mb_discription?: string; //mb_discription?:=> ? qoyilishiga sababrestaurantlar uchun addres yoki boshqa recuiredlar bolishishart lekin
  mb_address?: string; //mb lar uchun mb_addres, mb_dicription bolishi ham bomasligiham mumkin huddi shu imkonni ? belgisi qoyish orqali mb larga qoyish yoki qoymaslikni backend da ixtiyoriy belgilaganimizni
  mb_images?: string; //bildirishimiz mumkin.
  mb_point?: string;
  mb_top?: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt?: number;
  createdAt?: Date;
  me_liked?: MeLiked[]; //Meliked
  me_followed: MeFollowed[]; //Mefollowed
}
