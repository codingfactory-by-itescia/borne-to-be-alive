import './style.scss';

import { Button, Col, Input, Layout, Row } from 'antd';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { debounce } from 'lodash';

import { LeftOutlined } from '@ant-design/icons';
import icon_mobile from '../../assets/img/icon_mobile.png';
import icon_ticket from '../../assets/img/icon_ticket.png';
import logo_blue from '../../assets/img/Logo_blue.png';

const { Content } = Layout;
export default class Ticket extends Component {

	constructor(props) {
		super(props);
		this.state = {
			shouldHide: true,
			isDisabled: false,
			redirect: false
		}
		this.handleInputThrottled = debounce(this.toggleRedirect, 30000);
	}

	componentDidMount() {
		this.handleInputThrottled();
	}

	onClick = ()=> {
		this.handleInputThrottled();
		this.setState({
			shouldHide: false
		});
	}

	toggleRedirect () {
		this.setState({redirect: true});
	}

	toggleDisable = () => {
		this.setState({ isDisabled: true });
	}


	render() {
		if (this.state.redirect) {
			return <Redirect push to="/" />
		}
		return (
			<Layout>
				<Content>
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
								<Button onClick={this.onClick} type="primary" style={{ width: "100%" }}>Recevoir par SMS</Button>
							</Col>
							<Col className='card'>
								<div className='icon-container'>
									<img src={icon_ticket} alt="calendar icon" className="icon" />
								</div>
								<Button onClick={this.toggleDisable} disabled={this.state.isDisabled} type="primary" style={{width: "100%"}}>Imprimer votre ticket</Button>
							</Col>
						</Row>
					</div>

					<div className={this.state.shouldHide ? 'hidden' : 'container'}>
						<Input className='phone-input' placeholder="Numéro de portable" onChange={this.handleInputThrottled.bind(this)}/>
						<Button type="primary" style={{width: "100%"}}>Envoyer</Button>
					</div>
				</div>
				<img src={logo_blue} alt="borne to be alive logo" className='footer-logo' />

				</Content>
			</Layout >
		)
	}
}
