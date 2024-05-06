import { Button, Card } from '@src/components/root';
import { IUpcomingCard, UpcomingCardThemeEnum } from '@src/types/compound';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  CardBorderRadiusEnum,
  CardShadowEnum,
  IconEnum,
} from '@src/types/root';
import React from 'react';
import DateAndTime from './dateAndTime';
import EventSerial from './eventSerial';

const Upcoming = ({
  date,
  theme,
  location,
  buttonTitle,
  eventNumber,
}: IUpcomingCard) => {
  const onClick = (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  let buttonColorSchema, buttonHoverColorScheme;

  switch (theme) {
    case UpcomingCardThemeEnum.themeOne: {
      buttonColorSchema = ButtonColorSchemeEnum.BlueBgTextWhite;
      buttonHoverColorScheme =
        ButtonColorSchemeEnum.BlueVerticalGradientBgTextWhite;
      break;
    }
    case UpcomingCardThemeEnum.themeTwo: {
      buttonColorSchema = ButtonColorSchemeEnum.GreenBgTextWhite;
      buttonHoverColorScheme = ButtonColorSchemeEnum.WhiteBgTextGreen;
      break;
    }
    case UpcomingCardThemeEnum.themeThree: {
      buttonColorSchema = ButtonColorSchemeEnum.SkyblueBgTextWhite;
      buttonHoverColorScheme =
        ButtonColorSchemeEnum.SkyblueVerticalGradientBgTextWhite;
      break;
    }
    default: {
      buttonColorSchema = ButtonColorSchemeEnum.BlueBgTextWhite;
      buttonHoverColorScheme =
        ButtonColorSchemeEnum.BlueVerticalGradientBgTextWhite;
    }
  }

  return (
    <Card
      dataTestId={'upcomingCard'}
      cardShadow={CardShadowEnum.ShadowOne}
      cardBorderRadius={CardBorderRadiusEnum.XL}
    >
      {/* main card wrapper */}
      <div className={`h-[auto] w-[17rem] lg:w-[19.5rem] text-center`}>
        {/* inner wrapper */}
        <div
          className={`space-y-[1.5rem] py-[1.5rem] lg:py-[2.5rem]  px-[1.438rem] lg:px-[2.563rem]`}
        >
          {/* event serial part wrapper */}
          <EventSerial eventNumber={eventNumber} theme={theme} />

          {/* date and location part wrapper */}
          <DateAndTime date={date} location={location} theme={theme} />

          {/* add button wrapper */}
          <div>
            <Button
              buttonText={buttonTitle}
              colorScheme={buttonColorSchema}
              hoverColorScheme={buttonHoverColorScheme}
              size={ButtonSizeEnum.Small}
              clickHandler={onClick}
              data-testid={'addToCalenderButton'}
              iconName={IconEnum.Calendar}
              iconIsLeft={true}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Upcoming;
