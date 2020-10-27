import './style.scss';

import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
} from 'recharts';
import { DatePicker, Layout, Tabs, TimePicker, Typography, } from 'antd';
import React,{ Component } from 'react'
import { debounce } from 'lodash';
import { Redirect } from 'react-router-dom';

import { LeftOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Text } = Typography;
const { Sider,Content } = Layout;

export default class Rdv extends Component {
	constructor(props) {
		super(props);
		this.handleInputThrottled = debounce(this.toggleRedirect, 30000);
	}

	componentDidMount() {
		this.handleInputThrottled();
	}

	toggleRedirect () {
		this.setState({redirect: true});
	}

	state = {
		data:
			[
				{
					day: 'Lundi',
					hours: "10h-13h, 16h-19h",
					consultations:
						[
							{ time: '10h-11h',people: 30 },
							{ time: '11h-12h',people: 25 },
							{ time: '12h-13h',people: 10 },
							{ time: '13h-14h',people: 9 },
							{ time: '16h-17h',people: 28 },
							{ time: '17h-18h',people: 32 },
							{ time: '18h-19h',people: 10 },
						]
				},
				{
					day: 'Mardi',
					hours: "10h-13h, 16h-19h",
					consultations:
						[
							{ time: '10h-11h',people: 10 },
							{ time: '11h-12h',people: 15 },
							{ time: '12h-13h',people: 10 },
							{ time: '13h-14h',people: 6 },
							{ time: '16h-17h',people: 12 },
							{ time: '17h-18h',people: 15 },
							{ time: '18h-19h',people: 14 },
						]
				},
				{
					day: 'Mercredi',
					hours: "10h-13h",
					consultations:
						[
							{ time: '10h-11h',people: 30 },
							{ time: '11h-12h',people: 35 },
							{ time: '12h-13h',people: 20 },
						]
				},
				{
					day: 'Jeudi',
					hours: "10h-13h, 16h-19h",
					consultations:
						[
							{ time: '10h-11h',people: 10 },
							{ time: '11h-12h',people: 22 },
							{ time: '12h-13h',people: 5 },
							{ time: '13h-14h',people: 2 },
							{ time: '16h-17h',people: 12 },
							{ time: '17h-18h',people: 13 },
							{ time: '18h-19h',people: 6 },
						]
				},
				{
					day: 'Vendredi',
					hours: "10h-13h, 16h-19h",
					consultations:
						[
							{ time: '10h-11h',people: 12 },
							{ time: '11h-12h',people: 10 },
							{ time: '12h-13h',people: 6 },
							{ time: '13h-14h',people: 9 },
							{ time: '16h-17h',people: 10 },
							{ time: '17h-18h',people: 8 },
							{ time: '18h-19h',people: 6 },
						]
				}
			]

	}
	
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/" />
		}
		return (
			<Layout className="rdv">
				<Content>
					<a href='/Accueil' className='back-button'>
						<LeftOutlined />
						<p>Accueil</p>
					</a>
					<h1>Horaires d'affluence</h1>
					<p>Durée moyenne de la consultation <Text strong>20</Text>min</p>
					<Tabs defaultActiveKey="1">
						{this.state.data.map((item,key) => (
							<TabPane tab={item.day} key={key}>
								<BarChart width={800} height={500}
									data={this.state.data[key].consultations}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="time" />
									<YAxis />
									{/* <Legend content="Consultations" /> */}
									<Bar dataKey="people" fill="#94DA73" />
								</BarChart>
							</TabPane>
						))}
					</Tabs>
				</Content>
				<Sider >
					<h2>Prendre un rendez-vous</h2>
					<DatePicker style={{ width: "100%",marginBottom: 15 }} onOpenChange={this.handleInputThrottled.bind(this)}/>
					<TimePicker style={{ width: '100%',marginBottom: 15 }} onOpenChange={this.handleInputThrottled.bind(this)}/>
					<div className="hours">
						<h3>Docteur Desjardins</h3>
						<p><Text strong>Adresse:</Text> 9 Rue Léonard de Vinci, 92230 Gennevilliers</p>
						<Text strong style={{marginBottom: '1em'}}>Horaires:</Text>
						<div className="grid">
							{this.state.data.map((item,key) => (
								<p key={key} className="day"><span>{item.day}</span> <span>{item.hours}</span></p>
							))}
						</div>
					</div>
				</Sider>
			</Layout>
		)
	}
}
