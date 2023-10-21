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
            backgroundColor: "#28D181",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#28D181 " },
            position: "fixed",
            left: {
              xs: "85vw",
              sm: "90vw",
              xl: "95vw",
            },
            top: "74vh",

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
          <a href="https://wa.me/2604323788">
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
            backgroundColor: "#E4405F",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#E4405F" },
            position: "fixed",
            top: "82vh",
            left: {
              xs: "85vw",
              sm: "90vw",
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
          <a href="https://www.instagram.com/amindumentaria.23/">
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
            backgroundColor: "#FFAD66",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#FFAD66" },
            position: "fixed",
            top: "90vh",
            left: {
              xs: "85vw",
              sm: "90vw",
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
