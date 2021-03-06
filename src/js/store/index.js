import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import QuestionsModule from './questionsModule'
import MetaDataModule from './metaDataModule'
import TokenModule from './tokenModule'
import Router from '@/js/router'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		QuestionsModule,
		MetaDataModule,
		TokenModule,
	},
/*	plugins: [
		createPersistedState({
			rehydrated(store) {
				// Reset Blobs and URls set before if session has to be restored
				// because the blobs are not valid after page reloads
				for (let question in store.state.questions) {
					store.commit('setRecordForQuestion', {
						id: question,
						recordURL: null,
						blob: null,
					})
				}
				// if user was already assigned a sessionID restore
				// them to the page of the last successful question index
				if (store.getters.sessionID) {
					Router.push('/question/' + store.getCompletedQuestions + 1)
				}
			},
		}),
	],*/
	state: {
		privacyPolicyAccepted: false,
		cookiePolicyAccepted: false,
	},
	mutations: {
		setPrivacyAcknowledgement(state, accepted) {
			state.privacyPolicyAccepted = accepted
		},
		setCookieAcknowledgement(state, accepted) {
			state.cookiePolicyAccepted = accepted
		},
	},
	actions: {
 		completeSurvey (context) {
 			context.commit('setSessionID', '')
 			context.commit('setToken', '')
 			context.dispatch('resetQuestions')
 			context.dispatch('resetMetadata')
 		}
 	},
	getters: {
		getPrivacyAcknowledgement(state) {
			return state.privacyPolicyAccepted
		},
		getCookieAcknowledgement(state) {
			return state.cookiePolicyAccepted
		},
	},
})

export default store
