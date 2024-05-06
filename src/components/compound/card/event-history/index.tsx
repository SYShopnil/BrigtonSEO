import { Card } from '@src/components/root'
import { IEventHistoryCard } from '@src/types/compound'
import { CardBorderRadiusEnum, CardShadowEnum } from '@src/types/root'
import React from 'react'
import EventDate from './date'
import Title from './title'
import Topic from './topic'

export const EventHistoryCard = ({
  date,
  eventNumber,
  location,
  topic
}: IEventHistoryCard) => {
  return (
   <Card 
    dataTestId={'IDEventHistoryCard'} 
    cardShadow={CardShadowEnum.ShadowOne} 
    cardBorderRadius={CardBorderRadiusEnum['XL']}   
   >
       {/* main wrapper */}
    <div className = {`h-auto w-[15rem] lg:w-[26.5rem]`}>
      {/* inner wrapper */}
      <div className = {`mx-[1rem] my-[1.5rem] space-y-[1rem] lg:mx-[2.5rem] lg:my-[2.5rem]`}>
        <Title
            eventNumber={eventNumber}
        />
        <Topic
            topic= {topic}
          />
        <EventDate
            date={date}
          />
        <div >
          <p className = {`text-blackLight text-sm lg:text-[1.4rem] font-normal lg:font-semibold`}>{location}</p>
        </div>
      </div>
    </div>
   </Card>
  )
}

