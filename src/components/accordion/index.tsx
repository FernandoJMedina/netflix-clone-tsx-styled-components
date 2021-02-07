import { useState, useContext, createContext } from "react";
import {
	AccordionProps,
	AccordionTitleProps,
	ContextProps,
	AccordionFrameProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionBodyProps,
} from "./types";

import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
} from "./styles/accordion";

const ToggleContext = createContext<Partial<ContextProps>>({});

export default function Accordion({ children, ...props }: AccordionProps) {
	return (
		<Container {...props}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({
	children,
	...props
}: AccordionTitleProps) {
	return <Title {...props}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({
	children,
	...props
}: AccordionFrameProps) {
	return <Frame {...props}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({
	children,
	...props
}: AccordionItemProps) {
	const [toggleShow, setToggleShow] = useState<boolean>(false);

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...props}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({
	children,
	...props
}: AccordionHeaderProps) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	const handleToggle = () => {
		if (setToggleShow) {
			setToggleShow((prev) => !prev);
		} else {
			alert("Hubo un error al abrir el mensaje.");
		}
	};
	return (
		<Header onClick={() => handleToggle()} {...props}>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({
	children,
	...props
}: AccordionBodyProps) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? <Body {...props}>{children}</Body> : null;
};
