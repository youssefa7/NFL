function homeButton() {
  window.location.replace("/");
}

const BufPage = () => {
  return (
  <>
    <h1>
      Buffalo Bills PAGE!
    </h1>

    <button onClick={homeButton}>
      HomePage
    </button>
  </>
  );
};

export default BufPage;
