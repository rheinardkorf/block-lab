/**
 * External dependencies
 */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';

/**
 * Internal dependencies
 */
import BlockLabMultiselectControl from '../multiselect';
import { setupControl } from './helpers';

const firstValue = 'foo';
const secondValue = 'baz';
const field = {
	label: 'Here is a multiselect label',
	help: 'Here is some help text',
	default: [ firstValue ],
	options: [
		{
			label: 'Foo',
			value: firstValue,
		},
		{
			label: 'Baz',
			value: secondValue,
		},
	],
};
const mockOnChange = jest.fn();
const props = { field, mockOnChange };

describe( 'Multiselect', () => {
	it( 'has the help text', () => {
		const { getByText } = setupControl( BlockLabMultiselectControl, props );
		expect( getByText( field.help ) ).toBeInTheDocument();
	} );

	it( 'sends the new value to the onChange handler', () => {
		const { control } = setupControl( BlockLabMultiselectControl, props );
		fireEvent.change( control, { target: { value: [ secondValue ] } } );
		expect( mockOnChange ).toHaveBeenCalledWith( [ secondValue ] );
	} );
} );
