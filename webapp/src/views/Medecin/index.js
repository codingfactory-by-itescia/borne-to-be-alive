import './style.scss';

import { Button, Col, Layout, Row } from 'antd';
import React, { Component } from 'react'

const { Content, Sider } = Layout;

export default class Medecin extends Component {
	render() {
		return (
			<Layout className="Medecin">
				<Content>
				<p><b>Bonjour</b> Medecin</p>
					<Row className="patientItem">
						<Col span={12}>
								<div>Test1</div>
								<div>Test3</div>
						</Col>
						<Col span={12}>
								Test2
						</Col>
					</Row>
					<Row className="patientItem">
						<Col span={12}>
								<div>Test1</div>
								<div>Test3</div>
						</Col>
						<Col span={12}>
								Test2
						</Col>
					</Row>
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
