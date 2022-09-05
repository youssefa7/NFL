function homeButton() {
  window.location.replace("/");
}

const GnbPage = () => {
  return (
    <>
      <h1>
        Green Bay PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default GnbPage;
