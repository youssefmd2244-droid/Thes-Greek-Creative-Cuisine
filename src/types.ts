export type Language = 'el' | 'en';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameEl: string;
  descriptionEn: string;
  descriptionEl: string;
  price: number;
  image: string;
  category: 'food' | 'drinks' | 'addons' | 'chefs' | 'guest';
  badgeEn?: string;
  badgeEl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  roleEl: string;
  textEn: string;
  textEl: string;
  rating: number;
}
