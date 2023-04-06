import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const About = () => {
  return (
    <div>
      <Head>
        <title>French For All | About</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta
          property="og:description"
          content="Get help from a professional native speaker with 1 to 1 lessons tailored to you.
          I'm dedicated to helping you improve your French abilities."
        />
        <meta
          name="description"
          content="Get help from a local professional native speaker with 1 to 1 lessons tailored to you.
          I'm dedicated to helping you improve your French abilities."
        />
        <meta
          property="og:image"
          content="/ffa__og_image.png"
        />
      </Head>
      <div className="ml-auto mr-auto app__width">
      <section className="mt-20 mb-20 flex items-center justify-center">
          <div className="flex-row xl:flex items-center justify-around gap-5">
            <div className="desktop__view_only tablet__view_none">
              <Image
                width={350}
                height={350}
                className="header__image_settings rounded-full"
                src="/footer__img_grid_1.png"
                
              />
              <Image
                width={250}
                height={250}
                className="header__image_settings mt-20 rounded-full w-8/12"
                src="/footer__img_grid_3.png"
                
              />
            </div>
            <div className="flex-row xl:w-6/12 mb-20 xl:mb-0">
              <h1 className="font__quicksand xl:text-5xl text-4xl text-center font-semibold dark:text-neutral-200">
                About me
              </h1>
              <p className="text-center mt-5 dark:text-neutral-200">
                Find out more about me and why I love teaching 
                French
              </p>
            </div>

            <div className="flex items-center justify-center xl:justify-start xl:items-start">
              <Image
                width={350}
                height={350}
                className="footer__image_settings rounded-full"
                id="header__img_1"
                src="/footer__img_2.jpg"
                
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

        <section className="mt-20 mb-20">
          <p className="dark:text-neutral-200 text-xl text-center">
            This is the about section, here should be a quick description of who you are and what you do. 
            It shouldn't be too long but should also explain how you started the business and for what purpose. 
            Go through and describe important elements of your businesses' story. 
          </p>
        </section>

        <section className="mt-20 mb-20 bg-neutral-600 rounded-2xl dark:bg-neutral-700 p-4">
          <div className="flex-row items-center justify-center">
            <p className="bg__app_blue p-2 rounded-2xl ml-auto mr-auto w-4/12 xl:w-1/12 text-center text-sm mb-3 mt-3">
                Jane Brown
            </p>
            <p className="text-3xl xl:text-4xl text-center col__app_blue mb-6">
              "Valérie's lessons are fantastic, I always look forward to it. Her 
              teaching style has helped me improve my skills so much!"
            </p>
          </div>
        </section>

        <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center xl:text-left">
            Let's level up your French abilities
          </h6>
          <Link href="/booking">
            <div className="flex items-center justify-center xl:justify-start xl:justfiy-left">
              <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                <div className="cta__pulse_active dark:bg-green-600"></div>
                Get started
              </button>
            </div>
          </Link>
        </div>
        <div className="footer__img_grid gap-5 mt-20 xl:mt-0">
          <Image 
          width={300}
          height={300}
          src="/footer__img_grid_1.png"
          className="footer__img_settings "
          id="footer__img_1"
          
          />
          <Image 
          width={300}
          height={300}
          src="/footer__img_2.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          
          />
          <Image 
          width={300}
          height={300}
          src="/footer__img_grid_3.png"
          id="footer__img_3"
          
          />
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default About; 