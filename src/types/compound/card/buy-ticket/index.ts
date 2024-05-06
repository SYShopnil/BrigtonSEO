interface IButtonInfo {
  buttonText: string;
  link: string;
  linkOpenNewTab: boolean;
}

export interface IBuyTicketCard {
  title: string;
  description: string;
  attendanceText: string;
  attendanceNumber: number;
  buttonInfo: IButtonInfo;
}
