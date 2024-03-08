const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hi from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/**
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1></h1>
 *     <h2></h2>
 *   </div>
 *    <div id="child2">
 *     <h1></h1>
 *     <h2></h2>
 *    </div>
 * </div>
 *
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 */
//Nested structure
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

console.log(parent);
const parent_root = ReactDOM.createRoot(document.getElementById("parent"));
parent_root.render(parent);
