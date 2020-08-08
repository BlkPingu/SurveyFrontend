module.exports = {
	title: 'Voice Survey',
	apiURL: 'https://backend.tobiaskolb.dev',
	tokenLocalStorageName: 'aTokenOfLove',
	individualApiEndpoints: false,
	startRecordingText: 'Start Recording',
	stopRecordingText: 'Stop Recording',
	allowRetakes: true,
	retakeText: 'Record another take',
	nextPageText: 'Proceed →',
	finishText: 'Complete Survey ✔',
	subtitle: 'a survey to validate and test voice command systems',
	instructions: require('./assets/instructions'),
	privacyPolicy: require('./assets/privacyPolicy'),
	cookiePolicy: require('./assets/cookiePolicy'),
	microphoneHint: require('./assets/microphoneHint'),
	privacyAcknowledgement: 'I fully understand Privacy Policy above and acknowledge it.',
	cookieAcknowledgement: 'I fully understand the cookie notice above and acknowledge it.',
	metaData: require('./assets/metaData'),
	maxTakeLength: 5000,
	/*
		Please see to https://github.com/ai/audio-recorder-polyfill for possible config
	*/
	recorderOptions: {
		mimeType: 'audio/wav',
		audioBitsPerSecond: 256000,
	}
}