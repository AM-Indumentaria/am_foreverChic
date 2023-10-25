import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ModaPresentacional = ({
  noche,
  clasico,
  casual,
  settings,
  Slider,
}) => {
  return (
    <div id="outfits" className="fst-italic text-black">
      <div id="moda">
        <div className=" mb-5 pb-4 pt-5 containers">
          <h2 className="fw-semibold ms-5 ps-5">Casual</h2>
          <div className="d-flex flex-row imgsGap justify-content-center ">
            {casual.map((prod) => {
              return (
                <div key={prod.id}>
                  <img
                    src={prod.img}
                    className="img-fluid mb-3"
                    alt={prod.alt}
                  ></img>
                  <h3 className="">{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" mb-5 pb-4 pt-5 containers">
          <h2 className="fw-semibold  ms-5 ps-5 ">Clásico</h2>
          <h2 className="fw-semibold night ms-5 ps-5 titleNoche">Noche</h2>
          <div className="d-flex flex-row imgsGap justify-content-center ">
            {clasico.map((prod) => {
              return (
                <div key={prod.id}>
                  <img
                    src={prod.img}
                    className="img-fluid mb-3"
                    alt={prod.alt}
                  ></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-5 ">
          <Slider {...settings}>
            {noche.map((prod) => {
              return (
                <div key={prod.id} className="containerNoche">
                  <img
                    src={prod.img}
                    className="mb-3 img-fluid "
                    alt={prod.alt}
                  ></img>
                  <h3>{prod.title}nombre del conjunto</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
