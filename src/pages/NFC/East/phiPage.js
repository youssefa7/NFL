function homeButton() {
  window.location.replace("/");
}

const PhiPage = () => {
  return (
    <>
      <h1>
        Philililil PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default PhiPage;
