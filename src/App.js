import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store, mapStateToProps, mapDispatchToProps } from './Redux';
import { connect, Provider } from 'react-redux';

// React


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedSound: ""
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSound(letter) {
    // safely exit if letter is not found
    if (this.props.availableLetters.includes(letter) == false) { return }; 

    let soundElement = document.getElementById(letter);
    soundElement.currentTime = 0;
    let promise = soundElement.play()
    promise.then(_ => { }).catch(error => console.log(error));

    let name = this.getNameFrom(letter);
    this.setState({
      displayedSound: name
    })
  }

  getNameFrom(letter) {
    switch (letter) {
      case 'Q': return 'Quazar';
      case 'W': return 'Whirlwind';
      case 'E': return 'Ender';
      case 'A': return 'Asylum';
      case 'S': return 'Slalem';
      case 'D': return 'Dominion';
      case 'Z': return 'Zoardo';
      case 'X': return 'Xylo';
      case 'C': return 'Cylus';
      default: return 'Uknown';
    }
  }

  getURLFrom(letter) {
    return this.props.fccURLs[letter]; 
  }

  generateButtons() {
    let buttons = this.props.availableLetters.map((letter, index) => {
      let fccURL = this.getURLFrom(letter);
      let localURL = `sounds/${letter}.mp3`
      let sound = <audio src={localURL} type="audio/mpeg" className="clip" id={letter}></audio>
      let button =
        <button type="button" className="drum-pad" id={`${letter}-button`} onClick={() => this.playSound(letter)}>
          {letter}
          {sound}
        </button>
      return (button)
    })
    return buttons;
  }

  handleKeyPress(event) {

    let letter = event.key.toUpperCase();
    this.playSound(letter);
  }

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyPress}>
        <div id="drum-machine">

          <div id="button-grid">
            {this.generateButtons()}
          </div>

          <div id="display">
            {this.state.displayedSound}
          </div>
        </div>
      </div>
    )
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Wrapper);

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
