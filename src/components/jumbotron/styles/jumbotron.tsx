import styled from "styled-components/macro";
import {
	ContainerProps,
	InnerProps,
	PaneProps,
	SubTitleProps,
	TitleProps,
} from "./styled-types";

export const Pane = styled.div<PaneProps>`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Title = styled.h1<TitleProps>`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;
	@media only screen and (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2<SubTitleProps>`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;

	@media only screen and (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	color: white;
	padding: 50px 5%;
	overflow: hidden;
`;

export const Container = styled.div<ContainerProps>`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;

export const Inner = styled.div<InnerProps>`
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;
