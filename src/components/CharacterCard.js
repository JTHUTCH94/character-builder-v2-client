import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const CharacterCard = (props) => {

    const {  previousPage} = props;

    if(props.currentName === '' || props.currentRace === 'n/a' || props.currentVocation === 'n/a' || props.currentWeapon === 'n/a'){
        return(
            <div className="character-card">
            <h2>YOU MISSED A CHOICE!</h2>
            
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                
            </div>
            </div>
        )
    }
    else if(props.currentRace === "Human" && props.currentVocation === "Knight" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <img alt="Human Knight with a Sword Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/ba91c535-c742-11e8-9de2-05c229be960c.gif" />
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
        </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Knight" && props.currentWeapon === "Sword"){
    return (
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <img alt="Elf Knight with a Sword Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/8b4a1121-c74a-11e8-bec1-05c229be960c.gif" />
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Knight" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <img alt="Elf Knight with a Sword Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/55b75bd7-c74b-11e8-822b-05c229be960c.gif" />
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Cleric" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Cleric" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Cleric" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Barbarian" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Barbarian" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Barbarian" && props.currentWeapon === "Sword"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Knight" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Knight" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Knight" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Cleric" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Cleric" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Cleric" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Barbarian" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Barbarian" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Barbarian" && props.currentWeapon === "Mace"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Knight" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Knight" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Knight" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Cleric" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Cleric" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Cleric" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Human" && props.currentVocation === "Barbarian" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Elf" && props.currentVocation === "Barbarian" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
} else if(props.currentRace === "Orc" && props.currentVocation === "Barbarian" && props.currentWeapon === "Axe"){
    return(
        <div className="character-card">
            <p>Character Name: {props.currentName}</p>
            <p>Character Race: {props.currentRace}</p>
            <p>Character Vocation: {props.currentVocation}</p>
            <p>Character Weapon: {props.currentWeapon}</p>
            <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
    )
}
}

/*const mapStateToProps = (state) => ({
    currentName: state.currentName,
    currentRace: state.currentRace,
    currentVocation: state.currentVocation,
    currentWeapon: state.currentWeapon
});*/

export default CharacterCard;