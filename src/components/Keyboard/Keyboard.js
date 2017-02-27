import React from 'react';
require('./Keyboard.css');

class KeyboardComponent extends React.Component {
	constructor(props) {
		super(props);
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
					<div className="box"><div className="q board">Q</div>             </div>
					<div className="box"><div className="w board">W</div>             </div>
					<div className="box"><div className="e board">E</div>             </div>
					<div className="box"><div className="r board">R</div>             </div>
					<div className="box"><div className="t board">T</div>             </div>
					<div className="box"><div className="y board">Y</div>             </div>
					<div className="box"><div className="u board">U</div>							</div>
					<div className="box"><div className="i board">I</div>							</div>
					<div className="box"><div className="o board">O</div>							</div>
					<div className="box"><div className="p board">P</div>							</div>
					<div className="box"><div className="bracket-left board">             <span>[</span> <span>[</span> </div></div>
					<div className="box"><div className="bracket-right board">            <span>]</span> <span>]</span> </div></div>
					<div className="box"><div className="backslash board" id="backslash"> <span>|</span> <span>\</span> </div></div>

					<div className="box"><div className="caps-lock board" id="caps-lock">CAPSLOCK</div></div>
					<div className="box"><div className="a board">A</div>                              </div>
					<div className="box"><div className="s board">S</div>                              </div>
					<div className="box"><div className="d board">D</div>                              </div>
					<div className="box"><div className="f board">F</div>                              </div>
					<div className="box"><div className="g board">G</div>                              </div>
					<div className="box"><div className="h board">H</div>                              </div>
					<div className="box"><div className="j board">J</div>                              </div>
					<div className="box"><div className="k board">K</div>                              </div>
					<div className="box"><div className="l board">L</div>                              </div>
					<div className="box"><div className=" board"> <span>:</span> <span>;</span> </div> </div>
					<div className="box"><div className=" board"> <span>"</span> <span>'</span> </div> </div>
					<div className="box"><div className="enter board" id="enter">ENTER</div>           </div>

					<div className="box"><div className="shift board" id="shift">SHIFT</div></div>
					<div className="box"><div className="z board">Z</div>                   </div>
					<div className="box"><div className="x board">X</div>                   </div>
					<div className="box"><div className="c board">C</div>                   </div>
					<div className="box"><div className="v board">V</div>                   </div>
					<div className="box"><div className="b board">B</div>             			</div>
					<div className="box"><div className="n board">N</div>             			</div>
					<div className="box"><div className="m board">M</div>             			</div>
					<div className="box"><div className=" board">       <span>,</span> <span>,</span> </div></div>
					<div className="box"><div className=" board"> <span>.</span> <span>.</span> </div></div>
					<div className="box"><div className=" board"> <span>?</span> <span>/</span> </div></div>
					<div className="box"><div className="shift board" id="shift">SHIFT</div></div>

					<div className="box"><div className="ctrl board" id="ctrl">CTRL</div>    </div>
					<div className="box" id="alt-left-box"><div className="alt board"  id="alt-left">ALT</div> </div>
					<div className="box"><div className="space board"id="space">SPACE</div>  </div>
					<div className="box" id="alt-right-box"><div className="alt board"  id="alt-right">ALT</div></div>
					<div className="box"><div className="ctrl board" id="ctrl">CTRL</div>    </div>
				</div>
			</div>
		);
	}
}

export default KeyboardComponent;