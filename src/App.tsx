import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";
import { Jumbo } from "./types/jumbo";

const data = [...jumboData] as Jumbo[];

export default function App() {
  return (
    <Jumbotron.Container>
      {data.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subTitle}</p>
          <p>{item.image}</p>
          <p>{item.alt}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
