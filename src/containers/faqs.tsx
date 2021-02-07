import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";
import { Faq } from "../types/faq";

const faqs: Faq[] = faqsData;

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqs.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
