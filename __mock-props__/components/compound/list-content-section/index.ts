import {
  IListItem,
  IListContentSection,
  ListStyleEnum,
  SectionThemeEnum,
} from '@src/types/compound';
import { IconEnum } from '@src/types/root';

export const protableText1 = [
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Personal data means information capable of identifying an individual. It does not include anonymised data.',
      },
    ],
  },
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'We may process the following categories of personal data about you:',
      },
    ],
  },
];
export const protableText2 = [
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'We know that the cost and logistics of organising childcare can prevent some people from taking part in personal development and networking opportunities like attending conferences.',
      },
    ],
  },
];

export const protableText3 = [
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: `We want to alleviate some of that by offering an on-site creche at the Brighton Centre with experienced DBS checked and Paediatric First Aid trained staff.`,
      },
    ],
  },
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: `They provide a wide section of activities including arts, crafts, music and movement, games, party games, snacks, free play, story time, and role play. We charge a nominal fee of £5 to secure a spot so we can accurately gauge demand and schedule adequate cover.`,
      },
    ],
  },
];
export const protableText4 = [
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: `That includes any communication that you send to us whether that be through the contact form on our website, through email, text, social media messaging, social media posting or any other communication.`,
      },
    ],
  },
  {
    _type: 'block',
    markDefs: [],
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: `We process this data for the purposes of communicating with you, for record keeping and for the establishment, pursuance or defence of legal claims. Our lawful ground for this processing is our legitimate interests which in this case are to reply to communications sent to us, to keep records and to establish, pursue or defend legal claims.`,
      },
    ],
  },
];
export const protableText5 = [
  {
    _key: '3a81a8509ba1',
    _type: 'block',
    children: [
      {
        _key: '51a67de85a100',
        _type: 'span',
        marks: [],
        text: 'Contrary to popular belief,',
      },
      {
        _key: 'b85ddf6033d2',
        _type: 'span',
        marks: ['strong'],
        text: ' ',
      },
      {
        _key: '4ee7627a3c5d',
        _type: 'span',
        marks: ['strong'],
        text: 'Lorem Ipsum',
      },
      {
        _key: 'd3f9afaa052b',
        _type: 'span',
        marks: [],
        text: ' is not simply ',
      },
      {
        _key: 'ec13bf8f865b',
        _type: 'span',
        marks: ['em', 'strong', 'underline', '1bd567ab6e7f'],
        text: 'random text',
      },
      {
        _key: '63819c56e2aa',
        _type: 'span',
        marks: [],
        text: '. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
      },
    ],
    markDefs: [
      {
        _key: '1bd567ab6e7f',
        _type: 'link',
        href: 'https://www.google.com/',
      },
    ],
    style: 'normal',
  },
  {
    _key: 'e2bd2efe2273',
    _type: 'block',
    children: [
      {
        _key: 'a2d21495293b',
        _type: 'span',
        marks: [],
        text: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem ',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
];

const conentListDataWithIcon: IListItem[] = [
  {
    title: `Communication Data`,
    description: protableText4,
    icon: IconEnum.TrainFill,
  },
  {
    title: `Customer Data`,
    description: protableText5,
    icon: IconEnum.FlightTakeoffFill,
  },
  {
    title: `User Data`,
    description: protableText4,
    icon: IconEnum.BusFill,
  },
  {
    title: `Technical Data`,
    description: protableText5,
    icon: IconEnum.MotorbikeLine,
  },
];

const conentListData: IListItem[] = [
  {
    title: `Communication Data`,
    description: protableText4,
  },
  {
    title: `Customer Data`,
    description: protableText5,
  },
  {
    title: `User Data`,
    description: protableText4,
  },
  {
    title: `Technical Data`,
    description: protableText5,
  },
];

export const listConentBlockAboutBallot: IListContentSection = {
  sectionTheme: SectionThemeEnum.Blue,
  isDefaultBg: false,
  contentHeading: {
    sectionHeading: {
      title: 'Why a ballot?',
    },
    description: protableText2,
  },
  contentList: conentListData,
  listStyle: ListStyleEnum.Number,
};

export const listConentBlockAboutVenueTravel: IListContentSection = {
  sectionTheme: SectionThemeEnum.Blue,
  isDefaultBg: false,
  contentHeading: {
    sectionHeading: {
      title: 'Transportation is Near you ',
    },
    description: protableText2,
  },
  contentList: conentListDataWithIcon,
  listStyle: ListStyleEnum.Icon,
};

export const listConentBlockAboutCreche: IListContentSection = {
  sectionTheme: SectionThemeEnum.Blue,
  isDefaultBg: true,
  contentHeading: {
    sectionHeading: {
      subTitle: 'Write Text Here',
      title: 'BrightonSEO Crehe',
    },
    description: protableText2,
  },
  contentList: conentListData,
  listStyle: ListStyleEnum.None,
  button: {
    buttonText: 'Booking Now',
    linkOpenNewTab: true,
    link: 'https://www.google.com',
  },
};
