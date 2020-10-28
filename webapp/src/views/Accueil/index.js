import './style.scss';

import React,{ Component } from 'react';

import { Api } from '../../services/api.js'
import { Layout } from 'antd';
import NavigationHome from '../../components/NavigationHome';
import { Redirect } from 'react-router-dom';
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
			redirect: false,
			showTicket: false,
			showHome: true,
			showSms: false
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ redirect: true })
		},30000)
	}
	toggleComponent = (item) => {
		if (item === "Ticket") {
			this.setState({
				showTicket: !this.state.showTicket,
				showHome: !this.state.showHome
			})
		} else if (item === "Sms") {
			this.setState({
				showSms: !this.state.showSms,
				showTicket: !this.state.showTicket,
			})
		} else {
			this.setState({
				showTicket: false,
				showSms: false,
				showHome: true
			})
		}
	}

	createTicket = async () => {
		try {
			await Api.createTicket({
				first_name: 'Mat',
				last_name: 'Arc',
				phoneNumber: '06843543',
				vitalId: '290751211221474'
			})

		} catch (err) {
			console.error(err);
		}

	}


	disable() {
		this.setState({
			isDisabled: true
		})
	}

	render() {
		const { user, showTicket, showHome, showSms} = this.state;
		if (this.state.redirect) {
			return <Redirect push to="/" />
		}
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
					{showHome && (<NavigationHome toggle={this.toggleComponent}/>)}
					{showTicket && (<Ticket user={this.state.user} toggle={this.toggleComponent} createTicket={this.createTicket}/>)}
					{showSms && (<Sms user={this.state.user} toggle={this.toggleComponent}/>)}
					<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' onClick={this.toggleComponent} />
				</Content>
			</Layout >
		)
	}
}
