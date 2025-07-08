import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div className="loader">
        <TailSpin
          height="40"
          width="40"
          color="#134B70"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    </>
  );
};

export default Spinner;
