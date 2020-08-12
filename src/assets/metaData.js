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
const ageRanges = ['18-21', '22-25', '26-29', '30-33', '34-37','38-41','42-45','46-49','50-53','54-57','58-61','62-65','66-69','70-73','74-77','78-81','82-85','86-89','90-93','94-97','98-101','102-105','106-109']
// Quelle: https://secure.umweltbundesamt.at/edm_portal/redaList.do;jsessionid=113230CC442B8F4F943E55A4FFE284D5.edmportalnode01?seqCode=9fqtnj85wqszy7&display=plain
const languages = ['Sonstige','Deutsch','Englisch','Französisch','Abchasisch','Afrikaans','Akan','Albanisch','Amharisch','Arabisch','Aragonesisch','Armenisch','Aserbeidschanisch','Assamesisch','Avestisch','Awarisch','Aymará','Bahasa Indonesia','Bambara','Baschkirisch','Baskisch','Beach-la-mar','Bengali','Bihari (Andere)','Birmanisch','Bokmål','Bosnisch','Bretonisch','Bulgarisch','Chamorro','Chinesisch','Cree','Danakil','Dänisch','Dzongkha','Esperanto','Estnisch','Ewe','Färöisch','Fidschi','Finnisch','Friesisch','Ful','Galicisch','Gälisch-Schottisch','Galla','Ganda','Georgisch','Grönländisch','Guaraní','Gujarātī','Haïtien (Haiti-Kreolisch)','Haussa','Hebräisch','Herero','Hindi','Hiri-Motu','Ibo','Ido','Interlingua','Interlingue','Inuktitut','Inupik','Irisch','Isländisch','Italienisch','Japanisch','Javanisch','Jiddisch','Kambodschanisch','Kannada','Kanuri','Kasachisch','Kaschmiri','Katalanisch','Kikuyu','Kirchenslawisch','Kirgisisch','Komi','Kongo','Koreanisch','Kornisch','Korsisch','Kroatisch','Kurdisch','Kwanyama','Kymrisch','Lalo','Laotisch','Latein','Lettisch','Limburgisch','Lingala','Litauisch','Luba-Katanga','Luxemburgisch','Makedonisch','Malagassi','Malaiisch','Malayalam','Maledivisch','Maltesisch','Manx','Maori','Marathi','Marschallesisch','Mongolisch','Nauruanisch','Navajo','Ndebele (Simbabwe)','Ndebele (Transvaal)','Ndonga','Nepali','Neugriechisch','Niederländisch','Nordsaamisch','Norwegisch','Nyanja','Nynorsk','Ojibwa','Okzitanisch','Oriya','Ossetisch','Pāli','Pandschabi','Paschtu','Persisch','Polnisch','Portugiesisch','Quechua','Rätoromanisch','Rumänisch','Rundi','Russisch','Rwanda','Samoanisch','Sango','Sanskrit','Sardisch','Schona','Schwedisch','Serbisch','Sindhi','Singhalesisch','Slowakisch','Slowenisch','Sorbisch','Somali','Spanisch','Süd-Sotho','Sundanesisch','Swahili','Swasi','Tadschikisch','Tagalog','Tahitisch','Tamil','Tatarisch','Telugu','Thailändisch','Tibetisch','Tigrinja','Tongaisch','Tschechisch','Tschetschenisch','Tschuwaschisch','Tsonga','Tswana','Türkisch','Turkmenisch','Twi','Uigurisch','Ukrainisch','Ungarisch','Urdu','Usbekisch','Venda','Vietnamesisch','Volapük','Wallonisch','Weißrussisch','Wolof','Xhosa','Yoruba','Zhuang','Zulu']

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