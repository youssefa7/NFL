function homeButton() {
  window.location.replace("/");
}

const CarPage = () => {
  return (
    <>
      <h1>
        CAROOOLINAA PAGE!
      </h1>

      <button onClick={homeButton}>
        HomePage
      </button>
    </>
  );
};

export default CarPage;
