/**
 * Internal Imports
 */
import { IconEnum } from '@src/types/root';

type IFooterHeading = {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  linkOpenNewTab: boolean;
};

type IFooterContactInfo = {
  address: string;
  phoneNumberOne: string;
  phoneNumberTwo: string;
  email: string;
};

type ILinkField = {
  label: string;
  url: string;
};

type IFooterColumn = {
  title: string;
  linkFields: ILinkField[];
};

type ISocialLink = {
  platform: IconEnum;
  url: string;
};

type IFooterSocialColumn = {
  title: string;
  socialLinks: ISocialLink[];
};

export interface IFooterSection {
  headingInfo: IFooterHeading;
  contactInfo: IFooterContactInfo;
  columnOne: IFooterColumn;
  columnTwo: IFooterColumn;
  socialColumn: IFooterSocialColumn;
}
