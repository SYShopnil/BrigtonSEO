import { IUpcomingCard } from '@src/types/compound/card/upcoming';
import React from 'react';
import Styles from './index.module.scss';

interface IDateAndTime
  extends Omit<IUpcomingCard, 'buttonTitle' | 'eventNumber'> {}

const DateAndTime = ({
  date: { startDate, isOneDay, month, year },
  location,
  theme,
}: IDateAndTime) => {
  return (
    <div>
      {/* date part */}
      <p className={`font-primary`}>
        <span className={`font-bold text-lg ${Styles[theme + '-Date']}`}>
          {/*
                Here first span has contained the date ONE
                Second span has contained the date TWO 
              */}
          <span>{startDate <= 9 ? `0${startDate} ` : `${startDate} `}</span>
          {!isOneDay && (
            <>
              &
              <span>
                {++startDate <= 9 ? ` 0${startDate} ` : ` ${startDate} `}
              </span>
            </>
          )}
        </span>
        <span
          className={`block lg:inline-block font-normal lg:font-medium  text-sm lg:text-lg text-blackLight`}
        >
          {month}, {year}
        </span>
        {/* location part */}
        <span
          className={`block text-blackLight font-normal text-sm mt-[0.5rem] capitalize`}
        >
          {location}
        </span>
      </p>
    </div>
  );
};

export default DateAndTime;
