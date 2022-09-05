function homeButton() {
  window.location.replace("/");
}

const DetPage = () => {
  return (
    <>
      <h1>
        Detriot PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default DetPage;
