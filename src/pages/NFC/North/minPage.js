function homeButton() {
  window.location.replace("/");
}

const MinPage = () => {
  return (
    <>
      <h1>
        Minnnnnnnososta PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default MinPage;
