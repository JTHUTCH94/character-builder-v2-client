const API_URL = "http://localhost:8080";

export const SET_NAME = 'SET_NAME';
export const setName = (currentName) => ({
    type: SET_NAME,
    currentName
});

export const SET_RACE = 'SET_RACE';
export const setRace = (currentRace) => ({
    type: SET_RACE,
    currentRace
});

export const SET_VOCATION = 'SET_VOCATION';
export const setVocation = (currentVocation) => ({
    type: SET_VOCATION,
    currentVocation
});

export const SET_WEAPON = 'SET_WEAPON';
export const setWeapon = (currentWeapon) => ({
    type: SET_WEAPON,
    currentWeapon
});

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (newCharacter) => ({
    type: CREATE_CHARACTER,
    newCharacter
});

export const createCharacterAction = (e) => dispatch => {
    return fetch(API_URL + '/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": e.target.name.value,
            "race": e.target.race.value,
            "vocation": e.target.vocation.value,
            "weapon": e.target.weapon.value
        })
    })
        .then(res => res.json())
        .then(res => dispatch(createCharacter(res)))
};