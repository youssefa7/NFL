function homeButton() {
  window.location.replace("/");
}

const KanPage = () => {
  return (
  <>
    <h1>
      KANSASCITY PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default KanPage;
