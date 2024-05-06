import { IEventHistoryCard } from '@src/types/compound';
import Styles from './index.module.scss';

interface ITopic extends Pick<IEventHistoryCard, 'topic'> {}

const Topic = ({ topic }: ITopic) => {
  return (
    <div className={`${Styles['topicLineClamp']} overflow-hidden`}>
      <p className={`text-black font-semibold text-sm lg:text-xl `}>{topic}</p>
    </div>
  );
};

export default Topic;
