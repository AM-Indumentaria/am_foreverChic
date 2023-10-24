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
    <div id="outfits" className="fst-italic text-black">
      <div id="moda">
        <div className=" mb-5 pb-4 pt-5 containers">
          <h2 className="fw-medium ms-5 ps-5">Casual</h2>

          <div className="d-flex flex-row imgsGap justify-content-center ">
            {casual.map((prod) => {
              return (
                <div key={prod.id}>
                  <img src={prod.img} className="img-fluid mb-3"></img>
                  <h3 className="">{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" mb-5 pb-4 pt-5 containers">
          <h2 className="fw-semibold ms-5 ps-5 ">Clásico</h2>
          <h2 className="fw-medium night ms-5 ps-5 titleNoche">Noche</h2>
          <div className="d-flex flex-row imgsGap justify-content-center ">
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

        <div className="pt-5">
          <div className="d-flex flex-row imgsGap justify-content-center carousel">
            {noche.map((prod) => {
              return (
                <div
                  key={prod.id}
                  style={{
                    transform: `translateX(${moveProducts}%)`,
                    transition: "0.4s",
                  }}
                >
                  <img src={prod.img} className="mb-3"></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
            <ArrowBackIosNewIcon
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 40,
                  md: 40,
                  lg: 46,
                  xl: 46,
                },
                backgroundColor: "black",
                color: "white",
                padding: 1.4,
                cursor: "pointer",
              }}
              className="arrowBack"
              onClick={() => {
                translateAxisX("left");
              }}
            />
            <ArrowForwardIosIcon
              sx={{
                fontSize: {
                  xs: 30,
                  sm: 40,
                  md: 40,
                  lg: 46,
                  xl: 46,
                },
                backgroundColor: "black",
                color: "white",
                padding: 1.4,
                cursor: "pointer",
              }}
              onClick={() => {
                translateAxisX("right");
              }}
              className="arrowFoward"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
