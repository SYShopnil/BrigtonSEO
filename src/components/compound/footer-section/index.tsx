// External Imports
import Link from 'next/link';

/**
 * Internal Imports
 */
import { IFooterSection } from '@src/types/compound';
import { SectionHeading, Button } from '@src/components/root';
import IconStore from '@src/components/root/_icons';
import {
  ButtonColorSchemeEnum,
  ButtonSizeEnum,
  IconEnum,
  SectionHeadingColorschemesEnum,
} from '@src/types/root';

/**
 * Child Component Type Definition
 */
interface IContactInfo {
  address: IFooterSection['contactInfo']['address'];
  phoneNumberOne: IFooterSection['contactInfo']['phoneNumberOne'];
  phoneNumberTwo: IFooterSection['contactInfo']['phoneNumberTwo'];
  email: IFooterSection['contactInfo']['email'];
}

interface IFooterColumn {
  title: IFooterSection['columnOne']['title'];
  linkFields: IFooterSection['columnOne']['linkFields'];
}

/**
 *
 * @param {object} headingInfo
 * @returns JSX.Element
 */
const FooterHeading = ({
  headingInfo: { title, subTitle, buttonText, buttonLink, linkOpenNewTab },
}: Pick<IFooterSection, 'headingInfo'>) => {
  return (
    <div className={`flex flex-col relative`}>
      <div
        className={`flex flex-col md:flex-row md:justify-between items-start md:items-center mb-[3.75rem] md:mb-[7.5rem] `}
      >
        <div className={`z-20`}>
          <SectionHeading
            title={title}
            subTitle={subTitle}
            colorScheme={SectionHeadingColorschemesEnum.White}
            hasBottomSpacing={false}
            isCenter={false}
          />
        </div>
        <div className={`mt-[1.5rem] md:mt-0 ml-0 md:ml-auto`}>
          <Button.RedirectButton
            buttonText={buttonText}
            link={buttonLink}
            linkOpenNewTab={linkOpenNewTab}
            colorScheme={ButtonColorSchemeEnum.WhiteBgTextBlue}
            hoverColorScheme={ButtonColorSchemeEnum.GhostBgTextBlue}
            size={ButtonSizeEnum.Small}
            iconName={IconEnum.Send}
            data-testid={'footer-subscribe-button'}
          />
        </div>
        <div
          className={`absolute xl:scale-[1.825] md:scale-[1.5] right-0 md:right-[2.8125rem] xl:right-[4.625rem] opacity-[10%] md:opacity-[4%] z-0 fill-white`}
        >
          <IconStore iconName={IconEnum.FooterCustomRocket} />
        </div>
      </div>
      <span
        style={{
          borderImageSource: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0.76%, #FFFFFF 50.03%, rgba(255, 255, 255, 0) 101.4%)`,
          borderImageSlice: 1,
          borderWidth: 1,
        }}
      />
    </div>
  );
};

/**
 *
 * @param {object} address
 * @returns JSX.Element
 */
const AddressField = ({ address }: Pick<IContactInfo, 'address'>) => {
  return (
    <div>
      <p className={`text-md md:text-lg font-medium text-white `}>
        {'Address:'}
      </p>
      <div className={`text-sm md:text-base mt-[0.25rem] text-white`}>
        <a
          href={`http://maps.google.com/?q=${address}`}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {address}
        </a>
      </div>
    </div>
  );
};

/**
 *
 * @param {object} IContactInfo
 * @returns JSX.Element
 */
const PhoneField = ({
  phoneNumberOne,
  phoneNumberTwo,
}: Pick<IContactInfo, 'phoneNumberOne' | 'phoneNumberTwo'>) => {
  return (
    <div>
      <p className={`text-md md:text-lg font-medium text-white `}>{'Phone:'}</p>
      <div className={`text-sm md:text-base mt-[0.25rem] text-white`}>
        <a href={`tel:${phoneNumberOne}`}>{phoneNumberOne}</a>
        {' / '}
        <a href={`tel:${phoneNumberTwo}`}>{phoneNumberTwo}</a>
      </div>
    </div>
  );
};

/**
 *
 * @param {object} email
 * @returns JSX.Element
 */
const EmailField = ({ email }: Pick<IContactInfo, 'email'>) => {
  return (
    <div>
      <p className={`text-md md:text-lg font-medium text-white `}>{'Email:'}</p>
      <div className={`text-sm md:text-base mt-[0.25rem] text-white`}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

/**
 * @param {object} IContactInfo
 * @returns JSX.Element
 */
const ContactInfo = ({
  address,
  email,
  phoneNumberOne,
  phoneNumberTwo,
}: IContactInfo) => {
  return (
    <div className={`flex flex-col`}>
      <div className={`fill-white max-w-[75%] md:max-w-full`}>
        <Link href={'/'} passHref>
          <a>
            <IconStore iconName={IconEnum.Logo} />
          </a>
        </Link>
      </div>
      <div className={`mt-[2.5rem]`}>
        {/*  */}
        <AddressField address={address} />
      </div>
      <div className={`mt-[0.5rem] md:mt-[1rem]`}>
        <PhoneField
          phoneNumberOne={phoneNumberOne}
          phoneNumberTwo={phoneNumberTwo}
        />
      </div>
      <div className={`mt-[0.5rem] md:mt-[1rem]`}>
        <EmailField email={email} />
      </div>
    </div>
  );
};

/**
 * @param {object} IFooterColumn
 * @returns JSX.Element
 */
const FooterColumn = ({ title, linkFields }: IFooterColumn) => {
  return (
    <div>
      <div className={`text-xl font-semibold text-white capitalize`}>
        {title}
      </div>
      {!!linkFields.length && (
        <div className={`flex flex-col mt-[1rem] md:mt-[2.5rem]`}>
          {linkFields.map((linkField, ind) => (
            <Link key={ind} href={linkField.url} passHref>
              <a
                className={`text-sm md:text-base leading-[2.2] md:leading-[2.2] text-white self-stretch`}
              >
                {linkField.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * @param {object} socialColumn
 * @returns JSX.Element
 */
const FooterSocialsAndCopyright = ({
  socialColumn: { title, socialLinks },
}: Pick<IFooterSection, 'socialColumn'>) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`flex flex-col`}>
      <div className={`text-xl font-semibold text-white capitalize`}>
        {title}
      </div>
      {/* Social Links */}
      <div className={`flex flex-row gap-x-[1rem] mt-[1.5rem] md:mt-[2.5rem]`}>
        {socialLinks.length &&
          socialLinks.map((ele, ind) => (
            <Link key={ind} href={ele.url} passHref>
              <a
                className={`border p-[0.5rem] border-white text-white rounded-lg scale-125`}
                target={`_blank`}
              >
                <IconStore iconName={ele.platform} />
              </a>
            </Link>
          ))}
      </div>

      {/* Copyright Text */}
      <div className={`text-base text-white mt-[3.75rem] md:mt-[5rem]`}>
        {`© ${currentYear} brightonSEO.`}
      </div>

      {/* First Dev Partner */}
      <div className={`mt-[1rem]`}>
        <div className={`text-base text-white`}>
          {'Designed & Developed'}
          <div>
            {'by '}
            <a
              className={`text-md md:text-base md:font-bold md:italic underline`}
              target={`_blank`}
              href={`https://www.lemonhive.com/`}
              rel={'noreferrer'}
            >
              {'Lemon Hive.'}
            </a>
          </div>
        </div>
      </div>

      {/* Second Dev Partner */}
      <div className={`mt-[1rem]`}>
        <div className={`text-base text-white`}>
          {'Dev Partner '}
          <div>
            <a
              className={`text-md md:text-base md:font-bold md:italic underline`}
              target={`_blank`}
              href={`https://www.sanity.io/`}
              rel={'noreferrer'}
            >
              {'Sanity.'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {object} IFooterSection
 * @returns JSX.Element
 */
const FooterSection = ({
  headingInfo,
  contactInfo,
  columnOne,
  columnTwo,
  socialColumn,
}: IFooterSection) => {
  return (
    <section
      className={`section-padding-primary bg-primaryGradient`}
      data-testid={`footer-section`}
    >
      <div className={`container`}>
        <div>
          <FooterHeading headingInfo={headingInfo} />
        </div>
        <div
          className={`flex flex-col md:flex-row md:justify-between mt-[3.75rem] md:mt-[7.5rem]`}
        >
          <div className={`max-w-full md:max-w-[25%]`}>
            <ContactInfo {...contactInfo} />
          </div>
          <div className={`mt-[2.5rem] md:mt-0`}>
            <FooterColumn {...columnOne} />
          </div>
          <div className={`mt-[2.5rem] md:mt-0`}>
            <FooterColumn {...columnTwo} />
          </div>
          <div className={'mt-[2.5rem] md:mt-0'}>
            <FooterSocialsAndCopyright socialColumn={socialColumn} />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * export default
 */
export default FooterSection;
