import { Card } from '@src/components/root';
import IconStore from '@src/components/root/_icons';
import {
  CardBorderRadiusEnum,
  CardShadowEnum,
  IconEnum,
} from '@src/types/root';
import React, { useState, useEffect, useRef } from 'react';
import Styles from '../index.module.scss';
import { ITextAccordion } from '@src/types/compound/textAccordion';

interface IAnswerPart extends Pick<ITextAccordion, 'answer'> {}
interface IQuestionPart
  extends Pick<ITextAccordion, 'question' | 'isSelected'> {}

const AnswerPart = ({ answer }: IAnswerPart) => {
  return <p className={`font-normal text-sm lg:text-base `}>{answer}</p>;
};

const QuestionPart = ({ question, isSelected }: IQuestionPart) => {
  const headingPartTextStyle: string = `font-normal lg:font-semibold text-base lg:text-xl`;
  const headingTextColor: string = isSelected
    ? Styles['text-active']
    : Styles['text-inactive'];
  return (
    <div className={`flex justify-between `}>
      <p className={`${headingPartTextStyle} ${headingTextColor} `}>
        {question}
      </p>
      {/* icon part  */}
      <div
        className={`flex justify-center items-center ${headingPartTextStyle} ${headingTextColor}`}
      >
        <IconStore
          iconName={
            isSelected
              ? IconEnum.AiOutlineMinusCircle
              : IconEnum.AiOutlinePlusCircle
          }
        />
      </div>
    </div>
  );
};

/**
 *
 * This component will control the opening and closing part of the accordion
 * It will show individual element of the following accordion
 * This is main component
 *
 */

export const AccordionCard = ({
  question,
  answer,
  isSelected,
  onCardSelect,
}: ITextAccordion) => {
  const cardShadow = isSelected
    ? CardShadowEnum.ShadowTwo
    : CardShadowEnum.None;
  const cardBorderRadius = isSelected
    ? CardBorderRadiusEnum['2XL']
    : CardBorderRadiusEnum.XL;

  const [height, setHeight] = useState<string>('0px');
  const answerWrapperRef: React.LegacyRef<HTMLDivElement> | undefined =
    useRef(null);

  /**
   *
   * This will control the selected accordion's toggle part
   *
   */
  useEffect(() => {
    if (isSelected) {
      setHeight(`${answerWrapperRef?.current?.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isSelected]);
  return (
    <Card
      dataTestId={'textAccordionListCard'}
      cardShadow={cardShadow}
      cardBorderRadius={cardBorderRadius}
    >
      <div
        className={`cursor-pointer  ${Styles[`activeBorder`]} `}
        onClick={onCardSelect}
      >
        {/* inner wrapper */}
        <div
          className={`my-[0.5rem] lg:my-[1.5rem] mx-[1rem] lg:mx-[1.5rem] space-y-[1rem]  lg:space-y-[1.5rem]`}
        >
          <QuestionPart question={question} isSelected={isSelected} />

          {/* here on select toggle animation part has applied by using ref */}
          <div
            className={`${
              Styles[`answer-active-animation`]
            } overflow-hidden transition-all duration-200 `}
            ref={answerWrapperRef}
            style={{ height: height }}
          >
            <AnswerPart answer={answer} />
          </div>
        </div>
      </div>
    </Card>
  );
};
