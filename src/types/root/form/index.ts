// External Imports
import React from 'react';

// Internal Imports
import { IButton } from '@src/types/root';

export enum FormElementEnum {
  Input = 'input',
  TextArea = 'textarea',
  Checkbox = 'checkbox',
  Select = 'select',
}

// IForm
export interface IForm {
  formFields: IFormFieldProp[];
  buttonInfo: Omit<IButton, 'clickHandler'>;
  formTitle?: string;
  privacyInfo?: IPrivacyInfo;
  onSubmit: (formValues: IFormValues) => void;
}

// IFormField
export interface IFormField {
  fieldProps: IFormFieldProp;
  value: string | undefined;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>
  ) => void;
  formErrors: IFormValues;
}

// IFormFieldProp
export interface IFormFieldProp {
  name: string;
  space: number;
  isRequired: boolean;
  label?: string;
  elementType: FormElementEnum;
  type: string;
  placeholder?: string;
}

// IFormValues
export interface IFormValues {
  [key: string]: string | undefined;
}

// IPrivacyInfo
export interface IPrivacyInfo {
  link: string;
  linkText: string;
}
