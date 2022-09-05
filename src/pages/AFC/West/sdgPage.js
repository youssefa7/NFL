function homeButton() {
  window.location.replace("/");
}

const SdgPage = () => {
  return (
  <>
    <h1>
      sandiogo PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default SdgPage;
