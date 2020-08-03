import { apiURL } from '@/config.js'
import { getToken } from '@/js/tokenHandler'

export default {
	// sends a request with the given data and method to the API
	async jsonRequest(endpoint, data, method) {

		console.log(data)
		let headers = {
			'Content-Type': 'application/json',
		}
		if (getToken() != null) headers['Authorization'] = 'Bearer ' + getToken()
		try {
			const res = await fetch(`${apiURL}/${endpoint}`, {
				method,
				headers,
				body: JSON.stringify(data),
			})
			console.log(apiURL + '/' + endpoint)
			console.log(res)
			if (res.status > 299) return res.status
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
		if (getToken() != null) headers['Authorization'] = 'Bearer ' + getToken()
		try {

			const request = {
				headers,
				method: 'POST',
				body: formData,
			}

			const res = await fetch(`${apiURL}/${endpoint}`, request)
			console.log(request)
			console.log()
			return res
		} catch (error) {
			alert('There was an issue uploading your file')
			return null
		}
	},
}
