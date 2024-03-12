import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import "./index.css";


import Question1App from "./question1/App";
import Question2App from "./question2/App";
import Question3App from "./question3/App";
import Question4App from "./question4/App";
import Question5App from "./question5/App";
import Question6App from "./question6/App";
import store from "./question6/store"; 


// Så vi kan visa 1 i taget

function MainApp() {
  return (
    <React.StrictMode>
      <Provider store={store}> {}
        <Question1App />  {}
        {/* <Question2App /> */}
        {/* <Question3App /> */}
        {/* <Question4App /> */}
        {/* <Question5App /> */}
        {/* <Question6App /> */}
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);