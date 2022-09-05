function homeButton() {
  window.location.replace("/");
}

const CinPage = () => {
  return (
  <>
    <h1>
      CINCinatttty PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default CinPage;
