import React, { useState, useEffect } from 'react';


function homeButton() {
  window.location.replace("/");
}

const DalPage = () => {

  useEffect(() => {
    const response = fetch("/dal");

    const data = response.json();

    console.log(data);

  });


  return (
    <>
      <h1>
        DFW PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};




export default DalPage;
