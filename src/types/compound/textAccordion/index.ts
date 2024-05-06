export interface IFAQ {
  question: string;
  answer: string;
}
export interface ITextAccordion extends IFAQ {
  isSelected: boolean;
  onCardSelect: () => any;
}
export interface ITextAccordionList {
  list: IFAQ[];
}
