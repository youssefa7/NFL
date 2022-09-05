function homeButton() {
  window.location.replace("/");
}

const HtxPage = () => {
  return (
  <>
    <h1>
      HOUSTON PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default HtxPage;
