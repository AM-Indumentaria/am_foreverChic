import "./footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Footer = () => {
  return (
    <div id="footer">
      <div className="text-light d-flex flex-row justify-content-between ">
        <div className="contact ">
          <h2 className="fw-bold lh-base title">Contacto</h2>
          <ul className="d-flex flex-column m-0 gap-4 pb-5 pt-3 ps-0">
            <a
              href="https://www.instagram.com/amindumentaria.23/"
              className=" text-decoration-none text-light"
              target="blank"
            >
              <li className="d-flex align-items-center ">
                <InstagramIcon
                  sx={{
                    width: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                    height: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                  }}
                />

                <span>Instagram</span>
              </li>
            </a>
            <a
              href="https://www.tiktok.com/@a.m.indumentaria20"
              className="text-decoration-none text-light"
              target="blank"
            >
              <li className="d-flex align-items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 24"
                  fill="none"
                  className="iconFooter"
                >
                  <path
                    d="M14.5252 8.18867C16.069 9.29576 17.9594 9.9472 20.0013 9.9472V6.84313C18.8615 6.59949 17.8525 6.00175 17.0939 5.17034C15.7953 4.35714 14.8598 3.01555 14.5855 1.44531H11.7229V17.196C11.7164 19.0322 10.2315 20.519 8.4004 20.519C7.32135 20.519 6.36272 20.0028 5.7556 19.2032C4.67147 18.654 3.92801 17.5267 3.92801 16.2248C3.92801 14.3835 5.41533 12.8906 7.25039 12.8906C7.60198 12.8906 7.94085 12.9455 8.25873 13.0467V9.90873C4.31799 9.99044 1.14868 13.2218 1.14868 17.196C1.14868 19.1799 1.93791 20.9784 3.21884 22.2925C4.37443 23.0712 5.76553 23.5253 7.2622 23.5253C11.2735 23.5253 14.5253 20.2619 14.5253 16.2362V8.18867H14.5252Z"
                    fill="white"
                  />
                  <path
                    d="M20.0013 6.84218V6.00286C18.9735 6.00442 17.9659 5.71556 17.0939 5.16931C17.8659 6.01744 18.8823 6.60224 20.0013 6.84218ZM14.5855 1.44436C14.5593 1.29429 14.5392 1.14323 14.5253 0.991589V0.484375H10.5728V16.2352C10.5665 18.0711 9.0817 19.5579 7.25041 19.5579C6.71278 19.5579 6.20516 19.4299 5.75563 19.2023C6.36274 20.0018 7.32137 20.5179 8.40042 20.5179C10.2314 20.5179 11.7165 19.0313 11.7229 17.1951V1.44436H14.5855ZM8.25892 9.90778V9.01427C7.92865 8.96896 7.59569 8.94623 7.26231 8.9464C3.25069 8.94631 -0.0012207 12.2098 -0.0012207 16.2352C-0.0012207 18.7589 1.27684 20.983 3.21895 22.2914C1.93802 20.9774 1.14879 19.1788 1.14879 17.195C1.14879 13.2209 4.31801 9.98949 8.25892 9.90778Z"
                    fill="white"
                  />
                </svg>
                <span>Tiktok</span>
              </li>
            </a>
            <a
              href="https://wa.me/2604323788"
              className=" text-decoration-none text-light"
              target="blank"
            >
              <li className="d-flex  align-items-center">
                <WhatsAppIcon
                  sx={{
                    width: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                    height: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                  }}
                />

                <span>Whatsapp</span>
              </li>
            </a>
            <a
              href="mailto:amindumentaria406@gmail.com"
              className=" text-decoration-none text-light"
              target="blank"
            >
              <li className="d-flex align-items-center ">
                <EmailOutlinedIcon
                  sx={{
                    width: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                    height: {
                      xs: 24,
                      sm: 26,
                      md: 26,
                      lg: 34,
                      xl: 34,
                    },
                  }}
                />

                <span>Correo</span>
              </li>
            </a>
            <a
              href="https://www.facebook.com/Ropaypeluqueria/"
              className=" text-decoration-none text-light"
              target="blank"
            >
              <li className="d-flex align-items-center justify-content-start ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="iconFooter"
                  viewBox="0 0 12 22"
                  fill="none"
                >
                  <path
                    d="M11.3395 8.49806L10.7704 12.2082H7.77981V21.1776C7.12552 21.2804 6.4562 21.333 5.77434 21.333C5.09249 21.333 4.42317 21.2804 3.76888 21.1776V12.2082H0.51001V8.49806H3.76888V5.67036C3.76888 2.4541 5.6841 0.676758 8.61709 0.676758C10.0209 0.676758 11.4899 0.92744 11.4899 0.92744V4.08604H9.8705C8.27616 4.08604 7.77981 5.07624 7.77981 6.0915V8.49806H11.3395Z"
                    fill="white"
                  />
                </svg>

                <span>Facebook</span>
              </li>
            </a>
          </ul>
        </div>
        <div className="d-flex flex-row address align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            className="mb-2 "
          >
            <path
              d="M16 22.0716C18.31 20.2081 20.0542 18.4144 21.2325 16.6906C22.4108 14.9669 23 13.3605 23 11.8716C23 10.5605 22.7611 9.44941 22.2833 8.5383C21.8056 7.62719 21.2166 6.88407 20.5164 6.30896C19.8161 5.73383 19.0576 5.31716 18.2407 5.05896C17.4238 4.80074 16.6769 4.67163 16 4.67163C15.3231 4.67163 14.5762 4.80074 13.7593 5.05896C12.9424 5.31716 12.1839 5.73383 11.4836 6.30896C10.7834 6.88407 10.1944 7.62719 9.71667 8.5383C9.23889 9.44941 9 10.5605 9 11.8716C9 13.3605 9.58917 14.9669 10.7675 16.6906C11.9458 18.4144 13.69 20.2081 16 22.0716ZM16 24.605C12.9556 22.3161 10.6944 20.125 9.21667 18.0317C7.73889 15.9383 7 13.8877 7 11.8799C7 10.3633 7.27222 9.03274 7.81667 7.8883C8.36111 6.74385 9.06667 5.78274 9.93333 5.00496C10.8 4.22719 11.7664 3.64385 12.8327 3.25496C13.8989 2.86608 14.9544 2.67163 15.9993 2.67163C17.0442 2.67163 18.1 2.86608 19.1667 3.25496C20.2333 3.64385 21.2 4.22719 22.0667 5.00496C22.9333 5.78274 23.6389 6.74422 24.1833 7.8894C24.7278 9.03458 25 10.3671 25 11.8868C25 13.8989 24.2611 15.9494 22.7833 18.0383C21.3056 20.1272 19.0444 22.3161 16 24.605ZM16.003 14.005C16.6454 14.005 17.1944 13.7762 17.65 13.3187C18.1056 12.8612 18.3333 12.3112 18.3333 11.6687C18.3333 11.0262 18.1046 10.4772 17.647 10.0216C17.1895 9.56607 16.6395 9.3383 15.997 9.3383C15.3546 9.3383 14.8056 9.56706 14.35 10.0246C13.8944 10.4821 13.6667 11.0321 13.6667 11.6746C13.6667 12.3171 13.8954 12.8661 14.353 13.3216C14.8105 13.7772 15.3605 14.005 16.003 14.005ZM7 29.3383V27.3383H25V29.3383H7Z"
              fill="white"
            />
          </svg>
          <a
            href="https://maps.app.goo.gl/cNqbV4aHpbyJJYid9"
            className="text-decoration-none"
            target="blank"
          >
            <h3 className="fw-semibold">Adolfo Puebla Nº 446 5613 Malargüe,</h3>
            <h3 className="fw-lighter">Provincia de Mendoza, Argentina</h3>
          </a>
        </div>
      </div>
      <div className="border-top border-1 d-flex flex-row justify-content-center align-items-center pt-5 amFoot gap-4 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73 73"
          fill="none"
          className="amLogo"
        >
          <g clipPath="url(#clip0_482_162)">
            <path
              d="M31.625 65.2903C31.871 65.4001 32.1157 65.51 32.3617 65.621C32.1157 65.5112 31.871 65.4013 31.625 65.2903Z"
              fill="#8A8A8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.889 45.1064C17.1994 44.8055 18.5096 44.505 19.8197 44.2043C21.1299 43.9038 22.44 43.6031 23.7505 43.3022C23.9538 43.2518 24.1616 43.2234 24.3692 43.1951C24.6919 43.1511 25.0147 43.107 25.3206 42.9798C25.7029 42.914 26.0854 42.85 26.4679 42.7862V42.786C27.494 42.6145 28.5198 42.443 29.5391 42.236C29.8484 42.1727 30.1863 41.9291 30.3797 41.67C31.9302 39.5993 33.4713 37.5216 35.0123 35.4441C36.2756 33.7409 37.5389 32.0379 38.8072 30.3386C39.0414 30.0248 39.2744 29.7097 39.5075 29.3946L39.5076 29.3945V29.3944H39.5077L39.5078 29.3943L39.5083 29.3936C40.4879 28.069 41.4683 26.7435 42.5445 25.5004C45.3122 22.3028 48.1505 19.1649 50.9958 16.0354C52.0358 14.8915 53.2358 13.9052 54.6352 13.2127C55.0902 12.987 55.6012 12.8485 56.1027 12.7506C56.8931 12.5965 57.5606 13.0562 57.9355 13.9374C58.326 14.9762 58.2006 16.0151 57.9319 17.0527C57.8167 17.4552 57.7084 17.8602 57.6001 18.2651H57.6V18.2652C57.355 19.1816 57.11 20.0978 56.7845 20.9846C56.2751 22.3721 55.7088 23.7388 55.1423 25.1057C54.9054 25.6773 54.6685 26.249 54.4358 26.8222C54.3594 27.0813 54.234 27.3201 54.1063 27.5565C53.687 28.4554 53.2681 29.3539 52.8492 30.2524C52.4305 31.1503 52.0118 32.0482 51.5928 32.9464C51.5191 33.0502 51.4733 33.1679 51.4277 33.2855C51.3787 33.4116 51.3299 33.5374 51.2466 33.6461C51.0017 34.1298 50.757 34.6136 50.5124 35.0974C49.7121 36.6802 48.9118 38.2633 48.1015 39.8407C48.0912 39.8608 48.0812 39.8801 48.0714 39.899C47.9076 40.2146 47.832 40.3601 48.3797 40.3386C51.7325 40.2073 55.0866 40.0771 58.4406 40.0222C61.4399 39.9731 64.4406 39.9718 67.4411 39.9705C68.238 39.9702 69.0349 39.9698 69.8316 39.9685C70.1544 39.9685 70.4771 40.0017 70.7999 40.0349C70.9476 40.05 71.0953 40.0652 71.243 40.0771C71.7755 40.0485 71.9403 40.1691 71.8687 40.6264C71.8534 40.725 71.843 40.8266 71.8327 40.9286C71.7845 41.4062 71.7352 41.8933 71.1606 42.1225C70.6964 42.1225 70.232 42.1206 69.7678 42.1187C68.7813 42.1145 67.7949 42.1103 66.8084 42.1249C62.197 42.193 57.5857 42.2622 52.9743 42.3613C51.9245 42.3838 50.8756 42.4337 49.8266 42.4835C48.9715 42.5242 48.1163 42.5649 47.2609 42.5906C46.8251 42.6037 46.5469 42.7757 46.3606 43.1291C45.9405 43.9238 45.5233 44.72 45.1063 45.5163L45.1051 45.5186L45.1035 45.5216L45.1034 45.5218C44.7224 46.2491 44.3414 46.9764 43.9582 47.7022C43.7994 48.0043 43.7373 48.1822 44.2078 48.2168C44.7869 48.2598 44.9099 48.5058 44.7045 49.0694C44.4184 49.8534 44.1259 50.6357 43.8334 51.4179V51.418V51.4182C43.7036 51.7651 43.574 52.1121 43.4448 52.4592C43.4277 52.5263 43.4127 52.594 43.3976 52.6617C43.3471 52.8883 43.2966 53.1149 43.1725 53.3189L43.1632 53.3358C43.1415 53.3755 43.1198 53.4151 43.0925 53.4527C43.1168 53.4571 43.1229 53.4426 43.1297 53.4269C43.1339 53.417 43.1383 53.4066 43.1475 53.4001C43.1729 53.3564 43.1962 53.3113 43.2193 53.2664C43.3036 53.1023 43.387 52.9405 43.5725 52.858C43.8604 52.5095 44.1436 52.1565 44.4269 51.8037L44.4275 51.803L44.4282 51.802L44.4284 51.8017H44.4285V51.8016H44.4287V51.8014C45.1325 50.9243 45.8362 50.0474 46.6113 49.2389C47.04 48.7912 47.7588 48.5034 48.3893 48.3912C49.7218 48.1536 50.5027 49.073 50.2257 50.4031C50.2084 50.4879 50.1888 50.5717 50.1692 50.6555C50.1576 50.7051 50.146 50.7546 50.1349 50.8043C50.0876 50.9199 50.0525 51.04 50.0173 51.1602C49.9546 51.3742 49.8919 51.5882 49.7612 51.7762L49.5343 52.2503C49.4624 52.3741 49.4654 52.5089 49.4683 52.6436C49.4706 52.745 49.4727 52.8462 49.4432 52.9427C49.456 52.918 49.4677 52.8928 49.4795 52.8676C49.5242 52.7723 49.5684 52.678 49.6633 52.6168C49.959 52.2702 50.2509 51.9198 50.5427 51.5693H50.5428V51.5692L50.5429 51.5691L50.543 51.569C51.2444 50.7268 51.9459 49.8844 52.7021 49.0945C53.2728 48.4986 54.0967 48.3052 54.9516 48.3554C56.0693 48.4222 56.8048 49.2354 56.4967 50.3064C56.1946 51.3546 55.8228 52.3832 55.4509 53.4119V53.4121L55.4508 53.4122L55.4506 53.4128C55.2656 53.9247 55.0804 54.4367 54.9039 54.9512L54.8761 55.0321C54.6607 55.6597 54.4444 56.2899 54.283 56.9321C54.1361 57.5159 54.357 57.7703 54.9958 57.8933C55.1151 57.9448 55.2499 57.9426 55.3847 57.9402C55.609 57.9364 55.8333 57.9324 55.9869 58.1763L55.9773 58.1906C55.9571 58.241 55.9622 58.2914 55.9672 58.3419C55.9699 58.369 55.9727 58.3962 55.9713 58.4234C55.9116 59.6604 55.4269 60.0091 54.209 59.6951C54.0886 59.676 53.9676 59.6592 53.8467 59.6425H53.8466C53.5765 59.6053 53.3066 59.568 53.0436 59.5028C51.6322 59.1554 51.0328 58.1667 51.471 56.7852C51.7425 55.9287 52.0592 55.0866 52.376 54.2444V54.2442H52.3761L52.3764 54.2435C52.5165 53.8708 52.6566 53.4982 52.7928 53.1243C52.8587 52.9949 52.9033 52.857 52.9479 52.7189C52.9981 52.5641 53.0482 52.4091 53.1284 52.2658C53.1539 52.1979 53.1834 52.1305 53.2129 52.0632C53.2798 51.9105 53.3465 51.7579 53.3672 51.5995C53.3878 51.4389 53.3632 51.2725 53.3386 51.1064C53.3276 51.033 53.3168 50.9595 53.3099 50.8867C53.243 50.9056 53.1693 50.9177 53.0956 50.93C52.9349 50.9569 52.7742 50.9837 52.6842 51.0777C52.5998 51.166 52.5149 51.254 52.43 51.3421L52.4296 51.3425L52.4291 51.3428C51.8564 51.9372 51.2799 52.5352 50.7976 53.1983C49.5893 54.8652 48.5445 56.6312 47.8316 58.5798C47.4854 59.5255 46.8406 59.7977 45.4806 59.6568C45.3753 59.6455 45.2716 59.6166 45.1678 59.5876C45.1185 59.5739 45.0693 59.5601 45.0197 59.5482C44.7522 59.4001 44.6687 59.2103 44.8143 58.9106C44.879 58.7765 44.9238 58.6288 44.9684 58.4813C44.9767 58.4536 44.9851 58.4259 44.9936 58.3985C44.9982 58.3833 45.003 58.3681 45.0078 58.353C45.2183 57.8194 45.4301 57.2863 45.6419 56.7532V56.7531L45.642 56.7528V56.7527L45.6422 56.7525V56.7524C46.2685 55.1758 46.8947 53.5993 47.489 52.0103C47.6072 51.6939 47.6024 51.1159 47.4042 50.9428C47.0536 50.6348 46.7334 50.9505 46.4609 51.219C46.4271 51.2523 46.394 51.2848 46.3618 51.3154C44.3916 53.1768 43.1308 55.4885 42.1505 57.978C42.0503 58.2333 41.9469 58.4872 41.8433 58.741L41.8429 58.7422V58.7423L41.8428 58.7425C41.7823 58.8908 41.7219 59.0391 41.6621 59.1876C41.5534 59.393 41.3934 59.547 41.1928 59.6604C41.0765 59.6743 40.9602 59.6912 40.8438 59.7081C40.5889 59.7451 40.3339 59.7821 40.0788 59.787C39.2525 59.8049 39.1081 59.627 39.2179 58.9356L38.7377 59.1214C38.2613 59.3058 37.7644 59.498 37.2669 59.6903C37.0995 59.8909 36.8702 59.9323 36.6412 59.9737C36.5648 59.9876 36.4884 60.0013 36.4143 60.021C35.4042 59.8527 35.077 59.0849 35.6227 58.1082C35.9741 57.4799 36.3319 56.8552 36.6898 56.2305L36.6899 56.2302C37.1589 55.4114 37.6279 54.5925 38.0824 53.7655C39.2061 51.7213 40.3228 49.6731 41.4394 47.6248L41.4395 47.6246L41.4396 47.6244L41.4398 47.6241L41.4399 47.6239L41.44 47.6237C42.2265 46.1811 43.0129 44.7386 43.8018 43.2974C43.9952 42.944 43.8722 42.8855 43.5355 42.9189C42.2734 43.0432 41.011 43.166 39.7484 43.2887L39.7465 43.289L39.7448 43.2891L39.7434 43.2892C37.8662 43.4718 35.9888 43.6543 34.1122 43.8419C33.3421 43.9183 32.5708 44.0055 31.8125 44.1524C31.5355 44.2061 31.2119 44.3876 31.0496 44.6121C29.5916 46.6336 28.1588 48.673 26.7355 50.7195C26.4036 51.1959 25.9845 51.4551 25.4257 51.3142C24.8525 51.1697 24.6149 50.7207 24.6209 50.1416C24.6567 49.8276 24.7869 49.5482 24.9469 49.2807C25.4949 48.1189 25.2334 47.5816 24.0096 47.2377C21.7887 46.6145 19.5642 46.8473 17.3397 47.1852C16.8456 47.2602 16.355 47.3614 15.8645 47.4626L15.8639 47.4627L15.8633 47.4628H15.8628L15.8622 47.4629L15.8616 47.4631C15.6347 47.5099 15.408 47.5567 15.1809 47.6007C14.6603 47.7022 14.1863 47.6688 13.8818 47.1482C13.5678 46.6097 13.6525 46.1309 14.1003 45.707C14.2199 45.6422 14.3494 45.6006 14.4788 45.5591C14.6376 45.5082 14.7965 45.4572 14.9373 45.3631C14.9752 45.3567 15.0128 45.3501 15.0503 45.3437L15.0513 45.3434C15.0893 45.3368 15.1272 45.3303 15.1654 45.3237C15.3088 45.2781 15.4535 45.2367 15.5986 45.1952L15.5987 45.1951H15.5989L15.5992 45.195C15.6966 45.1672 15.794 45.1392 15.8913 45.11L15.889 45.1064ZM49.3715 53.0234L49.3729 53.0227C49.3441 53.042 49.3167 53.062 49.3039 53.098C49.3067 53.0512 49.3391 53.0373 49.3715 53.0234ZM52.8499 17.4076H52.8498L52.8473 17.4098C52.5797 17.6416 52.312 17.8732 52.0442 18.1046H52.043C51.9176 18.2216 51.7946 18.3398 51.6824 18.47C48.7666 21.387 46.1397 24.5607 43.5964 27.7965C41.4674 30.5065 39.397 33.2625 37.3266 36.0186L37.3265 36.0188L37.325 36.0205L37.3248 36.0209L37.3245 36.0213L37.3242 36.0216L37.3239 36.0221C36.6247 36.9528 35.9255 37.8836 35.2239 38.8127C34.7598 39.4275 34.3137 40.0553 33.8454 40.7142C33.6198 41.0317 33.389 41.3564 33.1487 41.6903C33.5592 41.6482 33.9519 41.6079 34.3336 41.5686L34.37 41.5649L34.3835 41.5635L34.3857 41.5632C34.9922 41.5009 35.5716 41.4413 36.1505 41.3822C36.5238 41.3296 36.9001 41.299 37.2762 41.2684C37.8287 41.2234 38.3813 41.1785 38.9254 41.0634C39.2929 41.0332 39.6603 41.0031 40.0276 40.9731H40.0277C41.6767 40.8383 43.3247 40.7035 44.9719 40.5512C45.1403 40.5357 45.36 40.3733 45.4412 40.2192C46.0513 39.0646 46.6496 37.9028 47.2179 36.7267C48.4651 34.1423 49.7045 31.5542 50.9438 28.9665C51.3964 28.0211 51.8491 27.0758 52.3021 26.1309C52.335 26.0477 52.3651 25.9632 52.3952 25.8789C52.4679 25.6752 52.5405 25.4718 52.6519 25.2843C52.7343 25.1058 52.8167 24.9276 52.8991 24.7494C52.9815 24.5712 53.0639 24.393 53.1463 24.2145L53.1676 24.1752C53.2897 23.9508 53.4113 23.7269 53.4734 23.4754C53.5599 23.2576 53.6509 23.0411 53.742 22.8246C53.9428 22.347 54.1438 21.8693 54.2949 21.3762C54.8764 19.4771 55.4201 17.5668 55.9635 15.6572L56.0203 15.4574C56.0497 15.3548 56.0262 15.2369 56.0025 15.1189C55.9915 15.0642 55.9807 15.0093 55.9749 14.9559C55.9243 14.9734 55.8703 14.9868 55.8164 15C55.6998 15.0287 55.5838 15.0573 55.5021 15.1267C54.6134 15.8808 53.7317 16.6442 52.85 17.4074V17.4075L52.8499 17.4076ZM28.1969 44.7138L28.197 44.7136H28.1982L28.1969 44.7138ZM28.1969 44.7138L28.0377 44.9482C27.647 45.5236 27.3093 46.0209 26.9827 46.5034C26.4263 46.0819 25.8985 45.6819 25.3099 45.2354C25.9477 45.12 26.5579 45.0098 27.1945 44.8948L27.3292 44.8706C27.611 44.8197 27.8987 44.7677 28.1969 44.7138ZM39.1463 56.384L39.1465 56.3837C39.1483 56.3912 39.1491 56.3989 39.149 56.4067L39.1463 56.384ZM38.7893 56.9165C38.849 56.8276 38.9084 56.739 38.9678 56.6503C39.0272 56.5617 39.0866 56.473 39.1463 56.384V56.3828L39.1465 56.3837L39.1485 56.3801L39.1487 56.38L39.1488 56.3797V56.3796C39.3856 55.9583 39.6223 55.5372 39.8579 55.1148L39.8596 55.115C39.8923 55.0548 39.925 54.9948 39.9576 54.9345C40.0515 54.7618 40.1454 54.5887 40.24 54.4163C40.4406 54.4163 40.443 54.5118 40.357 54.6527C40.3299 54.7156 40.3027 54.7786 40.2756 54.8417C40.243 54.9174 40.2105 54.9931 40.1779 55.0688C40.1182 55.2077 40.0585 55.3464 39.9988 55.4849H39.9976L39.9968 55.4829L39.9964 55.4837C39.8639 55.7064 39.7311 55.9291 39.5982 56.1518L39.5977 56.1526C39.4651 56.3751 39.3324 56.5975 39.2 56.8198H39.1999L39.2 56.821L39.1988 56.8225C39.0703 56.982 38.9417 57.1415 38.8131 57.2998C38.7817 57.3314 38.7503 57.3628 38.7192 57.3942C38.6566 57.457 38.5943 57.5195 38.5313 57.5816C38.5324 57.5451 38.5306 57.5074 38.5288 57.4696C38.5247 57.3839 38.5206 57.2979 38.5505 57.2258C38.583 57.1446 38.6469 57.0751 38.7106 57.0057C38.7377 56.9762 38.7647 56.9469 38.7893 56.9165Z"
              fill="white"
            />
            <path
              d="M70.709 40.9602C71.785 33.786 71.5403 27.0731 68.2861 20.5895C65.032 14.1058 59.8522 8.78737 53.4568 5.36306C47.0614 1.93875 39.7635 0.57623 32.5633 1.46228C25.3632 2.34835 18.6134 5.43961 13.2389 10.3123C7.86462 15.185 4.12886 21.6006 2.54377 28.6798C0.958683 35.759 1.60186 43.1552 4.38514 49.8545C7.16841 56.5537 11.9555 62.2282 18.0904 66.1001C24.2251 69.972 31.4073 71.8516 38.6523 71.4816"
              stroke="white"
              strokeWidth="2.52709"
              strokeLinecap="square"
            />
            <path
              d="M29.8642 62.6644H28.7432V63.4442H29.7734V64.0246H28.7432V65.2587H28.0276V62.0817H29.8642V62.6644ZM32.7754 65.3141C32.3206 65.3141 31.9499 65.1664 31.6633 64.871C31.3767 64.5741 31.2334 64.1878 31.2334 63.7123C31.2334 63.2101 31.379 62.804 31.67 62.4938C31.9608 62.1835 32.3464 62.0286 32.8264 62.0286C33.2799 62.0286 33.6461 62.177 33.9253 62.4738C34.206 62.7707 34.3463 63.1621 34.3463 63.648C34.3463 64.1472 34.2007 64.5498 33.9097 64.8554C33.6203 65.1612 33.2422 65.3141 32.7754 65.3141ZM32.8065 62.6444C32.5554 62.6444 32.3559 62.7389 32.2082 62.928C32.0605 63.1156 31.9868 63.3644 31.9868 63.6747C31.9868 63.9892 32.0605 64.2381 32.2082 64.4213C32.3559 64.6043 32.5495 64.6959 32.7888 64.6959C33.0353 64.6959 33.231 64.6073 33.3759 64.4301C33.5206 64.2514 33.593 64.004 33.593 63.6879C33.593 63.3586 33.5229 63.1022 33.3825 62.9191C33.2422 62.736 33.0502 62.6444 32.8065 62.6444ZM38.5846 65.2587H37.7626L37.2685 64.4412C37.2316 64.3791 37.1962 64.3237 37.1622 64.275C37.1282 64.2263 37.0935 64.1849 37.058 64.151C37.0241 64.1155 36.9879 64.0889 36.9495 64.0712C36.9126 64.052 36.872 64.0424 36.8277 64.0424H36.6349V65.2587H35.9193V62.0817H37.0536C37.8246 62.0817 38.2102 62.3697 38.2102 62.9457C38.2102 63.0565 38.1932 63.1592 38.1592 63.2536C38.1253 63.3468 38.0773 63.431 38.0152 63.5062C37.9531 63.5815 37.8779 63.6466 37.7891 63.7012C37.7021 63.7558 37.6045 63.7987 37.4967 63.8296V63.8386C37.544 63.8533 37.5897 63.8776 37.6342 63.9117C37.6785 63.9441 37.7212 63.9826 37.7626 64.0269C37.8039 64.0712 37.8431 64.1192 37.88 64.1709C37.9185 64.221 37.9531 64.2706 37.9841 64.3193L38.5846 65.2587ZM36.6349 62.6178V63.5018H36.9451C37.0988 63.5018 37.222 63.4575 37.3151 63.3689C37.4096 63.2788 37.4568 63.1673 37.4568 63.0343C37.4568 62.7567 37.2908 62.6178 36.9583 62.6178H36.6349ZM41.8325 65.2587H39.9272V62.0817H41.7594V62.6644H40.6429V63.3711H41.6819V63.9515H40.6429V64.6782H41.8325V65.2587ZM46.0309 62.0817L44.9365 65.2587H44.1256L43.0445 62.0817H43.8155L44.4779 64.2927C44.5133 64.4123 44.5348 64.518 44.5422 64.6096H44.5555C44.5657 64.5106 44.5887 64.4021 44.6241 64.2838L45.2822 62.0817H46.0309ZM49.361 65.2587H47.4556V62.0817H49.2878V62.6644H48.1712V63.3711H49.2103V63.9515H48.1712V64.6782H49.361V65.2587ZM53.5793 65.2587H52.7574L52.2633 64.4412C52.2264 64.3791 52.1909 64.3237 52.157 64.275C52.123 64.2263 52.0882 64.1849 52.0528 64.151C52.0189 64.1155 51.9827 64.0889 51.9442 64.0712C51.9073 64.052 51.8668 64.0424 51.8225 64.0424H51.6297V65.2587H50.914V62.0817H52.0484C52.8193 62.0817 53.2049 62.3697 53.2049 62.9457C53.2049 63.0565 53.1879 63.1592 53.1539 63.2536C53.12 63.3468 53.072 63.431 53.0099 63.5062C52.9479 63.5815 52.8726 63.6466 52.784 63.7012C52.6968 63.7558 52.5993 63.7987 52.4915 63.8296V63.8386C52.5388 63.8533 52.5846 63.8776 52.6289 63.9117C52.6732 63.9441 52.7159 63.9826 52.7574 64.0269C52.7987 64.0712 52.8379 64.1192 52.8748 64.1709C52.9132 64.221 52.9479 64.2706 52.9789 64.3193L53.5793 65.2587ZM51.6297 62.6178V63.5018H51.9398C52.0935 63.5018 52.2168 63.4575 52.3099 63.3689C52.4043 63.2788 52.4516 63.1673 52.4516 63.0343C52.4516 62.7567 52.2855 62.6178 51.9531 62.6178H51.6297ZM59.4971 65.1457C59.2652 65.2579 58.9624 65.3141 58.5887 65.3141C58.1013 65.3141 57.718 65.1708 57.4388 64.8843C57.1596 64.5978 57.0202 64.2159 57.0202 63.7389C57.0202 63.2308 57.1767 62.8187 57.4898 62.5026C57.8044 62.1865 58.2121 62.0286 58.7127 62.0286C59.0229 62.0286 59.2843 62.0676 59.4971 62.1459V62.8349C59.2843 62.708 59.0422 62.6444 58.7704 62.6444C58.472 62.6444 58.2313 62.7382 58.0481 62.9258C57.865 63.1133 57.7734 63.3674 57.7734 63.6879C57.7734 63.9951 57.8598 64.2403 58.0326 64.4234C58.2054 64.6052 58.4381 64.6959 58.7305 64.6959C59.0097 64.6959 59.2652 64.628 59.4971 64.4921V65.1457ZM63.8439 65.2587H63.1261V63.9648H61.8102V65.2587H61.0945V62.0817H61.8102V63.3489H63.1261V62.0817H63.8439V65.2587ZM66.5979 62.0817V62.6355H66.3319V64.7049H66.5979V65.2587H65.3506V64.7049H65.6164V62.6355H65.3506V62.0817H66.5979ZM70.3776 65.1457C70.1457 65.2579 69.8429 65.3141 69.4693 65.3141C68.9819 65.3141 68.5986 65.1708 68.3194 64.8843C68.0402 64.5978 67.9007 64.2159 67.9007 63.7389C67.9007 63.2308 68.0572 62.8187 68.3703 62.5026C68.6849 62.1865 69.0925 62.0286 69.5933 62.0286C69.9034 62.0286 70.1649 62.0676 70.3776 62.1459V62.8349C70.1649 62.708 69.9226 62.6444 69.6509 62.6444C69.3525 62.6444 69.1118 62.7382 68.9286 62.9258C68.7454 63.1133 68.6539 63.3674 68.6539 63.6879C68.6539 63.9951 68.7403 64.2403 68.9131 64.4234C69.086 64.6052 69.3186 64.6959 69.611 64.6959C69.8902 64.6959 70.1457 64.628 70.3776 64.4921V65.1457Z"
              fill="white"
            />
            <path
              d="M57.5149 59.7661C58.0095 59.7661 58.4104 59.3652 58.4104 58.8706C58.4104 58.376 58.0095 57.9751 57.5149 57.9751C57.0203 57.9751 56.6194 58.376 56.6194 58.8706C56.6194 59.3652 57.0203 59.7661 57.5149 59.7661Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_482_162">
              <rect
                x="0.5"
                y="0.00488281"
                width="72"
                height="72.7164"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        <h3 className="text-light amInd">
          © AM Indumentaria. Todos los derechos reservados.
        </h3>
      </div>
    </div>
  );
};
