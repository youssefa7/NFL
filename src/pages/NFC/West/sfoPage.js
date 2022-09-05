function homeButton() {
  window.location.replace("/");
}

const SfoPage = () => {
  return (
  <>
    <h1>
      sannnfrann  PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default SfoPage;
