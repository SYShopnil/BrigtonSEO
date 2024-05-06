import { ISanityTestimonial } from './../../testimonial/index';
import { ISanityCommonSessionFields } from '../../general';

interface ISanityBrightonSessions extends ISanityCommonSessionFields {
  auditorium: string;
}

interface ISanityBrightonEventSlot {
  startTime: string;
  endTime: string;
  sessions: ISanityBrightonSessions[];
}

export interface ISanityBrightonEvent {
  eventNumber: number;
  startDate: string;
  venue: string;
  googleMapLink: string;
  firtDaySessions: ISanityBrightonEventSlot[];
  secondDaySessions?: ISanityBrightonEventSlot[];
  testimonials?: ISanityTestimonial[];
}
