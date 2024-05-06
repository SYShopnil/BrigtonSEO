/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

// External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { Form as MainForm } from '@src/components/root';
import { formData } from '@root/__mock-props__/components/root/form';
import { IFormValues } from '@src/types/root';

export default {
  title: 'Components/Root/Form',
  component: MainForm,
  argTypes: {
    formFields: {
      control: 'object',
    },
    buttonInfo: {
      control: 'object',
    },
    formTitle: {
      control: 'text',
    },
    privacyInfo: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof MainForm>;

function onSubmit(formValues: IFormValues) {
  alert(JSON.stringify(formValues));
}

/**
 * Template
 */
const Template: ComponentStory<typeof MainForm> = (args) => (
  <div className="section-padding-primary">
    <div className="container">
      <div className="max-w-[676px]">
        <MainForm {...args} onSubmit={onSubmit} />
      </div>
    </div>
  </div>
);

/**
 * Form
 */
export const Form = Template.bind({});
Form.args = {
  formFields: formData.formFields,
  buttonInfo: formData.buttonInfo,
  formTitle: formData.formTitle,
  privacyInfo: undefined,
};
