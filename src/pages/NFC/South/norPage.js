function homeButton() {
  window.location.replace("/");
}

const NorPage = () => {
  return (
    <>
      <h1>
        NEWWWW ORLANDS? PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default NorPage;
