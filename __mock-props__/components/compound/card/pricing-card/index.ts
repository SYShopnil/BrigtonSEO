import {
  IPricingCard,
  PriceBoxColorSchemeEnum,
  PriceBoxSizeEnum,
} from '@src/types/compound';

export const pricingCardLargeData: IPricingCard = {
  priceBoxColor: PriceBoxColorSchemeEnum.Secondary,
  priceName: 'basic',
  priceDescription: 'in person',
  price: 270,
  priceVat: 'vat',
  buttonInfo: {
    buttonText: 'get ticket',
    link: 'https://www.google.com',
    linkOpenNewTab: false,
  },
  priceBoxSize: PriceBoxSizeEnum.Large,
};

export const pricingCardSmallData: IPricingCard = {
  priceBoxColor: PriceBoxColorSchemeEnum.Secondary,
  priceName: 'basic',
  priceDescription: 'in person',
  price: 270,
  priceVat: 'vat',
  buttonInfo: {
    buttonText: 'get ticket',
    link: 'https://www.google.com',
    linkOpenNewTab: false,
  },
  priceBoxSize: PriceBoxSizeEnum.Small,
};
