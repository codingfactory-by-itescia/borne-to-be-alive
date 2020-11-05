export class Api {
	static base_url = "http://localhost:5000/borne-to-be-alive/us-central1/api";
	static async createTicket(ticket) {
		const endpoint = "/ticket";

		const conf = {
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify(ticket)
		}
		try {
			const response = await Api.request(Api.base_url + endpoint,conf);
			return response;
		} catch (err) {
			console.log(err);
		}
	}

	static async getTickets() {
		const endpoint = "/ticket";
		const conf = {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
		}
		try {
			const response = await Api.request(Api.base_url + endpoint,conf);
			return response;
		} catch (err) {
			console.log(err);
		}
	}
	static async updateTicketStatus(id, status) {
		const endpoint = `/tickets/${id}/status/${status}`;
		const conf = {
			method: 'PATCH',
			mode: 'cors',
			cache: 'default',
		}
		try {
			const response = await Api.request(Api.base_url + endpoint,conf);
			return response;
		} catch (err) {
			console.log(err);
		}
	}

	static async request(url,conf) {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type","application/json");
		Object.defineProperty(conf,'headers',{
			value: myHeaders,
			writable: true
		});

		let response = await fetch(url,conf)

		if (response.status >= 400) {
			throw new Error(response.message)
		}

		const data = await response.json();
		return data;
	}
}