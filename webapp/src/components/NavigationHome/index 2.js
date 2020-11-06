import { Button, Col, Row } from 'antd';

import React from 'react'
import icon_calendar from '../../assets/img/icon_calendar.png';
import icon_ticket from '../../assets/img/icon_ticket.png';

export default function NavigationHome({toggle}) {
	const click = () => {
		toggle("Ticket")
	}
	return (
		<Row gutter={[16,24]} justify="center">
			<Col className='card' onClick={click}>
				<div className='icon-container'>
					<img src={icon_ticket} alt="ticket icon" className="icon" />
				</div>
				<Button type="primary" style={{ width: "100%" }}onClick={click}>Retirer un ticket</Button>
			</Col>
			<Col className='card'>
				<a href="/rdv">
				<div className='icon-container'>
					<img src={icon_calendar} alt="calendar icon" className="icon" />
				</div>
				<Button type="primary" style={{ width: "100%" }} href="/rdv">Rendez-vous</Button>
				</a>
			</Col>
		</Row>
	)
}
