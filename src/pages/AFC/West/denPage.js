function homeButton() {
  window.location.replace("/");
}

const DenPage = () => {
  return (
  <>
    <h1>
      Denver denver denver PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default DenPage;
