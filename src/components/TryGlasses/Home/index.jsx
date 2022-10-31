import React, { Component } from 'react';
import data from '../../../data/dataGlasses.json';
import Glasses from '../Glasses';
import Header from '../Header';
import Model from '../Model';
class Home extends Component {
	state = {
		glassDetail: {
			id: 0,
			price: 0,
			name: '',
			url: '',
			desc: '',
		},
	};
	viewGlassDetail = glassInfo => {
		this.setState({
			glassDetail: glassInfo,
		});
	};
	render() {
		return (
			<div
				className='main'
				style={{ backgroundImage: "url('./glassesImage/background.jpg')" }}
			>
				<Header />
				<div className='container'>
					<Model glassInfo={this.state.glassDetail} />
					<Glasses listGlasses={data} viewDetail={this.viewGlassDetail} />
				</div>
			</div>
		);
	}
}

export default Home;
