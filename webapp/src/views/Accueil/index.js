import './style.scss';

import React,{ Component } from 'react';

import { Layout } from 'antd';
import NavigationHome from '../../components/NavigationHome';
import Sms from '../Sms';
import Ticket from '../../components/Ticket';
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
<NavigationHome/>
							<Ticket/>
							<Sms/>

					<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />
				</Content>
			</Layout >
		)
	}
}
