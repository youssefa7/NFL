function homeButton() {
  window.location.replace("/");
}

const AtlPage = () => {
  return (
    <>
      <h1>
        ATLANTA PAGE PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default AtlPage;
