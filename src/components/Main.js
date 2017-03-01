require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import DownBlock from './DownBlock/DownBlock'
import Keyboard from './Keyboard/Keyboard';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      keyValue: Number
    }
	}

  componentDidMount() {
    var self = this;
    window.addEventListener('keydown', function(e){
      self.setState({
        keyValue: e.which,
        header: String(e.which)
      });
      console.log(e.which)
    })
  }

  render() {
    let keyValue = this.state.keyValue;
    return (
    	<div>
        <DownBlock
        keyValue = {keyValue}
        />
	      <Keyboard
        keyValue = {keyValue}
	      />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
