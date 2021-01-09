export interface JumbotronProps {
	children: React.ReactNode;
	direction: "row" | "column";
}

export interface JumbotronContainer {
	children: React.ReactNode;
}

export type JumbotronPane = JumbotronContainer;
export type JumbotronTitle = JumbotronContainer;
export type JumbotronSubTitle = JumbotronContainer;

export interface JumbotronImage {
	src: string;
	alt: string;
}
