import './style.scss';

import icon_calendar from '../../assets/img/icon_calendar.png';
import icon_mobile from '../../assets/img/icon_mobile.png';
import logo_blue from '../../assets/img/Logo_blue.png';

import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export default class Ticket extends Component {

	constructor(props) {
		super(props);
		this.state = {
			shouldHide: true
		}

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			shouldHide: false
		});
	}

	render() {
		return (
			<div className='app-container'>
				<a href='/Accueil' className='back-button'>
					<LeftOutlined />
					<p>Accueil</p>
				</a>
				<div className='text-container'>
					<p className='greetings'><b>Bonjour</b> Rachel Bonneaux</p>

					<p className='number'>2 90 12 21 274 321 74 </p>
					<p className='info-number'>
						<b>N°3</b>
					</p>
					<p className='info'>
						Il y a <b>2</b> personnes avant vous.
					</p>
				</div>
				<div>
					<div className={this.state.shouldHide ? 'container' : 'hidden'}>
						<Row gutter={[16, 24]} className='gutter-row'>
							<Col className='card'>
								<div className='icon-container'>
									<img src={icon_mobile} alt="mobile icon" className="icon" />
								</div>
								<Button onClick={this.onClick} className="button">SMS</Button>
							</Col>
							<Col className='card'>
								<div className='icon-container'>
									<img src={icon_calendar} alt="calendar icon" className="icon" />
								</div>
								<Button className="button">RENDEZ-VOUS</Button>
							</Col>
						</Row>
					</div>

					<div className={this.state.shouldHide ? 'hidden' : 'container'}>
						<Input className='phone-input' placeholder="Numéro de portable" />
						<Button className="phone-button">Envoyer</Button>
					</div>
				</div>
				<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />
			</div >
		)
	}
}
