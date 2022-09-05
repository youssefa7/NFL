function homeButton() {
  window.location.replace("/");
}

const RamPage = () => {
  return (
  <>
    <h1>
      LOSANGLES rams PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default RamPage;
