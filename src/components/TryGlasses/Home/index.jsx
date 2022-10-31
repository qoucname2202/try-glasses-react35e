import React, { Component } from 'react';
import data from '../../../data/dataGlasses.json';
import Glasses from '../Glasses';
import Header from '../Header';
import Model from '../Model';
class Home extends Component {
	render() {
		console.log(data);
		return (
			<div
				className='main'
				style={{ backgroundImage: "url('./glassesImage/background.jpg')" }}
			>
				<Header />
				<div className='container'>
					<Model />
					<Glasses />
				</div>
			</div>
		);
	}
}

export default Home;
