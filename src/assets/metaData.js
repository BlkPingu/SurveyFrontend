/*
	Each child of module.exports represents an input in the Metadata form as a line.
	The properties are used as follows:
		- id: Key in JSON requests as well as id in html
		- name: Context of the accompanying label for input
		- type: Attribute for the <inuput> element in the code
		- required: Makes the input error if field is empty
		- validator: A validation function that is called on the inputs value
		- errorMessage: Text displayed below field if validation fails
*/

module.exports = [
	{
		id: 'gender',
		name: 'Geschlecht',
		type: 'radio',
		options: ['weiblich','männlich', 'divers'],
		required: true,
		errorMessage: 'Bitte ein Geschlecht auswählen',
		description: 'Totally intutive reason why I need this'
	},
	{
		id: 'age',
		name: 'Alter',
		type: 'select',
		options: ['18-21', '22-27', '28-33'],
		required: true,
		errorMessage: 'Bitte eine Altersspanne auswählen',
		description: 'Totally intutive reason why I need this'
	},
	{
		id: 'nativeLanguage',
		name: 'Native Language',
		type: 'select',
		required: true,
		options: ['Foo', 'Bar', 'Bazz'],
		errorMessage: 'Bitte eine Muttersprache auswählen.',
		description: 'Totally intutive reason why I need this'
	},
]