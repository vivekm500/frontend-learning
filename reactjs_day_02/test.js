function test() {
  return "I am Test";
}

export default test;

export const circle = () => {
  return React.createElement("div", { id: "circle" }, "THIS IS CIRCLE");
};