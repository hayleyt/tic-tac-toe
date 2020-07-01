(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),l=a.n(s),c=a(1),o=a(2),i=a(4),u=a(3);var m=function(e){return n.a.createElement("button",{className:"X"===e.value?"square x-mark":"O"===e.value?"square o-mark":"square",onClick:e.onClick,onChange:e.onChange},e.value)},h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},onChange:function(){return t.props.onChange}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component),p=a(7);var d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(p.a)(t[a],3),n=r[0],s=r[1],l=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[l])return e[n]}return null};var y=function(e){var t=e.data,a=t.history,r=t.stepNumber,s=t.isOnePlayer,l=a[r],c=d(l.squares),o="";return c?o=s?"O"===c?"Computer Wins!":"You Win!":c+" Wins!":9===r&&null===c&&(o="Draw!"),n.a.createElement("div",{className:"winner"},n.a.createElement("h1",null,o))};var v=function(e){var t=e.data,a=t.xIsNext,r=a?"move x-move":"move o-move",s=t.isOnePlayer?"":(a?"X":"O")+" move";return n.a.createElement("div",{className:r},s)},N=(a(13),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={history:[{squares:Array(9).fill(null)}],squares:[],stepNumber:0,xIsNext:!0,isOnePlayer:!0},e.handleClick=function(t){var a=e.state,r=a.xIsNext,n=a.isOnePlayer,s=a.stepNumber,l=e.state.history.slice(0,s+1),c=l[l.length-1].squares.slice();d(c)||c[t]||(n?(c[t]="X",e.setState({history:l.concat([{squares:c}]),stepNumber:l.length,xIsNext:!1})):(c[t]=r?"X":"O",e.setState({history:l.concat([{squares:c}]),stepNumber:l.length,xIsNext:!r})))},e.handleChange=function(){var t=e.state,a=t.xIsNext,r=t.isOnePlayer,n=t.stepNumber;!1===r||9===n||a||setTimeout((function(){e.computerPlaysTurn()}),400)},e.computerPlaysTurn=function(){var t=e.state.history.slice(0,e.state.stepNumber+1),a=t[t.length-1],r=a.squares.slice();console.log(a);var n=Math.floor(9*Math.random());if(r.includes(null))for(;null!=r[n];)n=Math.floor(9*Math.random());d(r)||(r[n]="O"),e.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!0})},e.newGame=function(){e.setState({history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isOnePlayer:!0})},e.handleTimeTravel=function(){var t=e.state,a=t.stepNumber,r=a-1>0?a-1:0,n=a-2>1?a-2:0;t.isOnePlayer?9===a?e.jumpTo(r):e.jumpTo(n):e.jumpTo(r)},e.jumpTo=function(t){var a=e.state.history.splice().pop();console.log(a),e.state.isOnePlayer?e.setState({stepNumber:t,xIsNext:!0}):e.setState({stepNumber:t,xIsNext:t%2===0})},e.handlePlayers=function(t){var a=1===e.state.history.length;a&&"one-player"===t.target.name?e.setState({isOnePlayer:!0}):a&&"two-player"===t.target.name?e.setState({isOnePlayer:!1}):a||"two-player"!==t.target.name?(e.newGame(),e.setState({isOnePlayer:!0})):(e.newGame(),e.setState({isOnePlayer:!1}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.history,r=t.stepNumber,s=t.isOnePlayer?null:n.a.createElement(v,{data:this.state});return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"left-strip"}),n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Let's play"),n.a.createElement("h1",null,"Tic Tac Toe"),n.a.createElement("div",{className:"header-buttons"},n.a.createElement("div",{className:"player-buttons"},n.a.createElement("button",{name:"one-player",onClick:this.handlePlayers,className:this.state.isOnePlayer?"selected":""},"Play the computer"),n.a.createElement("button",{name:"two-player",onClick:this.handlePlayers,className:this.state.isOnePlayer?"":"selected"},"2 Players")),n.a.createElement("button",{className:"new-game",onClick:this.newGame},"Start New Game")))," ",n.a.createElement(y,{data:this.state}),n.a.createElement(h,{squares:a[r].squares,onClick:function(t){return e.handleClick(t)},onChange:this.handleChange()}),n.a.createElement("div",{className:"controls"},s,n.a.createElement("div",{className:"space"}),n.a.createElement("button",{className:"step-back",name:"back",onClick:this.handleTimeTravel},"shh...cheat!")),n.a.createElement("footer",null,n.a.createElement("p",null,"made with ","<","3 by Hayley Tong")))}}]),a}(n.a.Component));l.a.render(n.a.createElement(N,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.370c87b0.chunk.js.map