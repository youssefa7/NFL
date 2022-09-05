function homeButton() {
  window.location.replace("/");
}

const RaiPage = () => {
  return (
  <>
    <h1>
      Vegas babay  PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default RaiPage;
