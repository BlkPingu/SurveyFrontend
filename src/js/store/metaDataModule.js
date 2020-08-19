import metaData from '@/assets/metaData'
import MetaDataService from '@/services/metaDataService'
import Router from '@/js/router.js'

let meta = Object.keys(metaData).reduce((obj, key) => {
	obj[metaData[key].id] = null
	return obj
}, {})

function CreateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}


export default {
	state: {
		metaData: meta,
		sessionID: null,
	},
	actions: {
		async createSessionID({commit}, metadata) {
			const idString = `${CreateUUID()}_${metadata.dateTime.replace(' ', '_')}`
			commit('setSessionID', idString)
		},
		async writeMetaData({commit, dispatch, getters}, data) {
			// add current time to meta for sessionID / verification
			var m = new Date()
			data.dateTime = `${m
				.toISOString()
				.replace('T', '_')
				.replace(/:/g, '-')
				.slice(0, -5)}`
			// Create and append sessionID
			await dispatch('createSessionID', data)
			data.sessionID = getters.getSessionID
			try {
				commit('setMetaData', data)
				// Uploading Meta to server to receive token
				let res = await MetaDataService.putMeta(data)
				if (res.token) {
					commit('setToken', res.token)
					return
				} else if (res.status > 299) {
					throw new Error(
						'Your request was rejected with the code ' + res
					)
				} else {
					throw new Error('You were not authorized to upload data')
				}
			} catch (e) {
				alert(e.msg)
			}
		},
	},
	mutations: {
		setMetaData(state, data) {
			state.metaData = data
		},
		setSessionID(state, idString) {
			state.sessionID = idString
		},
	},
	getters: {
		getMeta(state) {
			return state.metaData
		},
		getSessionID(state) {
			return state.sessionID
		},
	},
}
