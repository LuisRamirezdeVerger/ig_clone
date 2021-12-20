import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [loading, setLoading] = useState(false);

  // const handler = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://picsum.photos/200/300");
  //     console.log(response);
  //     if (response.status !== 200) {
  //       throw new Error("Something went wrong fetching");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // setLoading(false);
  // useEffect(() => {
  //   handler();
  // });

  return (
    <>
      <div className="App">
        <nav>
          <button>INSTAGRAM HOMEPAGE</button>
        </nav>
        <nav className="icons">
          <button>HOME</button>
          <button>DM'S</button>
          <button>ADD</button>
          <button>FIND</button>
          <button>FEED</button>
          <button>PROFILE</button>
        </nav>
      </div>
      <div className="imgs">
        <img src="https://picsum.photos/200/300" alt="fetch" />
        <img src="https://picsum.photos/200/300" alt="fetch1" />
        <img src="https://picsum.photos/200/300" alt="fetch2" />
      </div>
      <div className="boxContent">PLACEHOLDER</div>
    </>
  );
}

export default App;
