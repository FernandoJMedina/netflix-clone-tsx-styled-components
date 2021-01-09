export interface ContainerProps {
	children: React.ReactNode;
}

export interface PaneProps {
	children: React.ReactNode;
}

export interface TitleProps {
	children: React.ReactNode;
}

export interface SubTitleProps {
	children: React.ReactNode;
}

export interface InnerProps {
	children: React.ReactNode;
	direction: "row" | "column";
}
