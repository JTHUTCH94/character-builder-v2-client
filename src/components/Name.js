import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const Name = (props) => {
    const { handleSubmit, previousPage } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="building-block">
                <label className="name-block-label">
                    Character Name</label>
                <input type="text" className="name-input" value={props.currentName} onInput={e => props.changeName(e)}>
                </input>

                <div className="buttons">
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next">Next</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'builder',  //Form name is same
    destroyOnUnmount: false,
})(Name);