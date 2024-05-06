import { Card } from '@src/components/root';
import IconStore from '@src/components/root/_icons';
import { ITestimonial } from '@src/types/compound';
import {
  CardBorderRadiusEnum,
  CardShadowEnum,
  IconEnum,
} from '@src/types/root';
import React from 'react';
import Styles from './index.module.scss';
import Author from './author';

interface IProps extends ITestimonial {
  isActive: boolean;
}

/**
 *
 * @param {object} IProps
 * @returns JSX.Element
 */
export const Testimonial = ({ testimonial, author, isActive }: IProps) => {
  return (
    <Card
      dataTestId={'testimonial-card'}
      cardShadow={CardShadowEnum.None}
      cardBorderRadius={CardBorderRadiusEnum['2XL']}
    >
      <div
        className={`${isActive ? Styles['active'] : ''} ${
          Styles['testimonial-card']
        } p-[1.5rem_1rem] md:p-[2.5rem] md:min-h-[420px]`}
      >
        <div className={`${Styles['icon']} inline-flex w-[56px] md:w-[80px]`}>
          <IconStore iconName={IconEnum.DoubleQuotation} />
        </div>
        <div
          className={`mb-[1.875rem] mt-[1.5rem] md:mt-[2.5rem] md:mb-[2.5rem]`}
        >
          <p
            className={`${Styles['testimonial-text']} text-sm md:text-[1.25rem] md:font-medium min-h-[150px]`}
          >
            {/* TODO: Characters: 224 in design */}
            {testimonial}
          </p>
        </div>
        <Author author={author} />
      </div>
    </Card>
  );
};
