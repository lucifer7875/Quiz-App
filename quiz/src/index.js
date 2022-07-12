import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import DashBoard from "./Components/Main Content/dashboard";
// import Setting from "./Components/Main Content/setting";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Route, Link as Router } from "react-router-dom";

// const routs = (
//   <BrowserRouter>
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/dashboard" component={<DashBoard />} />
//       <Route path="/setting" component={<Setting />} />
//       <Route path="*" element={<NotFound />} />
//     </div>
//   </BrowserRouter>
// );

// // ReactDOM.render(<App />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
