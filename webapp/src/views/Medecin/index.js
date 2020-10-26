import './style.scss';

import { Button, Layout } from 'antd';
import React, { Component } from 'react'

const { Content, Sider } = Layout;

export default class Medecin extends Component {
	state= {
		tickets : [
			{
				id: 1,
				name: "John Doe",
				number: "29075120012278"
			},
			{
				id: 2,
				name: "Jane Doe",
				number: "29075120012278"
			},
			{
				id: 3,
				name: "Do Doe",

			},
			{
				id: 4,
				name: "Harry Potter",
				number: "29075120012278"
			},
			{
				id: 5,
				name: "Scott",

			},
			{
				id: 5,
				name: "Scott",

			},
			{
				id: 5,
				name: "Scott",

			},
			{
				id: 5,
				name: "Scott",

			},
		],
	}
	render() {
		return (
			<Layout className="Medecin">
				<Content>
					<h1><b>Bonjour</b> Medecin</h1>
					{this.state.tickets.map((ticket, index) => (
						<div className="patientItem" key={index}>
							<p className="title">n°{ticket.id} {ticket.name}</p>
							{ticket.number && (<p className="number">{ticket.number}</p>)}
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
