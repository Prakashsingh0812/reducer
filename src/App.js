import React, { useReducer } from 'react';
import './App.css';

// Initial state for the reducer
const initialState = {
  email: '',
  password: ''
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display submitted data
    console.log("Submitted Data: ", state);
  };

  return (
    <div className="App">
      <h1>useReducer Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
          />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </form>

      {/* Display form details */}
      <div className="details">
        {state.email === '' && state.password === '' ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
