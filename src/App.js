import logo from "./logo.svg";

import React from "react";

import "./App.css";

import Layout from "./components/layout";

function App() {
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
    </div>
  );
}

export default App;
