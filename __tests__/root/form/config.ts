/**
 * An array of values to apply to input fields before testing
 * validation - For Req
 */

export const generalInputValidationTest = [
  {
    fieldRequired: true,
    scenarios: [
      {
        value: '',
        expectError: true,
      },
      {
        value: 'as',
        expectError: true,
      },
      {
        value: 'asd',
        expectError: false,
      },
    ],
  },
  {
    fieldRequired: false,
    scenarios: [
      {
        value: '',
        expectError: false,
      },
      {
        value: 'as',
        expectError: true,
      },
      {
        value: 'asd',
        expectError: false,
      },
    ],
  },
];

export const emailInputValidationTest = [
  {
    fieldRequired: true,
    scenarios: [
      {
        type: 'text',
        name: 'email',
        value: '',
        expectError: true,
      },
      {
        type: 'text',
        name: 'email',
        value: 'as',
        expectError: true,
      },
      {
        type: 'text',
        name: 'email',
        value: 'asd@',
        expectError: true,
      },
      {
        type: 'text',
        name: 'email',
        value: 'asd@asd.com',
        expectError: false,
      },
    ],
  },
  {
    fieldRequired: false,
    scenarios: [
      {
        type: 'text',
        name: 'email',
        value: '',
        expectError: false,
      },
      {
        type: 'text',
        name: 'email',
        value: 'as',
        expectError: true,
      },
      {
        type: 'text',
        name: 'email',
        value: 'asd@',
        expectError: true,
      },
      {
        type: 'text',
        name: 'email',
        value: 'asd@asd.com',
        expectError: false,
      },
    ],
  },
];

export const checkBoxInputValidationTest = [
  {
    fieldRequired: true,
    scenarios: [
      {
        value: true,
        expectError: false,
      },
      {
        value: false,
        expectError: true,
      },
    ],
  },
  {
    fieldRequired: false,
    scenarios: [
      {
        value: true,
        expectError: false,
      },
      {
        value: false,
        expectError: false,
      },
    ],
  },
];

/**
 * Used for input/textarea
 */
export const errorBorder = 'border-dangerLight';
export const normalBorder = 'border-transparent';

/**
 * Used for coloring label text
 */
export const errorText = 'text-dangerLight';
export const normalText = 'text-blackLight';
