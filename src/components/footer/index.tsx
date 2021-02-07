import {
	FooterColumn,
	FooterLink,
	FooterProps,
	FooterRow,
	FooterText,
	FooterTite,
} from "./types";
import {
	Container,
	Row,
	Column,
	Link,
	Title,
	Text,
	Break,
} from "./styles/footer";

export default function Footer({ children, ...props }: FooterProps) {
	return <Container {...props}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...props }: FooterRow) {
	return <Row {...props}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...props }: FooterColumn) {
	return <Column {...props}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...props }: FooterLink) {
	return <Link {...props}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...props }: FooterTite) {
	return <Title {...props}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...props }: FooterText) {
	return <Text {...props}>{children}</Text>;
};

Footer.Break = function FooterBreak() {
	return <Break />;
};
