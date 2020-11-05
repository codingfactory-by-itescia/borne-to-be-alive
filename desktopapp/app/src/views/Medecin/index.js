import './style.scss';

import { Button, Layout } from 'antd';
import React,{ Component } from 'react'

import { Api } from '../../services/api.js'

const { Content,Sider } = Layout;

export default class Medecin extends Component {
	state = {
		tickets: [],
		currentConsult: {},
		selectedConsult: {}
	}
	componentDidMount() {
		this.getTickets()
		this.getCurrentConsult()
	}

	getTickets = async () => {
		this.setState({ tickets: await Api.getTickets() })
	}

	getCurrentConsult = async () => {
		const array = await Api.getTickets()
		const currentConsult = array.filter(ticket => ticket.status === "in progress")
		this.setState({ currentConsult: currentConsult[0]})
	}

	selectedConsult = (item) => {
		this.setState({selectedConsult: item})
	}

	startConsult = async (id) => {
		Api.updateTicketStatus(id, "in_progress")

	}
	finishConsult = async (id) => {
		Api.updateTicketStatus(id, "done")
	}

	render() {
		const { tickets,currentConsult, selectedConsult } = this.state;
		return (
			<Layout className="Medecin">
				<Content>
					<h1><b>Bonjour</b> Dr Maboule</h1>
					{tickets.map((ticket,index) => (
						<div className={`patientItem ${ticket.status === "in_progress" ? "inProgess" : ""}`} key={index} onClick={() =>this.selectedConsult(ticket)}>
							<p className="title">n°{ticket.id} {ticket.first_name} {ticket.last_name}</p>
							{ticket.vitalId && (<p className="number">{ticket.vitalId}</p>)}
						</div>
					))}
				</Content>
				<Sider>
					<h1>N°{selectedConsult.id}</h1>
					<h2>{selectedConsult.first_name} {selectedConsult.last_name}</h2>
					<p>{selectedConsult.vitalId}</p>
					{selectedConsult.status === "open" && (<Button style={{ width: '100%' }} onClick={() => this.startConsult(selectedConsult.id)}>Demarrer</Button>)}
					{selectedConsult.status === "in_progress" && (<Button style={{ width: '100%' }} onClick={() => this.finishConsult(selectedConsult.id)}danger >Terminer</Button>)}
				</Sider>
			</Layout>
		)
	}
}
