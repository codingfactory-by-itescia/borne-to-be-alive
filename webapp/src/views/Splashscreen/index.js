import './style.scss';

import React,{ Component } from 'react'

import img from '../../assets/img/icon_mains.png'
import logo from '../../assets/img/Logo.png'

export default class Splashscreen extends Component {
	render() {
		return (
			<a href="/Accueil">
				<section className="top">
					<img src={logo} alt="borne to be alive logo" />
					<img src={img} alt="icon mains" className="icon" />
					<p>Désinfection des mains obligatoire avant l’utilisation de la borne.</p>
				</section>
				<section className="bottom">
					<p>Insérez votre carte vitalepour vous identifier ou cliquez ici</p>
					<div className="button"></div>
				</section>

			</a>
		)
	}
}
