import React, { Component } from 'react';
import GlassesItem from '../GlassesItem';

class Glasses extends Component {
	renderGlasses = () => {
		return this.props.listGlasses.map((glass, idx) => {
			return (
				<div className='col-2' key={idx}>
					<GlassesItem glass={glass} viewDetail={this.props.viewDetail} />
				</div>
			);
		});
	};
	render() {
		return (
			<div className='glasses mt-4'>
				<div className='row'>{this.renderGlasses()}</div>
			</div>
		);
	}
}

export default Glasses;
