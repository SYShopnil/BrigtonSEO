interface IButtonInfo {
  buttonText: string;
  link: string;
  linkOpenNewTab: boolean;
}

export enum PriceBoxSizeEnum {
  Large = 'large',
  Small = 'small',
}

export enum PriceBoxColorSchemeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  BlackLight = 'blackLight',
}

export interface IPricingCard {
  priceBoxColor: PriceBoxColorSchemeEnum;
  priceName: string;
  priceDescription?: string;
  price: number;
  priceVat: string;
  buttonInfo: IButtonInfo;
  priceBoxSize: PriceBoxSizeEnum;
}
