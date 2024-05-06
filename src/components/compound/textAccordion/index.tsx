import { ITextAccordionList } from '@src/types/compound';
import React, { useState } from 'react';
import { AccordionCard } from './card';

/**
 *
 * This will be the main component which take all list element
 *
 */
export const TextAccordion = ({ list: listItems }: ITextAccordionList) => {
  const [selectedCardIndex, setSelectedCardIndex] =
    useState<null | number>(null);
  return (
    <div
      className={`space-y-[1rem] lg:space-y-[1.5rem] max-w-[18rem] lg:max-w-[82.5rem]`}
    >
      {listItems.map((LItem, ind) => {
        const { question, answer } = LItem;
        /**
         * this will control the accordion's scroll handler part
         */
        const onCardSelect = () => {
          if (ind == selectedCardIndex) {
            setSelectedCardIndex(null);
          } else {
            setSelectedCardIndex(ind);
          }
        };
        return (
          <div key={ind}>
            <AccordionCard
              question={question}
              answer={answer}
              isSelected={ind == selectedCardIndex}
              onCardSelect={onCardSelect}
            />
          </div>
        );
      })}
    </div>
  );
};
