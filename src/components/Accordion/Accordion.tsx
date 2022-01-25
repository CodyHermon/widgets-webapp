import { 
    Accordion as AccessibleAccordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import classes from './accordion.module.css';

interface Props {
    items: any,
}

const Accordion = ({ items }: Props) => (
    <AccessibleAccordion>
        {items.map((item: any) => (            
            <AccordionItem key={item.title}>
                <AccordionItemHeading>
                    <AccordionItemButton className={classes.button}>
                        {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={classes.panel}>
                    <p>{item.content}</p>
                </AccordionItemPanel>
            </AccordionItem>                      
            )
        )}
    </AccessibleAccordion>   
);

export { Accordion };