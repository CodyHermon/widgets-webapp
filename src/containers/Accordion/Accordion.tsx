import { Accordion } from "../../components/Accordion";

const AccordionContainer = () => {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React',
            content: 'React is a favorite js library among engineers'
        },
        {
            title: 'How do you use React',
            content: 'You use React by creating components'
        }
    ];

    return (
        <Accordion items={items} />
    );
};

export { AccordionContainer as Accordion };