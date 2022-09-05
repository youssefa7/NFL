function homeButton() {
  window.location.replace("/");
}

const TamPage = () => {
  return (
    <>
      <h1>
        TAMMMPAA BAYY  PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default TamPage;
