import { useState } from "react";
import { v4 as uuid } from "uuid";

function useAxios(url) {
  const [state, setState] = useState([]);
  function update(e, suffix = "") {
    fetch(`${url}/${suffix}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState((state) => [...state, { data, id: uuid() }]);
      });
  }
  return [state, update];
}

export default useAxios;
