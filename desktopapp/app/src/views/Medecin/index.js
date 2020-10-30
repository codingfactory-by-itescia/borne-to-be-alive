import './style.scss';

import { Button, Layout } from 'antd';
import React, { Component } from 'react'

import { Api } from '../../services/api.js'

const { Content, Sider } = Layout;

export default class Medecin extends Component {
	state= {
		tickets : [],
	}
	componentDidMount() {
		this.getTickets()

	}

	getTickets = async () => {
		this.setState({ tickets: await Api.getTickets()})
	}
	render() {
		return (
			<Layout className="Medecin">
				<Content>
					<h1><b>Bonjour</b> Dr Maboule</h1>
					{this.state.tickets.map((ticket, index) => (
						<div className="patientItem" key={index}>
							<p className="title">n°{ticket.id} {ticket.first_name} {ticket.last_name}</p>
							{ticket.vitalId && (<p className="number">{ticket.vitalId}</p>)}
						</div>
					))}
				</Content>
				<Sider>
					<h1>N°3</h1>
					<h2>Rachel Bonneaux</h2>
					<p>2 90 12 21 274 321 74</p>
						<Button style={{width: '100%'}} href="#">Demarrer</Button>
				</Sider>
			</Layout>
		)
	}
}
