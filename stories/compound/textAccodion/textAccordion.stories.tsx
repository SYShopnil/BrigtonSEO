/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

/**
 * External Imports
 */
import { demoAccordionListData } from '@root/__mock-props__/components/compound/textAccordion';
import { TextAccordion } from '@src/components/compound';
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal Imports
 */


export default {
    title: 'Components/Compound/Accordion/List',
    component: TextAccordion,
    argTypes: {
        list: {
            control: "object"
        }
    }
} as ComponentMeta <typeof TextAccordion>

const TextAccordionTemplate: ComponentStory<typeof TextAccordion> = (args) => {
    return (
        <div className = {`container flex justify-center item-center lg:block`}>
            <TextAccordion
                {...args}
            />
        </div>
    )
}

export const ListAccordion = TextAccordionTemplate.bind ({});
ListAccordion.args = {
    list: demoAccordionListData
}