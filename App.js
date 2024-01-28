const parent = [
  React.createElement(
    "div",
    { id: "Parent" },
    React.createElement(
      "div",
      {
        id: "Child",
      },
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]
    )
  ),
  React.createElement(
    "div",
    { id: "Parent2" },
    React.createElement(
      "div",
      {
        id: "Child2",
      },
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]
    )
  ),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
