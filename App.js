import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I Am a h1 Tag"),
    React.createElement("h3", {}, "I Am a h3 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I Am a h1 Tag"),
    React.createElement("h3", {}, "I Am a h3 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
