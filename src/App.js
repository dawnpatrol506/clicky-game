import React, { Component } from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Board from './components/Board';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentScore: 0,
      isWon: false,
      topScore: 0,
      images: [
        {
          src: './assets/images/bart.png',
          isClicked: false,
          name: 'bart'
        },
        {
          src: './assets/images/lisa.png',
          isClicked: false,
          name: 'lisa'
        },
        {
          src: './assets/images/bob.jpg',
          isClicked: false,
          name: 'bob'
        },
        {
          src: './assets/images/homer.jpg',
          isClicked: false,
          name: 'homer'
        },
        {
          src: './assets/images/apu.jpg',
          isClicked: false,
          name: 'apu'
        },
        {
          src: './assets/images/maggie.png',
          isClicked: false,
          name: 'maggie'
        },
        {
          src: './assets/images/marge.png',
          isClicked: false,
          name: 'marge'
        },
        {
          src: './assets/images/jeff.png',
          isClicked: false,
          name: 'jeff'
        },
        {
          src: './assets/images/stu.png',
          isClicked: false,
          name: 'stu'
        },
        {
          src: './assets/images/kent.jpg',
          isClicked: false,
          name: 'kent'
        },
        {
          src: './assets/images/doris.jpg',
          isClicked: false,
          name: 'doris'
        },
        {
          src: './assets/images/wiggum.jpg',
          isClicked: false,
          name: 'wiggum'
        }


      ]
    };
  }

  imageClickHandler = (event) => {
    let newImages = this.state.images;
    newImages.forEach(image => {
      if(image.name === event.target.alt){
        if(image.isClicked === true){
          this.harrassPlayer();
          this.resetGame();
        }
        else{
          image.isClicked = true;
          let plusOne = this.state.currentScore + 1;
          if(plusOne === 12){
            this.setState({
              isWon: true,
              currentScore: 0,
              topScore: 12
            })
          }
          else{
            this.setState({currentScore: plusOne});
          }
        }
      }
    })
    newImages = this.shuffleImages(newImages);
    this.setState({images: newImages});
  }

  resetGame = () => {
    let newImages = this.resetisClicked(this.state.images);
    this.setState({images: newImages});

    if(this.state.currentScore > this.state.topScore){
      let topScore = this.state.currentScore;
      this.setState({
        images: newImages,
        topScore: topScore,
        currentScore: 0
      })
    }
    else{
      this.setState({
        images: newImages,
        currentScore: 0
      })
    }
  } 

  harrassPlayer = () => {
    alert('You Lose!')
  }

  resetisClicked = (images) => {
    let newImages = images;
    newImages.forEach(image => image.isClicked = false);
    return newImages;
  }

  shuffleImages = function(images){
    let newImages = [];
    for(let i = images.length; i > 0; i--){
    let rando = Math.floor(Math.random() * i);
    newImages.push(images.splice(rando, 1)[0]);}
    return newImages;
  }

  winClickHandler = () =>{
    this.resetGame();
    this.setState({isWon: false})
  }

  displayImages = () => {
    if(!this.state.isWon){
      return(
        <Board images={this.state.images} onClick={this.imageClickHandler} />
      )
    }
    else{
      return(
        <div className="row">
        <h1>YOU WIN!</h1>
        <button className="btn btn-medium" onClick={this.winClickHandler}>Play Again?</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <div className="container">
          <div className="row">
            <p>Current Score: {this.state.currentScore}</p>
            <p>Top Score: {this.state.topScore}</p>
          </div>
          <div className="row" value={this.state.isWon}>
            {this.displayImages()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
