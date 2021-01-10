import { FooterProps } from "./types";

export default function Footer({ children, ...props }: FooterProps) {
  return <Container {...props}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
