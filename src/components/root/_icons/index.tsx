/**
 * External Imports
 */
import {
  FiCornerUpRight,
  FiCornerUpLeft,
  FiSend,
  FiNavigation,
  FiCalendar,
} from 'react-icons/fi';
import {
  RiTrainFill,
  RiFlightTakeoffFill,
  RiBusFill,
  RiMotorbikeLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiCalendarEventFill,
  RiMapPinFill,
} from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

import DoubleQuotation from './double-quotation';

/**
 * Internal Imports
 */
import { IconEnum } from '@src/types/root';
import { FooterCustomRocket } from './footer-custom-rocket';
import { Logo } from './logo';
import { EventInfoCircle } from './event-info-circle';

/**
 * @method iconSelector
 * @param {iconName} IconEnum
 * @returns {JSX.Element}
 * @description this function will receive iconName and return icon JSX.Element(svg)
 */

interface IconStoreProps {
  iconName: IconEnum;
}

const IconStore = ({ iconName }: IconStoreProps): JSX.Element => {
  switch (iconName) {
    case IconEnum.CornerUpRight: {
      return <FiCornerUpRight />;
    }
    case IconEnum.CornerUpLeft: {
      return <FiCornerUpLeft />;
    }
    case IconEnum.Send: {
      return <FiSend />;
    }
    case IconEnum.Navigation: {
      return <FiNavigation />;
    }
    case IconEnum.Calendar: {
      return <FiCalendar />;
    }
    case IconEnum.TrainFill: {
      return <RiTrainFill />;
    }
    case IconEnum.FlightTakeoffFill: {
      return <RiFlightTakeoffFill />;
    }
    case IconEnum.BusFill: {
      return <RiBusFill />;
    }
    case IconEnum.MotorbikeLine: {
      return <RiMotorbikeLine />;
    }
    case IconEnum.ArrowRightLine: {
      return <RiArrowRightLine />;
    }
    case IconEnum.ArrowLeftLine: {
      return <RiArrowLeftLine />;
    }
    case IconEnum.DoubleQuotation: {
      return <DoubleQuotation />;
    }
    case IconEnum.Facebook: {
      return <RiFacebookFill />;
    }
    case IconEnum.Twitter: {
      return <RiTwitterFill />;
    }
    case IconEnum.Instagram: {
      return <RiInstagramFill />;
    }
    case IconEnum.Youtube: {
      return <RiYoutubeFill />;
    }
    case IconEnum.FooterCustomRocket: {
      return <FooterCustomRocket />;
    }
    case IconEnum.Logo: {
      return <Logo />;
    }
    case IconEnum.CalendarEventFill: {
      return <RiCalendarEventFill />;
    }
    case IconEnum.MapPinFill: {
      return <RiMapPinFill />;
    }
    case IconEnum.EventInfoCircle: {
      return <EventInfoCircle />;
    }
    case IconEnum.AiOutlinePlusCircle: {
      return <AiOutlinePlusCircle />;
    }
    case IconEnum.AiOutlineMinusCircle: {
      return <AiOutlineMinusCircle />;
    }
    case IconEnum.FilledPlus: {
      return <GoPlus />;
    }
    case IconEnum.UserAlt: {
      return <FaUserAlt />;
    }
  }
};

export default IconStore;
