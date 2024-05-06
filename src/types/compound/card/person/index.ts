interface IPersonInfo {
  link: string;
  imageUrl: string;
  name: string;
  designation: string;
}

interface IEventInfo {
  link: string;
  text: string;
}

export interface IPerson {
  person: IPersonInfo;
  eventInfo: IEventInfo;
}

export interface ITeam {
  person: Omit<IPersonInfo, 'link'> & Partial<IPersonInfo>;
}

export interface IPersonTransparent {
  person: IPersonInfo;
}
