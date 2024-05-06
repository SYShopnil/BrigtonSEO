import IconStore from '@src/components/root/_icons'
import { IUpcomingCard} from '@src/types/compound'
import { IconEnum } from '@src/types/root'
import React from 'react'
import Styles from "./index.module.scss"


interface IEventSerial extends Pick <IUpcomingCard, "eventNumber" | "theme"> {}

const EventSerial = ({
    eventNumber,
    theme
}:IEventSerial) => {

  return (
    <div className = {`flex justify-center items-center flex-wrap flex-col `}>
        {/* logo wrapper */}
        <div>
            <span className = {`${Styles[theme + "-Logo"]}`}>
                <IconStore
                    iconName= {IconEnum.Logo}
                />
            </span>
        </div>

        {/* serial part wrapper */}
        <div className = {`flex justify-center items-center mt-[0.5rem]`}>
            <p className = {`w-[4rem] lg:w-[5rem] h-[4rem] lg:h-[5rem]  ${Styles[theme + "-EventNumber"]} text-white rounded-full flex justify-center items-center text-3xl lg:text-4xl font-semibold lg:font-bold`}>
                <span>{eventNumber}</span>
            </p>
        </div>
    </div>
  )
}

export default EventSerial