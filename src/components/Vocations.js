import React from 'react';
import { reduxForm } from 'redux-form';

const Vocations = (props) => {
    const { handleSubmit, previousPage} = props;

    if(props.currentVocation === "n/a"){
    return (
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Vocation</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeVocation(e)}  name="vocation" type="radio" value="Knight" /> Knight</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Cleric" /> Cleric</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Barbarian" /> Barbarian</label>
                </div>
                <p className="currentChoice">Current Vocation: {props.currentVocation}</p>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next" onClick={e => console.log("Current Vocation: " + props.currentVocation)}>Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentVocation === "Knight"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Vocation</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeVocation(e)}  name="vocation" type="radio" value="Knight" /> Knight</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Cleric" /> Cleric</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Barbarian" /> Barbarian</label>
                </div>
                <div className="example">
                    <img alt="Knight's Helmet Sprite" height='100px' width='80px' src="https://piskel-imgstore-b.appspot.com/img/d74ea8b0-c733-11e8-af5c-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentVocation}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next" onClick={e => console.log("Current Vocation: " + props.currentVocation)}>Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentVocation === "Cleric"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Vocation</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeVocation(e)}  name="vocation" type="radio" value="Knight" /> Knight</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Cleric" /> Cleric</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Barbarian" /> Barbarian</label>
                </div>
                <div className="example">
                    <img alt="Cleric's Cross Sprite" height='100px' width='80px' src="https://piskel-imgstore-b.appspot.com/img/ed834199-c733-11e8-aa05-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentVocation}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next" onClick={e => console.log("Current Vocation: " + props.currentVocation)}>Next</button>
            </div>
            </div>
        </form>
    )
} else if(props.currentVocation === "Barbarian"){
    return(
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="building-block-label">Character Vocation</label>
                <div className="choices">
                    <label className="choice"><input onChange={e => props.changeVocation(e)}  name="vocation" type="radio" value="Knight" /> Knight</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Cleric" /> Cleric</label>
                    <label className="choice"><input onChange={e => props.changeVocation(e)} name="vocation" type="radio" value="Barbarian" /> Barbarian</label>
                </div>
                <div className="example">
                    <img alt="Barbarian's Skull Sprite" height='100px' width='80px' src="https://piskel-imgstore-b.appspot.com/img/f8527366-c733-11e8-af0e-39a1e789a81c.gif" />
                    <p className="currentChoice">Current Choice: {props.currentVocation}</p>
                </div>
                <div className="buttons">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next" onClick={e => console.log("Current Vocation: " + props.currentVocation)}>Next</button>
            </div>
            </div>
        </form>
    )
}
}

export default reduxForm({
    form: 'builder',  //Form name is same
    destroyOnUnmount: false,
})(Vocations);