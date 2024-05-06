import Footerbuilder from '@src/components/builder/footer-builder';
import SectionsBuilder from '@src/components/builder/section-builder';
import { IEventInfo } from '@src/types/compound';
import { getMonthString } from '@src/utils/monthMapper';
import { ISanityBrightonEvent, ISanityFooter } from '@src/types/sanity';
import HomeHeroBuilder from '@src/components/builder/hero-builder/home';

// TODO: Update data type
interface Props {
  data: any;
}
export default function HomePageBuilder({ data }: Props) {
  const page = data.page;
  const footer: ISanityFooter = data.footer;

  /**
   * The home page will have a defined brighton event.
   */

  const event: ISanityBrightonEvent = page.brightonEvent;
  const eventDate = new Date(event.startDate);

  const eventInfo: IEventInfo = {
    date: {
      startDate: eventDate.getDay(),
      isOneDay: event.secondDaySessions === undefined,
      month: getMonthString(eventDate.getMonth()),
      year: eventDate.getFullYear(),
    },
    location: {
      name: event.venue,
      googleMapUrl: event.googleMapLink,
    },
  };

  return (
    <>
      <HomeHeroBuilder data={page.hero} eventInfo={eventInfo} />
      <SectionsBuilder data={page.content} />
      <Footerbuilder data={footer} />
    </>
  );
}
