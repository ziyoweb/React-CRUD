import React from "react";
import ReactDOM from "react-dom/client";
import Fruits from "./Fruits.jsx";
import "./index.css";
import Student from "./Student.jsx";

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  { id: 2, name: "Limon" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Student title="Sunnat">
      <h3>Hey there Muhriddin</h3>
    </Student>
    <Fruits />
  </React.StrictMode>
);
