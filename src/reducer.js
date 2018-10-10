import { SET_NAME, SET_RACE, SET_VOCATION, SET_WEAPON, CREATE_CHARACTER } from './actions';


const initialState = {
    page: 1,
    characters: [],
    currentName: 'n/a',
    currentRace: 'n/a',
    currentVocation: 'n/a',
    currentWeapon: 'n/a'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME:
        return Object.assign({}, state, {
            currentName: action.currentName
        });
        case SET_RACE:
        return Object.assign({}, state, {
            currentRace: action.currentRace
        });
        case SET_VOCATION:
        return Object.assign({}, state, {
            currentVocation: action.currentVocation
        });
        case SET_WEAPON: 
        return Object.assign({}, state, {
            currentWeapon: action.currentWeapon
        });
        case CREATE_CHARACTER:
        return Object.assign({}, state, {
            currentDisplay: 'new-character',
            currentName: action.newCharacter.currentName,
            currentRace: action.newCharacter.currentRace,
            currentVocation: action.newCharacter.currentVocation,
            currentWeapon: action.newCharacter.currentWeapon
        });
        default:
            return state;
    }
};