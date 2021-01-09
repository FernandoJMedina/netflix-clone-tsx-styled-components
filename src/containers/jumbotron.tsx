import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";
import { Jumbo } from "../types/jumbo";

const data = [...jumboData] as Jumbo[];

export default function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{data.map((item) => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}
