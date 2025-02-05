import React from "react";
import axios from "axios";
import { useState } from "react";

const Api = () => {
  const [first, setfirst] = useState([]);

  async function Kunal() {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    setfirst(data);
  }
  return (
    <div>
      <button
        onClick={Kunal}
        className="px-4 py-2 bg-green-500 rounded-md my-2 "
      >
        Click Here
      </button>

      <div className="p-2 ">
        {first.map(function (elem, id) {
          return (
            <div key={id}>
              <img key={id} src={elem.download_url} alt="" className="m-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
