import logo from "./logo.svg";

import React, { useState, useEffect } from "react";

import "./App.css";
import Layout from "./functionComponent/components/layout";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // return <div className="adad">Hello world!</div>; class => className
  // return <input />; thẻ đóng

  // Props
  // function Item(props) {
  //   const { title, placeholder } = props;

  //   return (
  //     <>
  //       <label>{title}</label>
  //       <input placeholder={placeholder} />
  //     </>
  //   );
  // }

  // children

  function Button({ children }) {
    console.log(children);
    return <button>{children}</button>;
  }

  function handleCount() {
    setCount(count + 1);
  }

  function handleCount1() {
    setCount1(count1 + 1);
  }

  // useEffect(() => {
  //   console.log("componentDidMount");
  // }, []);

  // useEffect(() => {
  //   console.log("rerender count1");
  // }, [count1]);

  // componentDidMount

  return (
    <div>
      {/* <React.Fragment></React.Fragment> thẻ vô danh */}

      {/* <Item title="Name" placeholder="Enter Name" />
      <Item title="Gender" placeholder="Enter Gender" /> */}

      {/* <Button name="Click" /> */}

      {/* <Button >
      </Button> */}

      {/* <></>  thẻ vô danh */}

      <Layout />

      {/* <h1>{count}</h1>

      <button onClick={handleCount}>Click</button>

      <h1>{count1}</h1>

      <button onClick={handleCount1}>Click1</button> */}
    </div>
  );
}

export default App;
