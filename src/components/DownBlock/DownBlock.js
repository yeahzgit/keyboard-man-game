import React from 'react';
require('./DownBlock.css');

class DownBlockComponent extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="down-block-box">
				<div className="down-block">
					<div className="down-block-col"></div>
					<div className="down-block-col"></div>
					<div className="down-block-col"></div>
					<div className="down-block-col"></div>
				</div>
			</div>
			
		);
	}
}

export default DownBlockComponent;
