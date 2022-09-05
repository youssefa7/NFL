function homeButton() {
  window.location.replace("/");
}

const CrdPage = () => {
  return (
  <>
    <h1>
      Arizona PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default CrdPage;
