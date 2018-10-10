import React from 'react';
import { reduxForm } from 'redux-form';

const BuilderHome = (props) => {
    const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="builder-home">
        <h2>Welcome to the Fantasy Character Creator</h2>
        <button type="submit" className="next">Let's Begin</button>
      </div>
      </form>
  ) 
}

export default reduxForm({
  form: 'builder',
  destroyOnUnmount: false,
})(BuilderHome);