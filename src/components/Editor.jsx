import React from "react";
const axios = require("axios");
// var code = `print('hi')`;
const Editor = () => {
  // const [state, setState] = { input: "" };
  function getRequest(token) {
    let URL = `https://judge0-ce.p.rapidapi.com/submissions/${token}`;
    console.log(URL);
    const output = {
      method: "GET",
      url: URL,
      params: { base64_encoded: "false", fields: "*" },
      headers: {
        "X-RapidAPI-Key": "840dd45dd1msh5a16f401927ae02p1c1287jsn1104b88c0f95",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-Auth-Token": "840dd45dd1msh5a16f401927ae02p1c1287jsn1104b88c0f95",
      },
    };

    axios
      .request(output)
      .then(function (response) {
        console.log(response.data.stdout);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function submitbtn() {
    var source_code = document.querySelector(".code").value;

    console.log(source_code);

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "false", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "840dd45dd1msh5a16f401927ae02p1c1287jsn1104b88c0f95",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-Auth-Token": "840dd45dd1msh5a16f401927ae02p1c1287jsn1104b88c0f95",
      },
      data: {
        source_code: source_code,
        language_id: 71,
        stdin: "",
      },
    };

    axios
      .request(options)
      .then((response) => {
        var token = response.data;

        // token = JSON.parse(token);
        console.log(token.token);
        getRequest(token.token);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <textarea type="text" className="code"></textarea>
      <button onClick={submitbtn}>Submit</button>
    </div>
  );
};

export default Editor;
