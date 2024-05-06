/**
 * Internal Imports
 */
import { IContactSection } from '@src/types/compound';
import { formData } from '@root/__mock-props__/components/root/form';

// contactSectionWithoutAddressData
export const contactSectionWithoutAddressData: IContactSection = {
  sectionHeading: {
    title: 'Host For Fringe Events',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  contact: {
    phone: {
      label: 'Phone',
      value: '+456 9876 5432',
    },
  },
  formData: formData,
};

// contactSectionWithAddressData
export const contactSectionWithAddressData: IContactSection = {
  sectionHeading: {
    subTitle: 'Contact Us',
    title: 'We Here to help',
  },
  contact: {
    address: {
      label: 'Office',
      value:
        'Plus X Innovation Hub, c/o SiteVisibility Lewes Road, Brighton, BN2 4GL',
    },
    phone: {
      label: 'Phone',
      value: '+456 9876 5432',
    },
  },
  formData: formData,
};
