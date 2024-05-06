import { HeroHome } from '@src/components/compound';
import { IEventInfo } from '@src/types/compound';
import { IHomeHero } from '@src/types/sanity';

interface Props {
  data: IHomeHero;
  eventInfo: IEventInfo;
}

export default function HomeHeroBuilder({ data, eventInfo }: Props) {
  return (
    <HeroHome
      title={data.title}
      description={data.description}
      hasVector={data.hasVector}
      bgVideoUrl={data.bgVideoUrl}
      infoCount={data.infoCounts}
      logo={data.logo}
      subTitle={data.subtitle}
      eventInfo={eventInfo}
    />
  );
}
