function homeButton() {
  window.location.replace("/");
}

const WasPage = () => {
  return (
    <>
      <h1>
        washington cs PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default WasPage;
