(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(2),c=t.n(r),i=t(3),l=t(4),m=t(6),o=t(5),u=t(7);var g=function(e){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper blue darken-3"},n.a.createElement("a",{href:"/",className:"brand-logo center"},"Clicky Game!")))};var d=function(){return n.a.createElement("div",{className:"flow center"},n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("h3",null,"Click on an image to earn points, but don't click on any images more than once!"))};var k=function(e){return n.a.createElement("div",{className:"col s4",onClick:e.onClick},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{src:e.src,alt:e.alt}))))},p=function(e){return n.a.createElement("div",{className:"row",onClick:e.ClickHandler},e.images.map(function(a,t){return n.a.createElement(k,{key:e.images[t].name,src:e.images[t].src,alt:e.images[t].name,onClick:e.onClick})}))},f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).imageClickHandler=function(e){var a=t.state.images;a.forEach(function(a){if(a.name===e.target.alt)if(!0===a.isClicked)t.harrassPlayer(),t.resetGame();else{a.isClicked=!0;var s=t.state.currentScore+1;12===s?t.setState({isWon:!0,currentScore:0,topScore:12}):t.setState({currentScore:s})}}),a=t.shuffleImages(a),t.setState({images:a})},t.resetGame=function(){var e=t.resetisClicked(t.state.images);if(t.setState({images:e}),t.state.currentScore>t.state.topScore){var a=t.state.currentScore;t.setState({images:e,topScore:a,currentScore:0})}else t.setState({images:e,currentScore:0})},t.harrassPlayer=function(){alert("You Lose!")},t.resetisClicked=function(e){var a=e;return a.forEach(function(e){return e.isClicked=!1}),a},t.shuffleImages=function(e){for(var a=[],t=e.length;t>0;t--){var s=Math.floor(Math.random()*t);a.push(e.splice(s,1)[0])}return a},t.winClickHandler=function(){t.resetGame(),t.setState({isWon:!1})},t.displayImages=function(){return t.state.isWon?n.a.createElement("div",{className:"row"},n.a.createElement("h1",null,"YOU WIN!"),n.a.createElement("button",{className:"btn btn-medium",onClick:t.winClickHandler},"Play Again?")):n.a.createElement(p,{images:t.state.images,onClick:t.imageClickHandler})},t.state={currentScore:0,isWon:!1,topScore:0,images:[{src:"./assets/images/bart.png",isClicked:!1,name:"bart"},{src:"./assets/images/lisa.png",isClicked:!1,name:"lisa"},{src:"./assets/images/bob.jpg",isClicked:!1,name:"bob"},{src:"./assets/images/homer.jpg",isClicked:!1,name:"homer"},{src:"./assets/images/apu.jpg",isClicked:!1,name:"apu"},{src:"./assets/images/maggie.png",isClicked:!1,name:"maggie"},{src:"./assets/images/marge.png",isClicked:!1,name:"marge"},{src:"./assets/images/jeff.png",isClicked:!1,name:"jeff"},{src:"./assets/images/stu.png",isClicked:!1,name:"stu"},{src:"./assets/images/kent.jpg",isClicked:!1,name:"kent"},{src:"./assets/images/doris.jpg",isClicked:!1,name:"doris"},{src:"./assets/images/wiggum.jpg",isClicked:!1,name:"wiggum"}]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(d,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("p",null,"Current Score: ",this.state.currentScore),n.a.createElement("p",null,"Top Score: ",this.state.topScore)),n.a.createElement("div",{className:"row",value:this.state.isWon},this.displayImages())))}}]),a}(s.Component);c.a.render(n.a.createElement(f,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,2,1]]]);
//# sourceMappingURL=main.e5c0008a.chunk.js.map