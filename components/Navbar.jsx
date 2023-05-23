import Link from "next/link";
import { useState, useEffect } from "react";
import {motion as anim} from "framer-motion"

const Navbar = () => {

  const [navHeight, setNavHeight] = useState(false);
  const [ctaText, setCtaText] = useState("Free Call");

  useEffect(function mount() {
    function resizeNav() {
      if (window.scrollY > 5) {
        setNavHeight(true);
      } else {
        setNavHeight(false);
      }
    }
    function handleCtaText() {
      if(window.innerWidth < 400) {
        setCtaText("Call")
      } 
      else {
        setCtaText("Free Call")
      }
    }
    handleCtaText()
    window.addEventListener("scroll", resizeNav);

    return function unMount() {
      window.removeEventListener("scroll", resizeNav)
    }
  })

  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  function handleMenuClick() {
    setMenuOpen(false);
  }
  const menuVariants = {
    open: {
      y: 0,
      //   borderTopLeftRadius: "10%",
      //   borderTopRightRadius: "10%",
      borderRadius: "20px",
      opacity: 1,
      zIndex: "10",
      minHeight: "40vh",
      transition: {
        // type: "spring",
        ease: "easeInOut",
        stiffness: 50,
      },
    },
    closed: {
      y: "100%",
      borderRadius: "40px",
      opacity: 0,
      zIndex: "-10",
      minHeight: "0vh",
      transition: {
        // type: "spring",
        ease: "easeInOut",
        stiffness: 50,
      },
    },
  };

  return (
    // <div className="lg:pt-2">
      <nav
        className={
          navHeight
            ? "xl:mt-2 sticky__nav compacted__nav flex items-center justify-between mt-0 ml-auto mr-auto pl-2 pr-2 lg:pr-0 lg:pl-4 w-12/12 xl:w-11/12 md:rounded-xl 2xl:rounded-2xl transition-all dark:bg-neutral-700"
            : "xl:mt-2 sticky__nav nav__height flex items-center justify-between mt-0 ml-auto mr-auto pl-2 pr-2 lg:pr-0 lg:pl-4 w-12/12 xl:w-11/12 md:rounded-xl 2xl:rounded-2xl transition-all dark:bg-neutral-700"
        }
      >
        <div aria-label="French For All">
          <Link href="/">
            <svg
              width="164"
              height="26"
              viewBox="0 0 164 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                className="fill-black dark:fill-white"
                d="M8.24 0.239998C8.59 0.239998 8.96333 0.274998 9.36 0.344999C9.78 0.414999 10.1417 0.543332 10.445 0.729998C10.7483 0.893332 10.9 1.15 10.9 1.5C10.9 1.75667 10.8067 1.99 10.62 2.2C10.4333 2.38667 10.2233 2.48 9.99 2.48C9.75667 2.48 9.465 2.42166 9.115 2.305C8.765 2.165 8.39167 2.095 7.995 2.095C7.505 2.095 7.085 2.21167 6.735 2.445C6.385 2.655 6.11667 2.97 5.93 3.39C5.74333 3.78667 5.65 4.27667 5.65 4.86V24.95C5.65 25.23 5.545 25.475 5.335 25.685C5.14833 25.895 4.90333 26 4.6 26C4.29667 26 4.04 25.895 3.83 25.685C3.64333 25.475 3.55 25.23 3.55 24.95V4.86C3.55 3.36667 3.98167 2.22333 4.845 1.43C5.73167 0.636665 6.86333 0.239998 8.24 0.239998ZM9.57 8.465C9.85 8.465 10.0833 8.55833 10.27 8.745C10.4567 8.93167 10.55 9.165 10.55 9.445C10.55 9.725 10.4567 9.95833 10.27 10.145C10.0833 10.3317 9.85 10.425 9.57 10.425H0.995C0.738333 10.425 0.505 10.3317 0.295 10.145C0.108333 9.935 0.015 9.70167 0.015 9.445C0.015 9.14167 0.108333 8.90833 0.295 8.745C0.505 8.55833 0.738333 8.465 0.995 8.465H9.57Z"
              />
              <path
                className="fill-black dark:fill-white"
                d="M5.76 25.76C5.41 25.76 5.03667 25.725 4.64 25.655C4.22 25.585 3.85833 25.4567 3.555 25.27C3.25167 25.1067 3.1 24.85 3.1 24.5C3.1 24.2433 3.19333 24.01 3.38 23.8C3.56667 23.6133 3.77667 23.52 4.01 23.52C4.24333 23.52 4.535 23.5783 4.885 23.695C5.235 23.835 5.60833 23.905 6.005 23.905C6.495 23.905 6.915 23.7883 7.265 23.555C7.615 23.345 7.88333 23.03 8.07 22.61C8.25667 22.2133 8.35 21.7233 8.35 21.14L8.35 1.05C8.35 0.77 8.455 0.525 8.665 0.315C8.85167 0.105 9.09667 0 9.4 0C9.70333 0 9.96 0.105 10.17 0.315C10.3567 0.525 10.45 0.77 10.45 1.05L10.45 21.14C10.45 22.6333 10.0183 23.7767 9.155 24.57C8.26833 25.3633 7.13667 25.76 5.76 25.76ZM4.43 17.535C4.15 17.535 3.91667 17.4417 3.73 17.255C3.54333 17.0683 3.45 16.835 3.45 16.555C3.45 16.275 3.54333 16.0417 3.73 15.855C3.91667 15.6683 4.15 15.575 4.43 15.575H13.005C13.2617 15.575 13.495 15.6683 13.705 15.855C13.8917 16.065 13.985 16.2983 13.985 16.555C13.985 16.8583 13.8917 17.0917 13.705 17.255C13.495 17.4417 13.2617 17.535 13.005 17.535H4.43Z"
              />
              <path
                className="fill-black dark:fill-white"
                d="M22.015 21C21.655 21 21.3625 20.895 21.1375 20.685C20.9275 20.46 20.8225 20.1825 20.8225 19.8525V6.3975C20.8225 6.0675 20.935 5.7975 21.16 5.5875C21.385 5.3625 21.655 5.25 21.97 5.25H29.575C29.905 5.25 30.175 5.355 30.385 5.565C30.61 5.775 30.7225 6.0375 30.7225 6.3525C30.7225 6.6375 30.61 6.885 30.385 7.095C30.175 7.305 29.905 7.41 29.575 7.41H23.005L23.1625 7.185V12.2025L23.0275 11.9325H28.5625C28.8925 11.9325 29.1625 12.0375 29.3725 12.2475C29.5975 12.4575 29.71 12.72 29.71 13.035C29.71 13.32 29.5975 13.5675 29.3725 13.7775C29.1625 13.9875 28.8925 14.0925 28.5625 14.0925H22.9825L23.1625 13.9125V19.8525C23.1625 20.1825 23.05 20.46 22.825 20.685C22.6 20.895 22.33 21 22.015 21ZM34.1805 21C33.8505 21 33.5805 20.895 33.3705 20.685C33.1605 20.46 33.0555 20.1825 33.0555 19.8525V10.3125C33.0555 9.9825 33.1605 9.7125 33.3705 9.5025C33.5805 9.2775 33.8505 9.165 34.1805 9.165C34.4955 9.165 34.758 9.2775 34.968 9.5025C35.193 9.7125 35.3055 9.9825 35.3055 10.3125V12.8325L35.0805 11.865C35.2005 11.445 35.3805 11.055 35.6205 10.695C35.8755 10.335 36.1755 10.02 36.5205 9.75C36.8655 9.48 37.248 9.27 37.668 9.12C38.103 8.97 38.553 8.895 39.018 8.895C39.408 8.895 39.7455 9 40.0305 9.21C40.3155 9.42 40.458 9.6825 40.458 9.9975C40.458 10.4025 40.353 10.7025 40.143 10.8975C39.933 11.0775 39.7005 11.1675 39.4455 11.1675C39.2205 11.1675 39.003 11.1225 38.793 11.0325C38.583 10.9275 38.3355 10.875 38.0505 10.875C37.7355 10.875 37.413 10.9575 37.083 11.1225C36.753 11.2875 36.453 11.535 36.183 11.865C35.913 12.18 35.6955 12.555 35.5305 12.99C35.3805 13.425 35.3055 13.9125 35.3055 14.4525V19.8525C35.3055 20.1825 35.193 20.46 34.968 20.685C34.758 20.895 34.4955 21 34.1805 21ZM47.4669 21.225C46.2219 21.225 45.1419 20.97 44.2269 20.46C43.3119 19.935 42.5994 19.2225 42.0894 18.3225C41.5944 17.4075 41.3469 16.365 41.3469 15.195C41.3469 13.875 41.6094 12.75 42.1344 11.82C42.6744 10.875 43.3719 10.155 44.2269 9.66C45.0819 9.15 45.9894 8.895 46.9494 8.895C47.6844 8.895 48.3819 9.045 49.0419 9.345C49.7019 9.63 50.2869 10.035 50.7969 10.56C51.3219 11.07 51.7344 11.6775 52.0344 12.3825C52.3344 13.0725 52.4919 13.83 52.5069 14.655C52.4919 14.955 52.3719 15.2025 52.1469 15.3975C51.9219 15.5925 51.6594 15.69 51.3594 15.69H42.6069L42.0669 13.7775H50.5269L50.0994 14.1825V13.62C50.0694 13.095 49.8969 12.6375 49.5819 12.2475C49.2669 11.8425 48.8769 11.535 48.4119 11.325C47.9469 11.1 47.4594 10.9875 46.9494 10.9875C46.4994 10.9875 46.0644 11.0625 45.6444 11.2125C45.2394 11.3475 44.8719 11.5725 44.5419 11.8875C44.2269 12.2025 43.9719 12.6225 43.7769 13.1475C43.5969 13.6575 43.5069 14.295 43.5069 15.06C43.5069 15.885 43.6794 16.605 44.0244 17.22C44.3694 17.835 44.8344 18.315 45.4194 18.66C46.0044 18.99 46.6494 19.155 47.3544 19.155C47.9094 19.155 48.3669 19.1025 48.7269 18.9975C49.0869 18.8775 49.3869 18.735 49.6269 18.57C49.8669 18.405 50.0769 18.2475 50.2569 18.0975C50.4819 17.9625 50.7069 17.895 50.9319 17.895C51.2019 17.895 51.4269 17.9925 51.6069 18.1875C51.7869 18.3675 51.8769 18.585 51.8769 18.84C51.8769 19.17 51.7119 19.47 51.3819 19.74C50.9769 20.13 50.4144 20.475 49.6944 20.775C48.9894 21.075 48.2469 21.225 47.4669 21.225ZM61.1476 8.895C62.2126 8.895 63.0376 9.12 63.6226 9.57C64.2076 10.005 64.6126 10.5975 64.8376 11.3475C65.0776 12.0825 65.1976 12.9075 65.1976 13.8225V19.8525C65.1976 20.1825 65.0851 20.46 64.8601 20.685C64.6501 20.895 64.3876 21 64.0726 21C63.7426 21 63.4726 20.895 63.2626 20.685C63.0526 20.46 62.9476 20.1825 62.9476 19.8525V13.845C62.9476 13.305 62.8726 12.825 62.7226 12.405C62.5726 11.97 62.3101 11.625 61.9351 11.37C61.5751 11.1 61.0651 10.965 60.4051 10.965C59.7901 10.965 59.2501 11.1 58.7851 11.37C58.3201 11.625 57.9526 11.97 57.6826 12.405C57.4276 12.825 57.3001 13.305 57.3001 13.845V19.8525C57.3001 20.1825 57.1876 20.46 56.9626 20.685C56.7526 20.895 56.4901 21 56.1751 21C55.8451 21 55.5751 20.895 55.3651 20.685C55.1551 20.46 55.0501 20.1825 55.0501 19.8525V10.3125C55.0501 9.9825 55.1551 9.7125 55.3651 9.5025C55.5751 9.2775 55.8451 9.165 56.1751 9.165C56.4901 9.165 56.7526 9.2775 56.9626 9.5025C57.1876 9.7125 57.3001 9.9825 57.3001 10.3125V11.5725L56.8951 11.7975C57.0001 11.4675 57.1801 11.1375 57.4351 10.8075C57.7051 10.4625 58.0276 10.1475 58.4026 9.8625C58.7776 9.5625 59.1976 9.33 59.6626 9.165C60.1276 8.985 60.6226 8.895 61.1476 8.895ZM73.5641 8.895C74.3741 8.895 75.0941 8.985 75.7241 9.165C76.3541 9.33 76.8416 9.57 77.1866 9.885C77.5466 10.185 77.7266 10.5375 77.7266 10.9425C77.7266 11.1975 77.6516 11.4375 77.5016 11.6625C77.3516 11.8725 77.1266 11.9775 76.8266 11.9775C76.6166 11.9775 76.4366 11.94 76.2866 11.865C76.1516 11.79 76.0241 11.7 75.9041 11.595C75.7841 11.49 75.6341 11.385 75.4541 11.28C75.2891 11.19 75.0416 11.115 74.7116 11.055C74.3966 10.995 74.1116 10.965 73.8566 10.965C73.0616 10.965 72.3716 11.145 71.7866 11.505C71.2166 11.865 70.7666 12.3525 70.4366 12.9675C70.1216 13.5825 69.9641 14.28 69.9641 15.06C69.9641 15.84 70.1216 16.5375 70.4366 17.1525C70.7666 17.7675 71.2091 18.255 71.7641 18.615C72.3341 18.975 72.9941 19.155 73.7441 19.155C74.1941 19.155 74.5616 19.125 74.8466 19.065C75.1316 18.99 75.3791 18.9 75.5891 18.795C75.8141 18.66 76.0016 18.525 76.1516 18.39C76.3166 18.24 76.5416 18.165 76.8266 18.165C77.1566 18.165 77.4041 18.27 77.5691 18.48C77.7491 18.675 77.8391 18.9225 77.8391 19.2225C77.8391 19.5525 77.6366 19.875 77.2316 20.19C76.8416 20.49 76.3166 20.7375 75.6566 20.9325C74.9966 21.1275 74.2691 21.225 73.4741 21.225C72.3041 21.225 71.2841 20.955 70.4141 20.415C69.5591 19.875 68.8916 19.14 68.4116 18.21C67.9466 17.28 67.7141 16.23 67.7141 15.06C67.7141 13.875 67.9616 12.825 68.4566 11.91C68.9516 10.98 69.6416 10.245 70.5266 9.705C71.4116 9.165 72.4241 8.895 73.5641 8.895ZM85.9516 8.9625C86.9866 8.9625 87.7891 9.1875 88.3591 9.6375C88.9291 10.0725 89.3266 10.665 89.5516 11.415C89.7916 12.165 89.9116 12.99 89.9116 13.89V19.8525C89.9116 20.1825 89.7991 20.46 89.5741 20.685C89.3641 20.895 89.1016 21 88.7866 21C88.4566 21 88.1866 20.895 87.9766 20.685C87.7666 20.46 87.6616 20.1825 87.6616 19.8525V13.89C87.6616 13.365 87.5866 12.885 87.4366 12.45C87.3016 12.015 87.0541 11.67 86.6941 11.415C86.3491 11.16 85.8616 11.0325 85.2316 11.0325C84.6466 11.0325 84.1216 11.16 83.6566 11.415C83.2066 11.67 82.8541 12.015 82.5991 12.45C82.3591 12.885 82.2391 13.365 82.2391 13.89V19.8525C82.2391 20.1825 82.1266 20.46 81.9016 20.685C81.6916 20.895 81.4291 21 81.1141 21C80.7841 21 80.5141 20.895 80.3041 20.685C80.0941 20.46 79.9891 20.1825 79.9891 19.8525V5.4975C79.9891 5.1675 80.0941 4.8975 80.3041 4.6875C80.5141 4.4625 80.7841 4.35 81.1141 4.35C81.4291 4.35 81.6916 4.4625 81.9016 4.6875C82.1266 4.8975 82.2391 5.1675 82.2391 5.4975V11.64L81.8341 11.865C81.9391 11.535 82.1116 11.1975 82.3516 10.8525C82.6066 10.5075 82.9141 10.1925 83.2741 9.9075C83.6491 9.6225 84.0616 9.3975 84.5116 9.2325C84.9616 9.0525 85.4416 8.9625 85.9516 8.9625ZM100.743 21C100.383 21 100.091 20.895 99.8655 20.685C99.6555 20.46 99.5505 20.1825 99.5505 19.8525V6.3975C99.5505 6.0675 99.663 5.7975 99.888 5.5875C100.113 5.3625 100.383 5.25 100.698 5.25H108.303C108.633 5.25 108.903 5.355 109.113 5.565C109.338 5.775 109.451 6.0375 109.451 6.3525C109.451 6.6375 109.338 6.885 109.113 7.095C108.903 7.305 108.633 7.41 108.303 7.41H101.733L101.891 7.185V12.2025L101.756 11.9325H107.291C107.621 11.9325 107.891 12.0375 108.101 12.2475C108.326 12.4575 108.438 12.72 108.438 13.035C108.438 13.32 108.326 13.5675 108.101 13.7775C107.891 13.9875 107.621 14.0925 107.291 14.0925H101.711L101.891 13.9125V19.8525C101.891 20.1825 101.778 20.46 101.553 20.685C101.328 20.895 101.058 21 100.743 21ZM122.992 15.0825C122.992 16.2825 122.729 17.3475 122.204 18.2775C121.679 19.1925 120.967 19.9125 120.067 20.4375C119.167 20.9625 118.154 21.225 117.029 21.225C115.904 21.225 114.892 20.9625 113.992 20.4375C113.092 19.9125 112.372 19.1925 111.832 18.2775C111.307 17.3475 111.044 16.2825 111.044 15.0825C111.044 13.8675 111.307 12.8025 111.832 11.8875C112.372 10.9575 113.092 10.23 113.992 9.705C114.892 9.165 115.904 8.895 117.029 8.895C118.154 8.895 119.167 9.165 120.067 9.705C120.967 10.23 121.679 10.9575 122.204 11.8875C122.729 12.8025 122.992 13.8675 122.992 15.0825ZM120.742 15.0825C120.742 14.2575 120.577 13.545 120.247 12.945C119.917 12.33 119.467 11.85 118.897 11.505C118.342 11.145 117.719 10.965 117.029 10.965C116.339 10.965 115.709 11.145 115.139 11.505C114.569 11.85 114.119 12.33 113.789 12.945C113.459 13.545 113.294 14.2575 113.294 15.0825C113.294 15.8775 113.459 16.5825 113.789 17.1975C114.119 17.8125 114.569 18.2925 115.139 18.6375C115.709 18.9825 116.339 19.155 117.029 19.155C117.719 19.155 118.342 18.9825 118.897 18.6375C119.467 18.2925 119.917 17.8125 120.247 17.1975C120.577 16.5825 120.742 15.8775 120.742 15.0825ZM126.663 21C126.333 21 126.063 20.895 125.853 20.685C125.643 20.46 125.538 20.1825 125.538 19.8525V10.3125C125.538 9.9825 125.643 9.7125 125.853 9.5025C126.063 9.2775 126.333 9.165 126.663 9.165C126.978 9.165 127.241 9.2775 127.451 9.5025C127.676 9.7125 127.788 9.9825 127.788 10.3125V12.8325L127.563 11.865C127.683 11.445 127.863 11.055 128.103 10.695C128.358 10.335 128.658 10.02 129.003 9.75C129.348 9.48 129.731 9.27 130.151 9.12C130.586 8.97 131.036 8.895 131.501 8.895C131.891 8.895 132.228 9 132.513 9.21C132.798 9.42 132.941 9.6825 132.941 9.9975C132.941 10.4025 132.836 10.7025 132.626 10.8975C132.416 11.0775 132.183 11.1675 131.928 11.1675C131.703 11.1675 131.486 11.1225 131.276 11.0325C131.066 10.9275 130.818 10.875 130.533 10.875C130.218 10.875 129.896 10.9575 129.566 11.1225C129.236 11.2875 128.936 11.535 128.666 11.865C128.396 12.18 128.178 12.555 128.013 12.99C127.863 13.425 127.788 13.9125 127.788 14.4525V19.8525C127.788 20.1825 127.676 20.46 127.451 20.685C127.241 20.895 126.978 21 126.663 21ZM147.077 8.175L142.015 20.325C141.925 20.565 141.79 20.7525 141.61 20.8875C141.43 21.0225 141.227 21.09 141.002 21.09C140.672 21.09 140.425 21 140.26 20.82C140.095 20.625 140.005 20.385 139.99 20.1C139.99 19.995 140.012 19.875 140.057 19.74L145.772 5.925C145.877 5.67 146.027 5.475 146.222 5.34C146.432 5.205 146.657 5.145 146.897 5.16C147.122 5.16 147.332 5.2275 147.527 5.3625C147.722 5.4975 147.865 5.685 147.955 5.925L153.602 19.5375C153.662 19.6875 153.692 19.8375 153.692 19.9875C153.692 20.3175 153.58 20.5875 153.355 20.7975C153.145 20.9925 152.905 21.09 152.635 21.09C152.41 21.09 152.2 21.0225 152.005 20.8875C151.825 20.7375 151.69 20.55 151.6 20.325L146.492 8.2425L147.077 8.175ZM142.915 17.13L143.927 14.97H150.295L150.677 17.13H142.915ZM158.071 19.8525C158.071 20.1825 157.958 20.46 157.733 20.685C157.523 20.895 157.261 21 156.946 21C156.631 21 156.361 20.895 156.136 20.685C155.926 20.46 155.821 20.1825 155.821 19.8525V5.4975C155.821 5.1675 155.933 4.8975 156.158 4.6875C156.383 4.4625 156.653 4.35 156.968 4.35C157.298 4.35 157.561 4.4625 157.756 4.6875C157.966 4.8975 158.071 5.1675 158.071 5.4975V19.8525ZM163.85 19.8525C163.85 20.1825 163.737 20.46 163.512 20.685C163.302 20.895 163.04 21 162.725 21C162.41 21 162.14 20.895 161.915 20.685C161.705 20.46 161.6 20.1825 161.6 19.8525V5.4975C161.6 5.1675 161.712 4.8975 161.937 4.6875C162.162 4.4625 162.432 4.35 162.747 4.35C163.077 4.35 163.34 4.4625 163.535 4.6875C163.745 4.8975 163.85 5.1675 163.85 5.4975V19.8525Z"
              />
            </svg>
          </Link>
        </div>
        <ul className="flex items-center justify-between lg:justify-around gap-5 mr-2">
          <Link href="/method">
            <li className="desktop__view_only dark:text-white">Method</li>
          </Link>
          <Link href="/reviews">
            <li className="desktop__view_only dark:text-white">Reviews</li>
          </Link>
          <Link href="/about">
            <li className="desktop__view_only dark:text-white">About</li>
          </Link>
          <Link href="/#contact-me">
            <li className="desktop__view_only dark:text-white">Contact</li>
          </Link>
          <Link href="/booking">
            <div className="extra__small_none flex items-center gap-2 px-2 py-2 lg:py-1 2xl:py-2 dark:bg-white bg-black rounded-lg">
              <div className="cta__pulse_active dark:bg-green-600"></div>
              <li className="lg:text-base text-sm text-white dark:text-black">{ctaText}</li>
            </div>
          </Link>

          <div
          className="text-xl mobile__display_only hover:cursor-pointer"
          role="Menu toggle"
          onClick={handleMenu}
        >
          <span className="sr-only sr-only-focusable">
            Click to toggle navigation menu
          </span>
          {menuOpen ? (
            <span className="text-4xl dark:text-neutral-200">&#215;</span>
          ) : (
            <span className="text-2xl dark:text-neutral-200">&#9776;</span>
          )}
        </div>
        </ul>
        <anim.div
        className="text-neutral-100 dark:text-black flex flex-col items-start pl-[5%] justify-center absolute top-[30vh] xsm:top-[40vh] dark:bg-neutral-300 bg-neutral-900 w-[95%]"
        role="Mobile Navigation Menu"
        variants={menuVariants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
      >
        {menuOpen && (
          <div>
            <ul>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={handleMenuClick}
                className="mt-5 text-4xl"
              >
                <Link href="/">
                  Home &#8594;
                </Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleMenuClick}
                className="mt-5 text-4xl"
              >
                <Link href="/method">
                  Teaching Method &#8594;
                </Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleMenuClick}
                className="mt-5 text-4xl"
              >
                <Link href="/reviews">Reviews &#8594;</Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/about">About me &#8594;</Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/#contact-me">Contact &#8594;</Link>
              </anim.li>
              <anim.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={handleMenuClick}
                className="mt-5 mb-5 text-4xl"
              >
                <Link href="/booking">Book a call &#8594;</Link>
              </anim.li>
            </ul>
          </div>
        )}
      </anim.div>
      </nav>
    // </div>
  );
};

export default Navbar;
