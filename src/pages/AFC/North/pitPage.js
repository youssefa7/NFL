function homeButton() {
  window.location.replace("/");
}

const PitPage = () => {
  return (
  <>
    <h1>
      Pitttysburgss PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default PitPage;
