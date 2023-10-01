import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion as a} from "framer-motion"
import {useState} from "react"
import Transition from "@/components/Transition";

const Method = () => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Transition>
      <Head>
        <title>Proven teaching methods - Friendly & experienced native speaker | French For All</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta
          property="og:description"
          content="How I use proven teaching methods to help you drastically improve your French ability."
        />
        <meta
          name="description"
          content="How I use proven teaching methods to help you drastically improve your French ability."
        />
        <meta
          property="og:image"
          content="/ffa__og_image.png"
        />
        <meta 
         name="keywords"
         content="french lessons, online french lessons, french lessons near me, french lessons london, french lessons sussex, 
         french lesson, french online lessons, french classes near me, learn french online, french for all"
        />
      </Head>
      <div className="overflow-x-hidden ml-auto mr-auto app__width">
        <section className="mt-20 mb-20 flex items-center justify-center">
          <div className="flex-row xl:flex items-center justify-around gap-5">
            <div className="flex-row xl:w-6/12 mb-20 xl:mb-0">
              <h1 className="font__quicksand xl:text-5xl lg:text-left text-4xl text-center font-semibold dark:text-neutral-200">
                The way I teach
              </h1>
              <p className="text-center lg:text-left mt-5 dark:text-neutral-200">
                Find out more about my methods and how I'll be able to help you 
                achieve your goals.
              </p>
            </div>

            <div className="flex items-center justify-center xl:justify-start xl:items-start">
              <Image
                width={225}
                height={225}
                className={(
                  "duration-700 ease-in-out",
                  isLoading
                  ? "bg-neutral-100 dark:bg-neutral-800 rounded-2xl blur-2xl grayscale"
                  : "bg-transparent dark:bg-transparent blur-0 grayscale-0 rounded-full"
                )}
                onLoadingComplete={() => setLoading(false)}
                id="header__img_1"
                src="/img__lavander.jpg"
                alt="A lavander field in France"
              />
            </div>
            
          </div>
        </section>

        <section className="explore__prompt_height desktop__view_only">
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 justify-around">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  className="stroke-black dark:stroke-neutral-100"
                />
                <path
                  d="M19.6464 26.3536C19.8417 26.5488 20.1583 26.5488 20.3536 26.3536L23.5355 23.1716C23.7308 22.9763 23.7308 22.6597 23.5355 22.4645C23.3403 22.2692 23.0237 22.2692 22.8284 22.4645L20 25.2929L17.1716 22.4645C16.9763 22.2692 16.6597 22.2692 16.4645 22.4645C16.2692 22.6597 16.2692 22.9763 16.4645 23.1716L19.6464 26.3536ZM19.5 12V26H20.5V12H19.5Z"
                  className="fill-black dark:fill-white"
                />
              </svg>
              <p className="dark:text-neutral-200">Explore</p>
            </div>
          </div>
        </section>

        <section className="flex-row xl:flex items-start gap-10 text-center xl:text-left xl:items-center justify-around">
        <div className="mt-20 mb-20  flex-row xl:flex items-center justify-center xl:justify-between">
          <div className="xl:w-4/12">
            <h5 className="text-4xl 2xl:text-5xl font-semibold dark:text-neutral-200">
              What sets me apart from other tutors? 
            </h5>
            <div className="about__divider_line bg-black dark:bg-white mt-4 mb-2"></div>
            <Link href="/booking">
              <div className="flex items-center xl:justify-start justify-center">
                <button className="mt-2 xl:mt-5 font-medium text-white dark:text-black flex items-center xl:justify-start gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                  <div className="cta__pulse_active dark:bg-green-600"></div>
                  Book a free call
                </button>
              </div>
            </Link>
          </div>
          <div className="xl:w-7/12 xl:gap-5 flex-row xl:flex xl:justify-around items-start justify-center mt-5 xl:mt-0">
            <div>
              <p className="dark:text-neutral-200">
                I have over 25 years' experience working with adults of all ages and all levels. Their drive to learn 
                French has varied from student to student - some have wanted to learn for holidays, others were moving to France and 
                many have done so to fulfill a personal ambition. 
                <br />
                <br />
                I have coached A level and GCSE students and 
                I have also helped University students in their first and second year.
                <br />
                <br />
                I understand that learning a language can initially seem a little daunting but I will 
                support you with a clear and thorough, step by step approach. In each session my aim is to 
                make you feel confident and able to use the tools we have learnt in a way that is relavent 
                to you.   
                <br />
                <br />
                Most find the biggest step is just deciding to give it a go! 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-20 bg-red-400 rounded-2xl dark:bg-neutral-700 p-4">
        <div className="flex-row items-center justify-center">
          <p className="landing__gradient_reducedOpacity p-2 rounded-2xl ml-auto mr-auto w-5/12 xl:w-2/12 text-center text-sm mb-3 mt-3">
              Nicky Huckley
          </p>
          <p className="text-3xl 2xl:text-4xl text-center text-white mb-6">
            "I have no hesitation in recommending Valerie as a tutor to anyone, whatever level they are currently at."
          </p>
        </div>
      </section>

      <section className="mt-20 mb-20 flex-row lg:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center lg:text-left xl:w-10/12">
            Get the support you need.
          </h6>
          <Link href="/booking">
            <div className="flex items-center justify-center lg:justify-start lg:justify-left">
              <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                <div className="cta__pulse_active dark:bg-green-600"></div>
                Get started
              </button>
            </div>
          </Link>
        </div>
        <div className="mt-20 xl:mt-0">
        <svg
            width="334"
            height="186"
            viewBox="0 0 334 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M169.5 1.50015C113 10.0001 87.3335 32.1668 49.0002 47.5001C10.6669 62.8335 41.5845 85.8618 49.0002 108.5C65.0593 157.525 113.48 163.062 164 173.5C226.223 186.356 299.781 202.74 324 144C340.826 103.191 339 44.8335 298 34.0001C257 23.1668 226 -6.99985 169.5 1.50015Z"
              fill="#D9D9D9"
            />
            <circle
              cx="29.3989"
              cy="161.399"
              r="9.5"
              transform="rotate(49.2164 29.3989 161.399)"
              fill="#D9D9D9"
            />
            <circle
              cx="52.9515"
              cy="146.951"
              r="13.4368"
              transform="rotate(49.2164 52.9515 146.951)"
              fill="#D9D9D9"
            />
            <circle cx="7.5" cy="174.5" r="7.5" fill="#D9D9D9" />
            <path
              d="M74.0668 113L81.3111 69.3636H97.2912C100.388 69.3636 102.866 69.875 104.727 70.8977C106.602 71.9062 107.895 73.277 108.605 75.0099C109.315 76.7287 109.486 78.6676 109.116 80.8267C108.818 82.6449 108.229 84.1719 107.348 85.4077C106.482 86.6435 105.43 87.6378 104.195 88.3906C102.959 89.1435 101.659 89.6903 100.295 90.0312L100.21 90.4574C101.631 90.5284 102.959 90.9972 104.195 91.8636C105.445 92.7159 106.396 93.9304 107.05 95.5071C107.703 97.0838 107.852 99.0014 107.497 101.26C107.114 103.49 106.247 105.493 104.898 107.268C103.563 109.03 101.723 110.429 99.3793 111.466C97.0355 112.489 94.1733 113 90.7926 113H74.0668ZM81.5881 107.354H91.0909C94.2443 107.354 96.6023 106.743 98.1648 105.521C99.7415 104.3 100.693 102.773 101.02 100.94C101.233 99.5625 101.084 98.2983 100.572 97.1477C100.075 95.9972 99.2372 95.081 98.0582 94.3991C96.8935 93.7173 95.4304 93.3764 93.669 93.3764H83.9318L81.5881 107.354ZM84.8054 88.2415H93.6051C95.0824 88.2415 96.4602 87.9574 97.7386 87.3892C99.0313 86.821 100.104 86.0185 100.956 84.9815C101.822 83.9446 102.362 82.7301 102.575 81.3381C102.888 79.5199 102.511 78.0071 101.446 76.7997C100.395 75.5781 98.5696 74.9673 95.9702 74.9673H86.9787L84.8054 88.2415ZM126.748 113.661C123.637 113.661 121.038 112.95 118.95 111.53C116.862 110.095 115.391 108.092 114.539 105.521C113.701 102.936 113.559 99.9318 114.113 96.5085C114.653 93.1562 115.739 90.2301 117.373 87.7301C119.021 85.2301 121.08 83.2912 123.552 81.9134C126.038 80.5355 128.8 79.8466 131.84 79.8466C134.951 79.8466 137.543 80.5639 139.617 81.9986C141.705 83.4332 143.175 85.4432 144.028 88.0284C144.88 90.6136 145.029 93.625 144.475 97.0625C143.935 100.386 142.835 103.298 141.173 105.798C139.525 108.284 137.465 110.216 134.994 111.594C132.522 112.972 129.773 113.661 126.748 113.661ZM127.11 108.312C129.156 108.312 130.938 107.773 132.458 106.693C133.992 105.614 135.242 104.179 136.208 102.389C137.174 100.599 137.835 98.6392 138.19 96.5085C138.516 94.4489 138.509 92.5668 138.168 90.8622C137.842 89.1435 137.131 87.7656 136.038 86.7287C134.944 85.6918 133.424 85.1733 131.478 85.1733C129.433 85.1733 127.636 85.7202 126.087 86.8139C124.553 87.8935 123.303 89.3352 122.337 91.1392C121.386 92.9432 120.739 94.9105 120.398 97.0412C120.072 99.0866 120.072 100.969 120.398 102.688C120.725 104.392 121.435 105.756 122.529 106.778C123.623 107.801 125.15 108.312 127.11 108.312ZM158.554 93.5682L155.358 113H148.987L154.441 80.2727H160.556L159.662 85.5994H160.066C161.103 83.8523 162.517 82.4602 164.306 81.4233C166.11 80.3722 168.241 79.8466 170.699 79.8466C172.914 79.8466 174.775 80.3153 176.281 81.2528C177.801 82.1761 178.873 83.554 179.498 85.3864C180.137 87.2187 180.237 89.4844 179.797 92.1832L176.302 113H169.931L173.277 92.9503C173.66 90.5781 173.348 88.7244 172.339 87.3892C171.345 86.0398 169.761 85.3651 167.588 85.3651C166.11 85.3651 164.74 85.6847 163.475 86.3239C162.225 86.9631 161.167 87.9006 160.301 89.1364C159.449 90.358 158.866 91.8352 158.554 93.5682ZM190.279 80.2727H196.65L190.876 115.131C190.507 117.318 189.797 119.165 188.745 120.67C187.694 122.176 186.331 123.32 184.654 124.101C182.978 124.882 181.011 125.273 178.752 125.273C178.539 125.273 178.333 125.273 178.135 125.273C177.922 125.273 177.701 125.266 177.474 125.251L178.39 119.776C178.575 119.776 178.745 119.776 178.902 119.776C179.058 119.776 179.228 119.776 179.413 119.776C180.919 119.776 182.083 119.371 182.907 118.561C183.717 117.751 184.257 116.594 184.527 115.088L190.279 80.2727ZM194.647 75.223C193.554 75.223 192.623 74.8537 191.856 74.1151C191.103 73.3622 190.755 72.4673 190.812 71.4304C190.855 70.3793 191.288 69.4844 192.112 68.7457C192.936 67.9929 193.902 67.6165 195.01 67.6165C196.118 67.6165 197.048 67.9929 197.801 68.7457C198.554 69.4844 198.902 70.3793 198.845 71.4304C198.802 72.4673 198.369 73.3622 197.545 74.1151C196.721 74.8537 195.755 75.223 194.647 75.223ZM213.701 113.661C210.59 113.661 207.991 112.95 205.903 111.53C203.815 110.095 202.344 108.092 201.492 105.521C200.654 102.936 200.512 99.9318 201.066 96.5085C201.606 93.1562 202.692 90.2301 204.326 87.7301C205.974 85.2301 208.033 83.2912 210.505 81.9134C212.991 80.5355 215.754 79.8466 218.793 79.8466C221.904 79.8466 224.496 80.5639 226.57 81.9986C228.658 83.4332 230.129 85.4432 230.981 88.0284C231.833 90.6136 231.982 93.625 231.428 97.0625C230.888 100.386 229.788 103.298 228.126 105.798C226.478 108.284 224.418 110.216 221.947 111.594C219.475 112.972 216.727 113.661 213.701 113.661ZM214.063 108.312C216.109 108.312 217.891 107.773 219.411 106.693C220.945 105.614 222.195 104.179 223.161 102.389C224.127 100.599 224.788 98.6392 225.143 96.5085C225.469 94.4489 225.462 92.5668 225.121 90.8622C224.795 89.1435 224.085 87.7656 222.991 86.7287C221.897 85.6918 220.377 85.1733 218.431 85.1733C216.386 85.1733 214.589 85.7202 213.04 86.8139C211.506 87.8935 210.256 89.3352 209.29 91.1392C208.339 92.9432 207.692 94.9105 207.352 97.0412C207.025 99.0866 207.025 100.969 207.352 102.688C207.678 104.392 208.388 105.756 209.482 106.778C210.576 107.801 212.103 108.312 214.063 108.312ZM258.909 99.4276L262.105 80.2727H268.497L263.042 113H256.778L257.737 107.332H257.396C256.373 109.08 254.924 110.536 253.049 111.7C251.189 112.851 249.029 113.426 246.572 113.426C244.47 113.426 242.687 112.964 241.224 112.041C239.775 111.104 238.745 109.719 238.135 107.886C237.524 106.054 237.439 103.788 237.879 101.089L241.373 80.2727H247.744L244.399 100.322C244.044 102.553 244.377 104.328 245.4 105.649C246.423 106.97 247.914 107.631 249.875 107.631C251.068 107.631 252.304 107.332 253.582 106.736C254.86 106.139 255.99 105.237 256.97 104.03C257.964 102.822 258.61 101.288 258.909 99.4276ZM271.602 113L277.057 80.2727H283.214L282.341 85.4716H282.682C283.563 83.7102 284.848 82.3253 286.538 81.3168C288.229 80.294 290.033 79.7827 291.95 79.7827C292.362 79.7827 292.831 79.7969 293.357 79.8253C293.882 79.8395 294.308 79.875 294.635 79.9318L293.612 86.0256C293.371 85.9545 292.93 85.8764 292.291 85.7912C291.652 85.6918 290.991 85.642 290.31 85.642C288.818 85.642 287.433 85.9616 286.155 86.6009C284.876 87.2259 283.804 88.0994 282.938 89.2216C282.071 90.3295 281.51 91.5937 281.254 93.0142L277.973 113H271.602ZM310.024 69.3636L304.314 100.45H298.433L303.014 69.3636H310.024ZM299.818 113.405C298.625 113.405 297.63 112.993 296.835 112.169C296.054 111.345 295.67 110.337 295.684 109.143C295.699 107.964 296.139 106.977 297.005 106.182C297.886 105.372 298.909 104.967 300.074 104.967C301.238 104.967 302.233 105.379 303.056 106.203C303.88 107.027 304.264 108.007 304.207 109.143C304.164 109.939 303.937 110.663 303.525 111.317C303.127 111.956 302.602 112.467 301.949 112.851C301.295 113.22 300.585 113.405 299.818 113.405Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
      </div>
    </Transition>
  );
};

export default Method;
