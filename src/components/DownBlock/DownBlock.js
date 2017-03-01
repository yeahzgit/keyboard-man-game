import React from 'react';
require('./DownBlock.css');

class DownBlockComponent extends React.Component{
	constructor(props) {
		super(props);

		var str = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    var wordArr = [];

    for(let i = 0; i < 1000; i ++) {
      var char = str.substr(Math.floor(Math.random()*26), 1);
      var arr = {
      	value: char,
      	miss: true
      }
      wordArr.push(arr);
    }

		this.state = {
			started: false,
			wordArr: wordArr,
			fail: false
		}

		this.blockDown = this.blockDown.bind(this);
	}

	blockDown(v) {
		var self = this;
		var blockArr = [
			self.refs.block1,
			self.refs.block2,
			self.refs.block3,
			self.refs.block4
		]
		var i = 0;
		var index = 0;
		var top = [-50, -50, -50, -50];
		var initInterval = setInterval(function(){
			if(i < 4) {
				switch(i){
					case 3:
						var interval3 = setInterval(function(){
							if(top[3] <= -50){
								blockArr[3].value = self.state.wordArr[index]; 
								blockArr[3].textContent = blockArr[3].value.value;
								top[3] ++;
								index ++;
							}
							else if(top[3] > -50 && top[3] < 250){
								if(blockArr[3].value.value == String.fromCharCode(self.props.keyValue) && blockArr[3].value.miss){
									blockArr[3].value.miss = false;
									index ++;
								}
								if(!self.state.fail){
									top[3] ++;
									blockArr[3].style.top = top[3] + 'px';
								}	
							}
							else{
								if(blockArr[3].value.miss){
									self.setState({fail: true});
									alert('失败')
									clearInterval(interval3);
									clearInterval(interval2);
									clearInterval(interval1);
									clearInterval(interval0);
								}
								top[3] = -50;
							}
						}, v);
						break;
					case 2:
						var interval2 = setInterval(function(){
							if(top[2] <= -50){
								blockArr[2].value = self.state.wordArr[index]; 
								blockArr[2].textContent = blockArr[2].value.value;
								top[2] ++;
								index ++;
							}
							else if(top[2] > -50 && top[2] < 250){
								if(blockArr[2].value.value == String.fromCharCode(self.props.keyValue) && blockArr[2].value.miss){
									blockArr[2].value.miss = false;
									index ++;
								}
								if(!self.state.fail){
									top[2] ++;
									blockArr[2].style.top = top[2] + 'px';
								}	
							}
							else{
								if(blockArr[2].value.miss){
									self.setState({fail: true});
									alert('失败')
									clearInterval(interval3);
									clearInterval(interval2);
									clearInterval(interval1);
									clearInterval(interval0);
								}
								top[2] = -50;
							}
						}, v);
						break;
					case 1:
						var interval1 = setInterval(function(){
							if(top[1] <= -50){
								blockArr[1].value = self.state.wordArr[index]; 
								blockArr[1].textContent = blockArr[1].value.value;
								top[1] ++;
								index ++;
							}
							else if(top[1] > -50 && top[1] < 250){
								if(blockArr[1].value.value == String.fromCharCode(self.props.keyValue) && blockArr[1].value.miss){
									blockArr[1].value.miss = false;
									index ++;
								}
								if(!self.state.fail){
									top[1] ++;
									blockArr[1].style.top = top[1] + 'px';
								}	
							}
							else{
								if(blockArr[1].value.miss){
									self.setState({fail: true});
									alert('失败')
									clearInterval(interval3);
									clearInterval(interval2);
									clearInterval(interval1);
									clearInterval(interval0);
								}
								top[1] = -50;
							}
						}, v);
						break;
					case 0:
						var interval0 = setInterval(function(){
							if(top[0] <= -50){
								blockArr[0].value = self.state.wordArr[index]; 
								blockArr[0].textContent = blockArr[0].value.value;
								top[0] ++;
								index ++;
							}
							else if(top[0] > -50 && top[0] < 250){
								if(blockArr[0].value.value == String.fromCharCode(self.props.keyValue) && blockArr[0].value.miss){
									blockArr[0].value.miss = false;
									index ++;
								}
								if(!self.state.fail){
									top[0] ++;
									blockArr[0].style.top = top[0] + 'px';
								}	
							}
							else{
								if(blockArr[0].value.miss){
									self.setState({fail: true});
									alert('失败')
									clearInterval(interval3);
									clearInterval(interval2);
									clearInterval(interval1);
									clearInterval(interval0);
								}
								top[0] = -50;
							}
						}, v);
						break;		
				}
				i ++;	
			}
			else {
				clearInterval(initInterval);
			}
		}, 750)
	}

	componentWillReceiveProps(nextProps) {
		var self = this;
		if(nextProps.keyValue == 13 && !self.state.started){
			self.blockDown(10);
			self.setState({started: true});
		}
  }

	render() {
		return (
			<div className="down-block-box">
				<div className="down-block" id="down-block1">
					<div className="down-block-col">
						<div className="block" ref="block4"></div>
						<div className="block" ref="block3"></div>
						<div className="block" ref="block2"></div>
						<div className="block" ref="block1"></div>
					</div>
					<div className="down-block-col" id="down-block2"></div>
					<div className="down-block-col" id="down-block3"></div>
					<div className="down-block-col" id="down-block4"></div>
				</div>
			</div>
		);
	}
}

export default DownBlockComponent;
