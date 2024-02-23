import React from "react";
import { useRouteError } from "react-router-dom";
import { GIF_404_IMG } from "../utils/constants";

function Error404Page() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops!!!</h1>

      <h3>{err.data}</h3>
      <h3>
        {err.status} {err.statusText}
      </h3>
      <img src={GIF_404_IMG} />
    </div>
  );
}

export default Error404Page;
