
import { createStore, combineReducers } from 'redux';

// Redux

const POWER = 'POWER'
const SOUND = 'SOUND'
const availableLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const fccURLs = {
    Q: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', 
    W: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', 
    E: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', 
    A: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    S: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', 
    D: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', 
    Z: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', 
    X: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    C: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}

let powerReducer = (state = false, action) => {
    switch (action.type) {
        case POWER:
            console.log('REDUCING POWER');
            return action.enabled;
        default:
            return state;
    }
}

let soundReducer = (state = 1, action) => {
    switch (action.type) {
        case SOUND:
            console.log('REDUCING SOUND');
            return action.soundsNumber;
        default:
            return state;
    }
}

const togglePower = (enabled) => {
    return {
        type: POWER,
        enabled
    }
}

const toggleSound = (soundsNumber) => {
    return {
        type: SOUND,
        soundsNumber, 
    }
}

const rootReducer = combineReducers({
    power: powerReducer,
    sound: soundReducer
})

const store = createStore(rootReducer);

// React-Redux

const mapStateToProps = (state) => {
    return {
        currentState: state,
        availableLetters, 
        fccURLs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePower: (enabled) => {
            dispatch(togglePower(enabled))
        },
        toggleSound: (soundsNumber) => {
            dispatch(toggleSound(soundsNumber))
        }
    }
}

export { store, mapStateToProps, mapDispatchToProps }; 