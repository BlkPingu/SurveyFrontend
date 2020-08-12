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

const genders = ['weiblich','männlich', 'divers']
const ageRanges = ['18-21', '22-25', '26-29', '30-33']
const languages = ['Englisch', 'Deutsch', 'Französisch']

module.exports = [
	{
		id: 'gender',
		name: 'Geschlecht',
		type: 'radio',
		options: genders,
		required: true,
		errorMessage: 'Bitte ein Geschlecht auswählen',
		description: '',
		validator: (value) => {return genders.includes(value)}
	},
	{
		id: 'age',
		name: 'Alter',
		type: 'select',
		options: ageRanges,
		required: true,
		errorMessage: 'Bitte eine Altersspanne auswählen',
		description: '',
		validator: (value) => {return ageRanges.includes(value)}
	},
	{
		id: 'nativeLanguage',
		name: 'Muttersprache',
		type: 'select',
		required: true,
		options: languages,
		errorMessage: 'Bitte eine Muttersprache auswählen.',
		description: '',
		validator: (value) => {return languages.includes(value)}
	},
]