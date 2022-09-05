function homeButton() {
  window.location.replace("/");
}

const ClePage = () => {
  return (
  <>
    <h1>
      Clevlandd PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default ClePage;
