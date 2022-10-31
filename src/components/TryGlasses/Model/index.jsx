import React, { Component, Fragment } from 'react';

class Model extends Component {
	renderContentModel = ({ name, url, desc }) => {
		return (
			<div className='model-info'>
				<img className='model-thumbnail' src={url} alt={name} />
				<div className='content-right'>
					<h1 className='model-title text-primary'>{name}</h1>
					<p className='model-desc text-white'>{desc}</p>
				</div>
			</div>
		);
	};
	render() {
		return (
			<Fragment>
				<div className='d-flex' style={{ gap: 300 }}>
					<div
						className='model-left mt-4'
						style={{ backgroundImage: "url('./glassesImage/model.jpg')" }}
					>
						<div className='model-info'>
							<img
								className='model-thumbnail'
								src='./glassesImage/v1.png'
								alt=''
							/>
							<div className='content'>
								<h1 className='model-title text-primary'>GUCCI G8850U</h1>
								<p className='model-desc text-white'>
									Light pink square lenses define these sunglasses, ending with
									amother of pearl effect tip.{' '}
								</p>
							</div>
						</div>
					</div>
					<div
						className='model-right mt-4'
						style={{ backgroundImage: "url('./glassesImage/model.jpg')" }}
					>
						{this.renderContentModel(this.props.glassInfo)}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Model;
