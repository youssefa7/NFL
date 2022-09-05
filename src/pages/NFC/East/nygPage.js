function homeButton() {
  window.location.replace("/");
}

const NygPage = () => {
  return (
    <>
      <h1>
        NEW YORK giants PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default NygPage;
