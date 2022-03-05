import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const labelText = 'Enter name: ';
  const buttonStyle = { backgroundColor: 'green', color: 'white' };
  const buttonText = 'Submit';

  return (
    <div style={{ border: '1px solid green', paddingLeft: '10px' }}>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
