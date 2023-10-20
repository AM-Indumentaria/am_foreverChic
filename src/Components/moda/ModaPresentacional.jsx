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
        <div className="containers mb-5 pb-4 pt-5">
          <h2 className="fw-medium ">Casual</h2>
          <div className="d-flex flex-row gap-3 justify-content-center ">
            {casual.map((prod) => {
              return (
                <div key={prod.id}>
                  <img src={prod.img} className="img-fluid mb-3"></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="containers mb-5 pb-4 pt-5">
          <h2 className="fw-medium">Clasico</h2>
          <h2 className="fw-medium night">Noche</h2>
          <div className="d-flex flex-row gap-3 justify-content-center">
            {clasico.map((prod) => {
              return (
                <div key={prod.id}>
                  <img src={prod.img} className="img-fluid mb-3"></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="containers pt-5">
          <div className="d-flex flex-row gap-3 justify-content-center carousel">
            {noche.map((prod) => {
              return (
                <div
                  key={prod.id}
                  style={{
                    transform: `translateX(${moveProducts}%)`,
                    transition: "0.4s",
                  }}
                >
                  <div>
                    <img src={prod.img} className="mb-3"></img>
                    <h3>{prod.title}nombre del conjunto</h3>
                  </div>
                </div>
              );
            })}
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 48,
                backgroundColor: "black",
                color: "white",
                padding: 1.4,
                cursor: "pointer",
              }}
              className="arrowBack"
              onClick={() => {
                translateAxisX("right");
              }}
            />
            <ArrowForwardIosIcon
              sx={{
                fontSize: 48,
                backgroundColor: "black",
                color: "white",
                padding: 1.4,
                cursor: "pointer",
              }}
              onClick={() => {
                translateAxisX("left");
              }}
              className="arrowFoward"
            />
          </div>
        </div>
        <div className="titles"></div>
      </div>
    </>
  );
};
