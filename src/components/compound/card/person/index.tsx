import Image from 'next/image';
import Link from 'next/link';
import { CardBorderRadiusEnum, CardShadowEnum } from '@src/types/root';
import { IPerson, ITeam, IPersonTransparent } from '@src/types/compound';
import { Card } from '@src/components/root';
import Styles from './index.module.scss';

/**
 * Tailwind + Module  Classess
 */
const contentWrapper = `${Styles['content']} p-5 lg:p-6`;

interface ICardImage {
  imageUrl: string;
  imageAlt: string;
  link?: string;
}

/**
 * @param {object}  ICardImage
 * @returns JSX.Element
 */
const CardImage = ({ imageUrl, imageAlt, link }: ICardImage) => {
  const imageParent = 'inline-flex';
  const PersonImage = () => {
    return (
      <Image
        className={`${imageParent} ${Styles['image']}`}
        src={`${imageUrl}`}
        alt={`${imageAlt}`}
        width={700}
        height={900}
        loading="lazy"
      />
    );
  };

  return (
    <div className={`${imageParent}`}>
      {link ? (
        <Link href={`${link}`}>
          <a className={`${imageParent}`} target="_blank">
            <PersonImage />
          </a>
        </Link>
      ) : (
        <PersonImage />
      )}
    </div>
  );
};

interface INameDesignation {
  name: string;
  designation: string;
  link?: string;
}
/**
 * @param {object} INameDesignation
 * @returns JSX.Element
 */
const NameDesignation = ({ name, designation, link }: INameDesignation) => {
  return (
    <>
      <h3
        className={`${Styles['name']} text-[1.25rem] font-medium leading-[1.5] md:font-semibold`}
      >
        {link ? (
          <Link href={`${link}`}>
            <a className="text-inherit" target="_blank">
              {name}
            </a>
          </Link>
        ) : (
          <>{name}</>
        )}
      </h3>
      <div
        className={`${Styles['designation']} text-sm text-black md:text-base mt-[.375rem]`}
      >
        {designation}
      </div>
    </>
  );
};

interface IBaseCard {
  children: React.ReactNode;
  image: ICardImage;
  customClass: string;
  shadowOnHover: boolean;
}

/**
 * @param {object} IBaseCard
 * @returns JSX.Element
 */
const BaseCard = ({
  children,
  customClass,
  shadowOnHover,
  image,
}: IBaseCard) => {
  return (
    <Card
      dataTestId="person-card"
      cardBorderRadius={CardBorderRadiusEnum['2XL']}
      cardShadow={CardShadowEnum.None}
      hoverCardShadow={
        shadowOnHover ? CardShadowEnum.ShadowTwo : CardShadowEnum.None
      }
    >
      <div
        className={`${Styles['person-card']} ${Styles[customClass]}  relative overflow-hidden grid`}
      >
        <CardImage {...image} />
        {children}
      </div>
    </Card>
  );
};

/**
 * @param {object} IPerson
 * @returns JSX.Element
 */
const Person = ({ person, eventInfo }: IPerson) => {
  return (
    <>
      <BaseCard
        customClass="person-normal"
        shadowOnHover={true}
        image={{
          imageUrl: person.imageUrl,
          imageAlt: person.name,
          link: person.link,
        }}
      >
        <div className={contentWrapper}>
          <NameDesignation
            name={person.name}
            designation={person.designation}
            link={person.link}
          />

          <div className={`lg:block hidden lg:mt-[1rem]`}>
            <Link href={`${eventInfo.link}`}>
              <a
                className={`${Styles['event-link']} text-sm text-secondary underline`}
                target="_blank"
              >
                {eventInfo.text}
              </a>
            </Link>
          </div>
        </div>

        {/* take extra div for shown overlay or absolute content*/}
        <div className={`${Styles['bottom-fixed-area']}`}></div>
      </BaseCard>
    </>
  );
};

/**
 * @param {object} IPersonTransparent
 * @returns JSX.Element
 */
Person.Transparent = ({ person }: IPersonTransparent) => {
  return (
    <>
      <BaseCard
        customClass="person-transparent"
        shadowOnHover={false}
        image={{
          imageUrl: person.imageUrl,
          imageAlt: person.name,
          link: person.link,
        }}
      >
        <div className={contentWrapper}>
          <NameDesignation
            name={person.name}
            designation={person.designation}
            link={person.link}
          />
        </div>
      </BaseCard>
    </>
  );
};

/**
 * @param {object} ITeam
 * @returns JSX.Element
 */
Person.Team = ({ person }: ITeam) => {
  return (
    <>
      <BaseCard
        customClass="person-team"
        shadowOnHover={false}
        image={{
          imageUrl: person.imageUrl,
          imageAlt: person.name,
          link: person.link,
        }}
      >
        <div className={contentWrapper}>
          <NameDesignation
            name={person.name}
            designation={person.designation}
            link={person.link}
          />
        </div>
      </BaseCard>
    </>
  );
};

export default Person;
