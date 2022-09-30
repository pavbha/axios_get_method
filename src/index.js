import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((post, id) => {
        return (
          // <card >
          <div
            key={id}
            style={{
              border: "2px solid black",
              margin: "3px",
              background: "#E6E6E6"
            }}
          >
            <h2 style={{ marginLeft: "10px" }}> {post.title}</h2>

            <p style={{ marginLeft: "30px", color: "purple" }}>{post.body}</p>
          </div>
          // </card>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
