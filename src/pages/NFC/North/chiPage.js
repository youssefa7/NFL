function homeButton() {
  window.location.replace("/");
}

const ChiPage = () => {
  return (
    <>
      <h1>
        CHICAGO PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default ChiPage;
