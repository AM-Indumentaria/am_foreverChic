import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FloatButtonPresentacional = ({ active, activeIcon }) => {
  return (
    <>
      <div className="floatButton">
        <Fab
          sx={{
            backgroundColor: "#28D181",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#26aa3b " },
            position: "sticky",
            top: 780,
            left: 1820,
          }}
          aria-label="contact"
          className={active}
        >
          <a href="https://wa.me/2604323788">
            <WhatsAppIcon sx={{ color: "white" }} />
          </a>
        </Fab>

        <Fab
          sx={{
            backgroundColor: "#E4405F",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#aa2626" },
            position: "sticky",
            left: 1820,
            top: 710,
          }}
          aria-label="contact"
          className={active}
        >
          <a href="https://www.instagram.com/amindumentaria.23/">
            <InstagramIcon sx={{ color: "white" }} />
          </a>
        </Fab>

        <Fab
          sx={{
            backgroundColor: "#FFAD66",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
            ":hover": { backgroundColor: "#FFC100" },
            position: "sticky",
            left: 1820,
            top: 850,
          }}
          aria-label="contact"
          onClick={() => {
            activeIcon();
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21V4.8C3 4.305 3.1764 3.8811 3.5292 3.5283C3.882 3.1755 4.3056 2.9994 4.8 3H19.2C19.695 3 20.1189 3.1764 20.4717 3.5292C20.8245 3.882 21.0006 4.3056 21 4.8V15.6C21 16.095 20.8236 16.5189 20.4708 16.8717C20.118 17.2245 19.6944 17.4006 19.2 17.4H6.6L3 21ZM6.6 13.8H13.8V12H6.6V13.8ZM6.6 11.1H17.4V9.3H6.6V11.1ZM6.6 8.4H17.4V6.6H6.6V8.4Z"
              fill="#FFFFFF"
            />
          </svg>
        </Fab>
      </div>
    </>
  );
};
