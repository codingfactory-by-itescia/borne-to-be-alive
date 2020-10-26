import './style.scss';

import { Button, Col, Layout, Row } from 'antd';
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';

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
			redirect: false,
		}
		this.disable = this.disable.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({redirect: true})
		}, 30000 )
	}

	disable() {
		this.setState({
			isDisabled: true
		})
	}
	render() {
		const { user } = this.state;
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
					<div>
						<div className='container'>
							<Row gutter={[16,24]} className='gutter-row'>
								<Col className='card'>
									<div className='icon-container'>
										<img src={icon_ticket} alt="ticket icon" className="icon" />
									</div>
									<Button type="primary" style={{ width: "100%" }} href="/Ticket">Retirer un ticket</Button>
								</Col>
								<Col className='card'>
									<div className='icon-container'>
										<img src={icon_calendar} alt="calendar icon" className="icon" />
									</div>
									<Button type="primary" style={{ width: "100%" }} href="/rdv">Rendez-vous</Button>
								</Col>
							</Row>
						</div>
					</div>
					<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />
				</Content>
			</Layout >
		)
	}
}
