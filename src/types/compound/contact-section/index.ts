/**
 * Internal Imports
 */
import { IForm } from '@src/types/root';

// internal uses
interface IContactHeading {
  title: string;
  subTitle?: string;
  description?: string;
}

interface IContactField {
  label: string;
  value: string;
}

/**
 * IContact
 */
export interface IContact {
  address?: IContactField;
  phone: IContactField;
}

/**
 * IContactSection
 */
export interface IContactSection {
  sectionHeading: IContactHeading;
  contact: IContact;
  formData: IForm;
}
