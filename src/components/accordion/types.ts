import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
	toggleShow: boolean;
	setToggleShow: Dispatch<SetStateAction<boolean>>;
};

export interface AccordionProps {
	children: React.ReactNode;
}

export interface AccordionTitleProps extends AccordionProps {}
export interface AccordionFrameProps extends AccordionProps {}
export interface AccordionItemProps extends AccordionProps {}
export interface AccordionHeaderProps extends AccordionProps {}
export interface AccordionBodyProps extends AccordionProps {}
