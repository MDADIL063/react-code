import React from "react";
import { useRouteError } from "react-router-dom";
import { GIF_404_IMG } from "../utils/constants";

function Error404Page() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="justify-center">
      <h1 className="text-center mt-8 text-2xl font-semibold">Oops!!!</h1>

      <h3 className="text-center my-2   text-xl">{err.data}</h3>
      <h3 className="text-center my-2 text-xl">
        {err.status} {err.statusText}
      </h3>
      <img className="ml-[510px] w-[300px] mt-20" src={GIF_404_IMG} />
    </div>
  );
}

export default Error404Page;
