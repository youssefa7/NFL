function homeButton() {
  window.location.replace("/");
}

const CltPage = () => {
  return (
  <>
    <h1>
      INIDANA PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default CltPage;
