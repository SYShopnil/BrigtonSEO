import { IEventHistoryCard } from '@src/types/compound';
import Styles from './index.module.scss';

interface ITitle extends Pick<IEventHistoryCard, 'eventNumber'> {}

const Title = ({ eventNumber }: ITitle) => {
  return (
    // bottom border part will be place in this div parent
    <div className={`pb-[0.3rem] lg:pb-[1.5rem] ${Styles.bottomBorder}`}>
      <p
        className={`text-primary font-medium lg:font-semibold text-lg lg:text-3xl`}
      >
        BrightonSEO - {eventNumber}
      </p>
    </div>
  );
};

export default Title;
