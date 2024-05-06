/**
 * Internal Imports
 */

// types
import { SectionHeadingColorschemesEnum } from '@src/types/root';
import { IContactSection, IContact } from '@src/types/compound';

// components
import { Form, SectionHeading } from '@src/components/root';

/**
 * @param {object}  IContact
 * @returns JSX.Element
 */
const Contact = ({ address, phone }: IContact) => {
  /**
   * Used for contact us info
   */
  const contactInfoLabel = `text-base md:text-[1.75rem] md:font-semibold`;
  return (
    <div>
      {address?.label && address?.value && (
        <div className="mb-[1.125rem] md:mb-[1.75rem]">
          <p className={contactInfoLabel}>{address?.label}</p>
          <div
            className={`text-[1.25rem] font-medium text-primary md:text-[1.5rem] md:font-semibold mt-[.75rem]`}
          >
            {address?.value}
          </div>
        </div>
      )}
      <div>
        <p className={contactInfoLabel}>{phone.label}</p>
        <div
          className={`text-[2rem] leading-[1.2] font-medium text-primary md:font-bold md:text-[2.5rem] xl:text-[3.5rem] mt-[.75rem]`}
        >
          {phone.value}
        </div>
      </div>
    </div>
  );
};

/**
 * @returns JSX.Element
 */
const Divider = () => {
  return (
    <div>
      <div className="flex items-center gap-6 lg:flex-col lg:min-h-[375px]">
        <span className="border border-solid border-[#D9D9D9] flex-grow"></span>
        <span className="text-[1.75rem] leading-[1.2] font-medium text-primary md:font-bold md:text-[3rem] capitalize">
          Or
        </span>
        <span className="border border-solid border-[#D9D9D9] flex-grow"></span>
      </div>
    </div>
  );
};

/**
 * @param {object} IContactSection
 * @returns JSX.Element
 */
export const ContactSection = ({
  sectionHeading,
  contact,
  formData,
}: IContactSection) => {
  /**
   * Used for contact us content and form parent - row
   */
  const row = `lg:flex lg:items-center lg:justify-between lg:gap-[3rem] grid gap-[2.5rem]`;
  return (
    <section className="section-padding-primary" data-testid="contact-section">
      <div className="container">
        <div className={row}>
          {/* Left content  */}
          <div className="lg:flex-[0_0_40%]">
            <div className="mb-[1.375rem] lg:mb-[2rem]">
              <SectionHeading
                {...sectionHeading}
                colorScheme={SectionHeadingColorschemesEnum.Blue}
                isCenter={false}
                hasBottomSpacing={false}
              />
            </div>
            <Contact {...contact} />
          </div>

          {/* Divider */}
          <Divider />

          {/* contact form */}
          <div className="lg:flex-[0_0_45%]">
            <Form {...formData} />
          </div>
        </div>
      </div>
    </section>
  );
};
