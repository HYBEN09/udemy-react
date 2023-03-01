export const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");
  return <p>{show ? "This is new!" : ""}</p>;
};
