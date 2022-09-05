function homeButton() {
  window.location.replace("/");
}

const MiaPage = () => {
  return (
  <>
    <h1>
      Miamii PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default MiaPage;
