function homeButton() {
  window.location.replace("/");
}

const NyjPage = () => {
  return (
  <>
    <h1>
      New York Jets JEts jets PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default NyjPage;
