import './style.scss';

import { Button, Col, Layout, Row } from 'antd';
import React,{ Component } from 'react';

import Sms from '../Sms';
import Ticket from '../Ticket';
import icon_calendar from '../../assets/img/icon_calendar.png';
import icon_ticket from '../../assets/img/icon_ticket.png';
import logo_blue from '../../assets/img/Logo_blue.png';

const { Content } = Layout;
export default class Accueil extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isDisabled: false,
			user: {
				name: "Rachel Bonneaux",
				id: "290751211221474"
			},
		}
	}

	render() {
		const { user } = this.state;
		return (
			<Layout>
				<Content>
					<div className='text-container'>
						<p className='greetings'><b>Bonjour</b> {user.name}</p>
						<p className='number'>{user.id} </p>
						<div className='info'>
							<p><b>N°2</b> en consultation depuis 30min.</p>
							<p>Il y a <b>2</b> personnes avant vous. Votre temps d'attente est estimé à <b>1h</b></p>
						</div>
					</div>

							<Ticket/>
							<Sms/>

					<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />
				</Content>
			</Layout >
		)
	}
}
