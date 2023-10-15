export const ModaPresentacional = ({
  noche,
  clasico,
  casual,
  translateAxisX,
  moveProducts,
  ArrowForwardIosIcon,
  ArrowBackIosNewIcon,
}) => {
  return (
    <>
      <div id="moda" className="text-black">
        <h2 className="fw-medium">Casual</h2>
        <div className="d-flex flex-row gap-3 justify-content-center">
          {casual.map((prod) => {
            return (
              <div key={prod.id}>
                <img src={prod.img}></img>
                <h3>{prod.title}nombre del conjunto</h3>
              </div>
            );
          })}
        </div>
        <h2>Clasico</h2>
        <div className="d-flex flex-row gap-3 justify-content-center">
          {clasico.map((prod) => {
            return (
              <div key={prod.id}>
                <img src={prod.img}></img>
                <h3>{prod.title}nombre del conjunto</h3>
              </div>
            );
          })}
        </div>
        <h2>Noche</h2>
        <div className="d-flex flex-row gap-3 carousel">
          {noche.map((prod) => {
            return (
              <div
                key={prod.id}
                style={{
                  transform: `translateX(${moveProducts}px)`,
                  transition: "0.5s",
                }}
              >
                <div>
                  <img src={prod.img}></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ArrowBackIosNewIcon
        sx={{
          position: "absolute",
          bottom: "-77vh",
          left: "10vw",
          fontSize: 48,
          backgroundColor: "black",
          color: "white",
          padding: 1.4,
        }}
        onClick={() => {
          translateAxisX("right");
        }}
      />
      <ArrowForwardIosIcon
        sx={{
          position: "absolute",
          bottom: "-77vh",
          left: "83vw",
          fontSize: 48,
          backgroundColor: "black",
          color: "white",
          padding: 1.4,
        }}
        onClick={() => {
          translateAxisX("left");
        }}
      />
    </>
  );
};
