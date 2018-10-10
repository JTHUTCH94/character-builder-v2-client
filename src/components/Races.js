import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Races = (props) => {
    const { handleSubmit, previousPage} = props;
    
    if(props.currentRace === 'n/a'){
    return (
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Race</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeRace(e)}  name="race" type="radio" value="Human" /> Human</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Elf" /> Elf</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Orc" /> Orc</label>
                </div>
                <p className="currentChoice">Current Race: {props.currentRace}</p>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentRace === "Human"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Race</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeRace(e)}  name="race" type="radio" value="Human" /> Human</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Elf" /> Elf</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Orc" /> Orc</label>
                </div>
                <div className="example">
                    <img alt="Human Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/af01f8ae-c108-11e8-8aa3-7f95efae01d1.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentRace === "Elf"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Race</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeRace(e)}  name="race" type="radio" value="Human" /> Human</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Elf" /> Elf</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Orc" /> Orc</label>
                </div>
                <div className="example">
                    <img alt="Elf Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/dbc904a3-c732-11e8-b54f-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentRace === "Orc"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Race</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeRace(e)}  name="race" type="radio" value="Human" /> Human</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Elf" /> Elf</label>
                    <label className="choice"><input onChange={e => props.changeRace(e)} name="race" type="radio" value="Orc" /> Orc</label>
                </div>
                <div className="example">
                    <img alt="Orc Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/bc61a7c5-c732-11e8-bc7a-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
                <div className="buttons">
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
})(Races);