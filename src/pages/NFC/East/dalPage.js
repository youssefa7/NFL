function homeButton() {
  window.location.replace("/");
}

const DalPage = () => {

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
