import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store, mapStateToProps, mapDispatchToProps } from './Redux';
import { connect, Provider } from 'react-redux';

// React


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  printer() {
    console.log(1)
  }

  playSound(letter) {
    let soundElement = document.getElementById(letter);
    soundElement.currentTime = 0;
    let promise = soundElement.play()
    promise.then(_ => { }).catch(error => console.log(error));
  }

  render() {
    let letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    let buttons = letters.map( (letter, index) => {
      let sound = <audio src={`sounds/${letter}.mp3`} type="audio/mpeg" className="clip" id={letter}></audio>

      let button =
        <button type="button" className="drum-pad" id={`${letter}-button`} onClick={() => this.playSound(letter)}>
          {letter}
          {sound}
        </button>

      return (button)
    })
    return (
      <div className="App">
        <div id="drum-machine">
          

          <div id="button-grid">
            {buttons}
          </div>

          <div id="display">
          This is a test
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
