function homeButton() {
  window.location.replace("/");
}

const SeaPage = () => {
  return (
  <>
    <h1>
      Seaaaatle PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default SeaPage;
