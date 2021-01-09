import {
	Container,
	Inner,
	Pane,
	Title,
	SubTitle,
	Image,
	Item,
} from "./styles/jumbotron";
import {
	JumbotronContainer,
	JumbotronImage,
	JumbotronPane,
	JumbotronProps,
	JumbotronSubTitle,
	JumbotronTitle,
} from "./types";

export default function Jumbotron({
	direction = "row",
	children,
}: JumbotronProps) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({
	children,
	...props
}: JumbotronContainer) {
	return <Container {...props}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...props }: JumbotronPane) {
	return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({
	children,
	...props
}: JumbotronTitle) {
	return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
	children,
	...props
}: JumbotronSubTitle) {
	return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }: JumbotronImage) {
	return <Image {...props} />;
};
