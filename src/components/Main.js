require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import DownBlock from './DownBlock/DownBlock'
import Keyboard from './Keyboard/Keyboard';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
    	<div>
        <DownBlock
        />
	      <Keyboard
	      />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
