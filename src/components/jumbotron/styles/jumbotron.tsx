import styled from "styled-components/macro";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = styled.div<ContainerProps>``;

interface InnerProps {
  children: React.ReactNode;
  direction: "row" | "column";
}

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
