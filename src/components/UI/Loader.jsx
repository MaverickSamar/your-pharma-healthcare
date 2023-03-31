import React from "react";
import { Dna } from "react-loader-spinner";
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <Dna
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
