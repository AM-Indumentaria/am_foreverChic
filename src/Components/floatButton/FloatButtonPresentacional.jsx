import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatIcon from "@mui/icons-material/Chat";

export const FloatButtonPresentacional = ({ active, activeIcon }) => {
  return (
    <>
      <div className="floatButton">
        <Fab
          sx={{
            backgroundColor: "#E4405F",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#E4405F" },
            position: "fixed",
            top: {
              xs: "77vh",
              sm: "75vh",
              md: "75vh",
              lg: "75vh",
              xl: "75vh",
            },
            left: {
              xs: "85vw",
              sm: "91vw",
              md: "94vw",
              lg: "95vw",
              xl: "95vw",
            },
            width: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
            height: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
          }}
          aria-label="contact"
          className={active}
        >
          <a href="https://www.instagram.com/amindumentaria.23/" target="blank">
            <InstagramIcon
              sx={{
                color: "white",
                width: {
                  xs: 22,
                  sm: 24,
                  md: 26,
                  lg: 28,
                  xl: 30,
                },
                height: {
                  xs: 22,
                  sm: 24,
                  md: 26,
                  lg: 28,
                  xl: 30,
                },
              }}
            />
          </a>
        </Fab>
        <Fab
          sx={{
            backgroundColor: "#28D181",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#28D181 " },
            position: "fixed",
            left: {
              xs: "85vw",
              sm: "91vw",
              md: "94vw",
              lg: "95vw",
              xl: "95vw",
            },

            top: {
              xs: "84vh",
              sm: "83vh",
              md: "83vh",
              lg: "83vh",
              xl: "83vh",
            },

            width: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
            height: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
          }}
          aria-label="contact"
          className={active}
        >
          <a href="https://wa.me/2604323788" target="blank">
            <WhatsAppIcon
              sx={{
                color: "white",
                width: {
                  xs: 22,
                  sm: 24,
                  md: 26,
                  lg: 28,
                  xl: 30,
                },
                height: {
                  xs: 22,
                  sm: 24,
                  md: 26,
                  lg: 28,
                  xl: 30,
                },
              }}
            />
          </a>
        </Fab>

        <Fab
          sx={{
            backgroundColor: "#FFAD66",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#FFAD66" },
            position: "fixed",
            top: {
              xs: "91vh",
              sm: "91vh",
              md: "91vh",
              lg: "91vh",
              xl: "91vh",
            },
            left: {
              xs: "85vw",
              sm: "91vw",
              md: "94vw",
              lg: "95vw",
              xl: "95vw",
            },
            width: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
            height: {
              xs: 45,
              sm: 50,
              md: 50,
              lg: 55,
              xl: 55,
            },
          }}
          aria-label="contact"
          className="icon"
          onClick={() => {
            activeIcon();
          }}
          media=""
        >
          <ChatIcon
            className="icon"
            sx={{
              color: "white",
              width: {
                xs: 22,
                sm: 24,
                md: 26,
                lg: 28,
                xl: 30,
              },
              height: {
                xs: 22,
                sm: 24,
                md: 26,
                lg: 28,
                xl: 30,
              },
            }}
          />
        </Fab>
      </div>
    </>
  );
};
