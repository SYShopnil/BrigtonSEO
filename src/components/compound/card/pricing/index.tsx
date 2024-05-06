import {
  IPricingCard,
  PriceBoxColorSchemeEnum,
  PriceBoxSizeEnum,
} from '@src/types/compound';
import { Button, Card } from '@src/components/root';
import { GoPlus } from 'react-icons/go';
import Styles from './index.module.scss';
import { useState } from 'react';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  CardBorderRadiusEnum,
  CardShadowEnum,
} from '@src/types/root';

/**
 * @method buttonColorSchemeSelector
 * @param priceBoxColor
 * @returns {object} normal, hover
 * @description this function will reveive priceBoxColor and return button normal and hover colorScheme
 */
const buttonColorSchemeSelector = (priceBoxColor: PriceBoxColorSchemeEnum) => {
  switch (priceBoxColor) {
    case PriceBoxColorSchemeEnum.Primary: {
      return {
        normal: ButtonColorSchemeEnum.BlueBgTextWhite,
        hover: ButtonColorSchemeEnum.WhiteBgTextBlue,
      };
    }
    case PriceBoxColorSchemeEnum.Secondary: {
      return {
        normal: ButtonColorSchemeEnum.SkyblueBgTextWhite,
        hover: ButtonColorSchemeEnum.WhiteBgTextSkyblue,
      };
    }
    case PriceBoxColorSchemeEnum.Success: {
      return {
        normal: ButtonColorSchemeEnum.GreenBgTextWhite,
        hover: ButtonColorSchemeEnum.WhiteBgTextGreen,
      };
    }
    case PriceBoxColorSchemeEnum.Warning: {
      return {
        normal: ButtonColorSchemeEnum.YellowBgTextWhite,
        hover: ButtonColorSchemeEnum.WhiteBgTextYellow,
      };
    }
    case PriceBoxColorSchemeEnum.BlackLight: {
      return {
        normal: ButtonColorSchemeEnum.BlackLightBgTextWhite,
        hover: ButtonColorSchemeEnum.WhiteBgTextBlackLight,
      };
    }
  }
};

/**
 *
 * @param {object} IPricingCard
 * @returns JSX.Element
 */
const PricingCard = ({
  priceBoxColor,
  priceName,
  priceDescription,
  price,
  priceVat,
  buttonInfo,
  priceBoxSize,
}: IPricingCard) => {
  // Price Range
  const isOverRange = price > 250;
  // Pound Sign
  const poundLabel = '£';

  const [colorScheme, setColorScheme] = useState<ButtonColorSchemeEnum>(
    buttonColorSchemeSelector(priceBoxColor).normal
  );
  const buttonColorState = buttonColorSchemeSelector(priceBoxColor);

  return (
    <Card
      cardBorderRadius={CardBorderRadiusEnum['2XL']}
      cardShadow={CardShadowEnum.ShadowOne}
      dataTestId="pricing-card"
    >
      <div
        className={`${Styles['pricing-card']} ${Styles[`${priceBoxColor}`]} ${
          Styles[`${priceBoxSize}`]
        } text-center `}
        // button normal state
        onMouseLeave={() => {
          setColorScheme(buttonColorState.normal);
        }}
        // button hover state
        onMouseEnter={() => {
          setColorScheme(buttonColorState.hover);
        }}
      >
        <div className="md:mb-6 mb-4">
          <h3 className={`${Styles['price-name']} capitalize`}>{priceName}</h3>
          {PriceBoxSizeEnum.Large === priceBoxSize && (
            <div
              className={`${Styles['description']} md:text-base text-sm capitalize pt-1`}
            >
              {priceDescription}
            </div>
          )}
        </div>
        {PriceBoxSizeEnum.Large === priceBoxSize && (
          <div
            className={`${Styles['price-divider']} opacity-50 h-[0.063rem] max-w-[10rem] md:mb-6 mb-4 mx-auto`}
          ></div>
        )}
        <div className="inline-flex">
          <div>
            <h4 className={`${Styles['price']} inline-flex items-center`}>
              {poundLabel}
              {price}
              {isOverRange && (
                <span className={`${Styles['icon']} inline-block relative`}>
                  <GoPlus />
                </span>
              )}
            </h4>
          </div>
          <div
            className={`${Styles['vat-text']} inline-flex text-base capitalize items-center`}
          >
            <span className={`${Styles['vat']}`}>/</span>
            <div className={`${Styles['price-vat']}`}>{priceVat}</div>
          </div>
        </div>
        <div className="md:mt-7 mt-5">
          <Button.RedirectButton
            {...buttonInfo}
            size={
              PriceBoxSizeEnum.Large === priceBoxSize
                ? ButtonSizeEnum.Small
                : ButtonSizeEnum.ExtraSmall
            }
            colorScheme={colorScheme}
            data-testid="pricing-button"
          />
        </div>
      </div>
    </Card>
  );
};
export default PricingCard;
