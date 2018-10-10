import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Weapons = (props) => {
    const { handleSubmit, previousPage, changeWeapon} = props;

    if(props.currentWeapon === "n/a"){
    return (
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Weapon</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeWeapon(e)}  name="weapon" type="radio" value="Sword" /> Sword</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Mace" /> Mace</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Axe" /> Axe</label>
                </div>
                <p className="currentChoice">Current Weapon: {props.currentWeapon}</p>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentWeapon === "Sword"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Weapon</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeWeapon(e)}  name="weapon" type="radio" value="Sword" /> Sword</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Mace" /> Mace</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Axe" /> Axe</label>
                </div>
                <div className="example">
                    <img alt="Sword Sprite" height='100px' width='100px' src="https://piskel-imgstore-b.appspot.com/img/e0fe204c-c734-11e8-9b9c-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentWeapon}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentWeapon === "Mace"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Weapon</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeWeapon(e)}  name="weapon" type="radio" value="Sword" /> Sword</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Mace" /> Mace</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Axe" /> Axe</label>
                </div>
                <div className="example">
                    <img alt="Mace Sprite" height='100px' width='100px' src="https://piskel-imgstore-b.appspot.com/img/ada7d923-c734-11e8-93f5-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentWeapon}</p>
                </div>                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentWeapon === "Axe"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Weapon</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeWeapon(e)}  name="weapon" type="radio" value="Sword" /> Sword</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Mace" /> Mace</label>
                    <label className="choice"><input onChange={e => props.changeWeapon(e)} name="weapon" type="radio" value="Axe" /> Axe</label>
                </div>
                <div className="example">
                    <img alt="Axe Sprite" height='100px' width='100px' src="https://piskel-imgstore-b.appspot.com/img/c589a7bd-c734-11e8-a406-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentWeapon}</p>
                </div>                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
}
}

export default reduxForm({
    form: 'builder',  //Form name is same
    destroyOnUnmount: false,
})(Weapons);