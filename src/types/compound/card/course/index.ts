export enum TagBackgroundEnum {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
}

export interface ITag {
  tagTitle: string;
  tagColor: TagBackgroundEnum;
}

export interface ICourseCard {
  imgUrl: string;
  tags: ITag[];
  title: string;
  courseUrl: string;
  author: string;
  price: {
    sellPrice: string;
    discountPrice?: string;
    discountName?: string;
  };
  isOffline: boolean;
}
