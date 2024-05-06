import { IEventHistoryCard } from '@src/types/compound';

interface IInnerEventDate extends Pick<IEventHistoryCard, 'date'> {}

const EventDate = ({
  date: { startDate, isOneDay, month, year },
}: IInnerEventDate) => {
  /**
   *
   * Here have an issue that if user input the last date of a particular month or last day of a particular year there will be an error. It will just add another date which will not make any sense.
   * As a result if user input date 31 as  a next day it will print 32. Which will not make any sense
   * This need to fix
   *
   */
  const dateOne: string = startDate > 9 ? '' + startDate : '0' + startDate;
  const dateTwo: string = ++startDate > 9 ? '' + startDate : '0' + startDate;
  return (
    <div>
      <p
        className={`text-secondaryLight font-normal lg:font-semibold text-base lg:text-xl`}
      >
        {dateOne + ' '}
        {!isOneDay && <>&{' ' + dateTwo + ' '}</>}
        {month + ', '}
        {year}
      </p>
    </div>
  );
};

export default EventDate;
