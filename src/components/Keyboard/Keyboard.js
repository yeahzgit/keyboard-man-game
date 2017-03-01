import React from 'react';
require('./Keyboard.css');

class KeyboardComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(nextProps) {
		var self = this;
		for(let i = 0; i < 26; i ++){
			if(self.state.keyArr[i].value == nextProps.keyValue){
				self.state.keyArr[i].key.style.background = "#34495e";
				var temp = i;
				setTimeout(function(){
					self.state.keyArr[temp].key.style.background = "#bdc3c7";
				}, 100)
			}
		}
  }
  componentDidMount() {
  	var self = this;
		var keyArr = [
			{value: 81, key: self.refs.key1},
			{value: 87, key: self.refs.key2},
			{value: 69, key: self.refs.key3},
			{value: 82, key: self.refs.key4},
			{value: 84, key: self.refs.key5},
			{value: 89, key: self.refs.key6},
			{value: 85, key: self.refs.key7},
			{value: 73, key: self.refs.key8},
			{value: 79, key: self.refs.key9},
			{value: 80, key: self.refs.key10},
			{value: 65, key: self.refs.key11},
			{value: 83, key: self.refs.key12},
			{value: 68, key: self.refs.key13},
			{value: 70, key: self.refs.key14},
			{value: 71, key: self.refs.key15},
			{value: 72, key: self.refs.key16},
			{value: 74, key: self.refs.key17},
			{value: 75, key: self.refs.key18},
			{value: 76, key: self.refs.key19},
			{value: 90, key: self.refs.key20},
			{value: 88, key: self.refs.key21},
			{value: 67, key: self.refs.key22},
			{value: 86, key: self.refs.key23},
			{value: 66, key: self.refs.key24},
			{value: 78, key: self.refs.key25},
			{value: 77, key: self.refs.key26}
		];
		self.setState({
			keyArr: keyArr
		})
	}
	render() {
		return (
			<div className="keyboard-box">
				<div className="keyboard">
					<div className="box"><div className="tilde board"> <span>`</span> <span>~</span> </div></div>
					<div className="box"><div className="one board">   <span>1</span> <span>!</span> </div></div>
					<div className="box"><div className="two board">   <span>2</span> <span>@</span> </div></div>
					<div className="box"><div className="three board"> <span>3</span> <span>#</span> </div></div>
					<div className="box"><div className="four board">  <span>4</span> <span>$</span> </div></div>
					<div className="box"><div className="five board">  <span>5</span> <span>%</span> </div></div>
					<div className="box"><div className="six board">   <span>6</span> <span>^</span> </div></div>
					<div className="box"><div className="seven board"> <span>7</span> <span>&</span> </div></div>
					<div className="box"><div className="eight board"> <span>8</span> <span>*</span> </div></div>
					<div className="box"><div className="nine board">  <span>9</span> <span>(</span> </div></div>
					<div className="box"><div className="zero board">  <span>0</span> <span>)</span> </div></div>
					<div className="box"><div className="minus board"> <span>_</span> <span>-</span> </div></div>
					<div className="box"><div className="equal board"> <span>+</span> <span>=</span> </div></div>
					<div className="box"><div className="backspace board" id="backspace">BACKSPACE   </div></div>

					<div className="box"><div className="tab board" id="tab">TAB</div></div>
					<div className="box"><div className="q board" ref="key1">Q</div>             </div>
					<div className="box"><div className="w board" ref="key2">W</div>             </div>
					<div className="box"><div className="e board" ref="key3">E</div>             </div>
					<div className="box"><div className="r board" ref="key4">R</div>             </div>
					<div className="box"><div className="t board" ref="key5">T</div>             </div>
					<div className="box"><div className="y board" ref="key6">Y</div>             </div>
					<div className="box"><div className="u board" ref="key7">U</div>							</div>
					<div className="box"><div className="i board" ref="key8">I</div>							</div>
					<div className="box"><div className="o board" ref="key9">O</div>							</div>
					<div className="box"><div className="p board" ref="key10">P</div>							</div>
					<div className="box"><div className="bracket-left board">             <span>[</span> <span>[</span> </div></div>
					<div className="box"><div className="bracket-right board">            <span>]</span> <span>]</span> </div></div>
					<div className="box"><div className="backslash board" id="backslash"> <span>|</span> <span>\</span> </div></div>

					<div className="box"><div className="caps-lock board" id="caps-lock">CAPSLOCK</div></div>
					<div className="box"><div className="a board" ref="key11">A</div>                              </div>
					<div className="box"><div className="s board" ref="key12">S</div>                              </div>
					<div className="box"><div className="d board" ref="key13">D</div>                              </div>
					<div className="box"><div className="f board" ref="key14">F</div>                              </div>
					<div className="box"><div className="g board" ref="key15">G</div>                              </div>
					<div className="box"><div className="h board" ref="key16">H</div>                              </div>
					<div className="box"><div className="j board" ref="key17">J</div>                              </div>
					<div className="box"><div className="k board" ref="key18">K</div>                              </div>
					<div className="box"><div className="l board" ref="key19">L</div>                              </div>
					<div className="box"><div className=" board"> <span>:</span> <span>;</span> </div> </div>
					<div className="box"><div className=" board"> <span>"</span> <span>'</span> </div> </div>
					<div className="box"><div className="enter board" id="enter">ENTER</div>           </div>

					<div className="box"><div className="shift board" id="shift">SHIFT</div></div>
					<div className="box"><div className="z board" ref="key20">Z</div>                   </div>
					<div className="box"><div className="x board" ref="key21">X</div>                   </div>
					<div className="box"><div className="c board" ref="key22">C</div>                   </div>
					<div className="box"><div className="v board" ref="key23">V</div>                   </div>
					<div className="box"><div className="b board" ref="key24">B</div>             			</div>
					<div className="box"><div className="n board" ref="key25">N</div>             			</div>
					<div className="box"><div className="m board" ref="key26">M</div>             			</div>
					<div className="box"><div className=" board">       <span>,</span> <span>,</span> </div></div>
					<div className="box"><div className=" board"> <span>.</span> <span>.</span> </div></div>
					<div className="box"><div className=" board"> <span>?</span> <span>/</span> </div></div>
					<div className="box"><div className="shift board" id="shift">SHIFT</div></div>

					<div className="box"><div className="ctrl board" id="ctrl">CTRL</div>                       </div>
					<div className="box" id="alt-left-box"><div className="alt board"  id="alt-left">ALT</div>  </div>
					<div className="box"><div className="space board"id="space">SPACE</div>  </div>
					<div className="box" id="alt-right-box"><div className="alt board"  id="alt-right">ALT</div></div>
					<div className="box"><div className="ctrl board" id="ctrl">CTRL</div>                       </div>
				</div>
			</div>
		);
	}
}

export default KeyboardComponent;