import { apiURL } from '@/config.js'
import Store from '@/js/store/index'


export default {
	// sends a request with the given data and method to the API
	async jsonRequest(endpoint, data, method) {

		let headers = {
			'Content-Type': 'application/json',
		}
		if (Store.getters.getToken != null) headers['Authorization'] = 'Bearer ' + Store.getters.getToken
		try {
			const res = await fetch(`${apiURL}/${endpoint}`, {
				method,
				mode:'cors',
				headers,
				body: JSON.stringify(data),
			})
			const resParse = await res.json()
			return resParse
		} catch (error) {
			console.error(error)
			return null
		}
	},

	// Sends a multipart formdata request (file upload + extras)
	async multipartFormDataRequest(endpoint, data) {
		let formData = new FormData()
		for (let key in data) {
			formData.append(key, data[key])
		}
		let headers = {}
		if (Store.getters.getToken != null) headers['Authorization'] = 'Bearer ' + Store.getters.getToken
		try {

			const request = {
				headers,
				mode:'cors',
				method: 'POST',
				body: formData,
			}

			const res = await fetch(`${apiURL}/${endpoint}`, request)
			return res
		} catch (error) {
			alert('There was an issue uploading your file')
			return null
		}
	},
}
