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
			const response = await fetch(Api.base_url + endpoint,conf);
			const data = await response.json();

			return data;
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
			const response = await fetch(Api.base_url + endpoint,conf);
			const data = await response.json();

			return data;
		} catch (err) {
			console.log(err);
		}
	}
	static async updateTicketStatus(status) {
		const endpoint = "/ticket";

		const conf = {
			method: 'PUT',
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify(status)
		}
		try {
			const response = await fetch(Api.base_url + endpoint,conf);
			const data = await response.json();

			return data;
		} catch (err) {
			console.log(err);
		}
	}
}