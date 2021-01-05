import { Container, Inner } from "./styles/jumbotron";

interface JumbotronProps {
  children: React.ReactNode;
  direction: "row" | "column";
}
interface JumbotronContainer {
  children: React.ReactNode;
}

export default function Jumbotron({
  direction = "row",
  children,
}: JumbotronProps) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...props
}: JumbotronContainer) {
  return <Container {...props}>{children}</Container>;
};
