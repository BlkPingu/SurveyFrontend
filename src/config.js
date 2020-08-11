module.exports = {
	title: 'Voice Survey',
	apiURL: 'https://backend.tobiaskolb.dev',
	tokenLocalStorageName: 'aTokenOfLove',
	individualApiEndpoints: false,
	startRecordingText: 'Aufnahme starten',
	stopRecordingText: 'Aufnahme stoppen',
	allowRetakes: true,
	retakeText: 'Aufnahme wiederholen',
	nextPageText: 'Weiter →',
	finishText: 'Umfrage abschließen ✔',
	subtitle: 'Eine Umfrage zum testen und validieren von Spracherkennungssystemen',
	instructions: require('./assets/instructions'),
	privacyPolicy: require('./assets/privacyPolicy'),
	cookiePolicy: require('./assets/cookiePolicy'),
	microphoneHint: require('./assets/microphoneHint'),
	privacyAcknowledgement: 'Ich verstehe den Datenschutzhinweis und stimme Ihm zu.',
	cookieAcknowledgement: 'Ich verstehe den Cookie Hinweis und stimme Ihm zu.',
	metaData: require('./assets/metaData'),
	maxTakeLength: 6000,
	/*
		Please see to https://github.com/ai/audio-recorder-polyfill for possible config
	*/
	recorderOptions: {
		mimeType: 'audio/wav',
		audioBitsPerSecond: 256000,
	}
}