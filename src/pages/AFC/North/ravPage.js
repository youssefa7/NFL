function homeButton() {
  window.location.replace("/");
}

const RavPage = () => {
  return (
  <>
    <h1>
      Ravens Maryland! PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default RavPage;
