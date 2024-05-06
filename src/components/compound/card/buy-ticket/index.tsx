// Internal Imports
import { IBuyTicketCard } from '@src/types/compound';
import { Button, Card } from '@src/components/root';
import { GoPlus } from 'react-icons/go';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  CardBorderRadiusEnum,
  CardShadowEnum,
} from '@src/types/root';
import numberFomat from 'format-number';

const BuyTicketCard = ({
  title,
  description,
  attendanceText,
  attendanceNumber,
  buttonInfo,
}: IBuyTicketCard) => {
  const isOverFourDigits = attendanceNumber > 9999;
  return (
    <>
      <Card
        cardBorderRadius={CardBorderRadiusEnum['2XL']}
        cardShadow={CardShadowEnum.ShadowTwo}
        dataTestId="buy-ticket-card"
      >
        <div className="flex md:flex-row flex-col md:px-10 md:py-6 px-3 py-4 max-w-[38rem] ">
          <div className="flex flex-[0_0_55%] flex-col md:pb-0 md:pr-[2.5rem] pb-[1.5rem] pr-0">
            <div className="flex flex-col">
              <h3 className=" md:text-3xl text-xl text-primary pb-2 font-semibold md:self-start self-center md:text-left text-center">
                {title}
              </h3>
              <p className="md:text-base text-sm text-black md:item-start item-center md:text-left text-center">
                {description}
              </p>
            </div>
            <div className="md:pt-[1.875rem] pt-4 md:flex-none pl-0 flex-[0_0_auto] md:self-start self-center">
              <Button.RedirectButton
                {...buttonInfo}
                size={ButtonSizeEnum.Small}
                colorScheme={ButtonColorSchemeEnum.BlueBgTextWhite}
                hoverColorScheme={
                  ButtonColorSchemeEnum.BlueVerticalGradientBgTextWhite
                }
                data-testid="redirect-button"
              />
            </div>
          </div>
          <span className="flex-[0_0_auto] md:w-[1px] w-1/2 max-sm:h-[1px] max-sm:mx-auto bg-[rgba(12,94,232,0.16)]"></span>
          <div className="flex-[0_0_40%] md:text-left md:pl-[2.5rem] text-center self-center pl-0">
            <h6 className="md:text-lg text-sm tracking-[0.5px] md:pt-0 pt-[1.5rem] pb-1 text-blackLight">
              {attendanceText}
            </h6>

            <div
              className={`${
                isOverFourDigits ? ['md:text-4xl'] : ['md:text-5xl']
              } text-[3.5rem] leading-[4.2rem] font-bold text-secondary inline-flex items-center`}
            >
              {isOverFourDigits ? '9,999' : numberFomat()(attendanceNumber)}
              {isOverFourDigits && (
                <span className="text-3xl leading-[1] inline-block relative top-[-4px]">
                  <GoPlus />
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
/**
 * export default
 */
export default BuyTicketCard;
