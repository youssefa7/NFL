function homeButton() {
  window.location.replace("/");
}

const JaxPage = () => {
  return (
  <>
    <h1>
      JAXSON VILLEEE PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default JaxPage;
