export interface FooterProps {
	children: React.ReactNode;
}

export type FooterRow = FooterProps;
export type FooterColumn = FooterProps;

export interface FooterLink extends FooterProps {
	href: string;
}
export type FooterTite = FooterProps;
export type FooterText = FooterProps;
