import { ReactNode } from 'react';

export interface IBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

export interface ISwiperProps {
  children: ReactNode;
  speed?: number;
  isLoop?: boolean;
  autoPlay?: boolean;
  autoItemCount?: boolean;
  isCenter?: boolean;
  pauseOnHover?: boolean;
  haveOffset?: boolean;
  spaceBetween?: IBreakpoints;
  showItems?: IBreakpoints;
  className?: string;
}
