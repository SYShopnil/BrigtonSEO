import { ISanitySocialLinks } from './../general/index';
import { ISanityCTA } from '../general';

interface ColumnLinks {
  label: string;
  url: string;
}

export interface ISanityFooter {
  _type: string;
  address: string;
  columnOneLinks: ColumnLinks[];
  columnOneTitle: string;
  columnTwoLinks: ColumnLinks[];
  columnTwoTitle: string;
  cta: ISanityCTA;
  ctaSectionTitle: string;
  ctaSectionSubtitle: string;
  email: string;
  primaryPhone: string;
  secondaryPhone: string;
  socialColumnTitle: string;
  socialLinks: ISanitySocialLinks[];
}
