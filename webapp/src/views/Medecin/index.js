import './style.scss';

import { Layout, Col, Row, Button } from 'antd';

import React, { Component } from 'react'

const { Content, Sider } = Layout;

export default class Medecin extends Component {
	render() {
		return (
			<Layout>
				<Content className="full">
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
					<p>N°3</p>
					<p>Rachel Bonneaux</p>
					<p>2 90 12 21 274 321 74</p>
					<a href='/'>
						<Button className="medicButton">DEMARER</Button>
					</a>
				</Sider>
			</Layout>
		)
	}
}
