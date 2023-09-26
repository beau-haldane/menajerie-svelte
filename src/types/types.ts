export interface Gig {
  id: number;
  created_at: Date;
  name: string;
  date: Date;
  time: string;
  blurb: string;
  link: string;
  link_button_text: string;
  publish: boolean;
  venue_name: string;
  venue_address: string;
}