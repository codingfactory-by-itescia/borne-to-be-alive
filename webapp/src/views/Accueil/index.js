import './style.scss';

import icon_calendar from '../../assets/img/icon_calendar.png';
import icon_ticket from '../../assets/img/icon_ticket.png';
import logo_blue from '../../assets/img/Logo_blue.png';

import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

export default class Accueil extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isDisabled: false
		}
		this.disable = this.disable.bind(this);
	}

	disable() {
		this.setState({
			isDisabled: true
		})
	}
	render() {
		return (
			<div className='app-container'>
				<div className='text-container'>
					<p className='greetings'><b>Bonjour</b> Rachel Bonneaux</p>

					<p className='number'>2 90 12 21 274 321 74 </p>
					<p className='info'>
						<b>N°2</b> en consultation depuis 30min.
						<br />
						Il y a <b>2</b> personnes avant vous.
					</p>
				</div>
				<div>
					<div className='container'>
						<Row gutter={[16, 24]} className='gutter-row'>
							<Col className='card'>
								<div className='icon-container'>
									<img src={icon_ticket} alt="ticket icon" className="icon" />
								</div>
								<Button onClick={this.disable} className={this.state.isDisabled ? 'button disabled' : 'button'}>IMPRIMER UN TICKET</Button>
							</Col>
							<Col className='card'>
								<div className='icon-container'>
									<img src={icon_calendar} alt="calendar icon" className="icon" />
								</div>
								<a href='/Ticket'>
									<Button className="button">RENDEZ-VOUS</Button>
								</a>
							</Col>
						</Row>
					</div>
				</div>
				<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />
			</div >
		)
	}
}
