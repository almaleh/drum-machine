
import { createStore, combineReducers } from 'redux';

// Redux

const POWER = 'POWER'
const SOUND = 'SOUND'

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
        soundsNumber
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
        currentState: state
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