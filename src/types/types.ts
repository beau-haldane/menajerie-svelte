export interface Gig {
  id: number;
  created_at: Date;
  name: string;
  date: Date;
  time: string;
  blurb: string;
  ticket_link: string;
  event_link: string;
  publish: boolean;
  venue_name: string;
  venue_address: string;
}