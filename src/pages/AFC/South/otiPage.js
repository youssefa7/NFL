function homeButton() {
  window.location.replace("/");
}

const OtiPage = () => {
  return (
  <>
    <h1>
      TENNN10 PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default OtiPage;
