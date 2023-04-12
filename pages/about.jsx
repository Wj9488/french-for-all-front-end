import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const About = () => {
  return (
    <div>
      <Head>
        <title>About me - Friendly & experienced native speaker | French For All</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta
          property="og:description"
          content="Find out more about why I love teaching French and my experience from 25+ years of teaching."
        />
        <meta
          name="description"
          content="Find out more about why I love teaching French and my experience from 25+ years of teaching."
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
      <div className="ml-auto mr-auto app__width">
      <section className="mt-20 mb-20 flex items-center justify-center">
          <div className="flex-row xl:flex items-center justify-around gap-5">
            <div className="desktop__view_only tablet__view_none">
              <Image
                width={250}
                height={250}
                className="header__image_settings rounded-full"
                src="/img__eiffel_tower.jpg"
                
              />
              <Image
                
                width={200}
                height={200}
                className="header__image_settings mt-20 rounded-full w-8/12"
                src="/img__french_cafe.jpg"
              />
            </div>
            
            <div className="flex-row xl:w-6/12 mb-20 xl:mb-0">
              <h1 className="font__quicksand xl:text-5xl text-4xl text-center font-semibold dark:text-neutral-200">
                About me
              </h1>
              <p className="text-center mt-5 dark:text-neutral-200">
                Find out more about me and why I love teaching French.
              </p>
            </div>

            <div className="flex items-center justify-center xl:justify-start xl:items-start">
              <Image
                width={225}
                height={225}
                className="rounded-full"
                id="header__img_1"
                src="/img__french_cafe_2.jpg"
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
          <p className="dark:text-neutral-200 text-xl xl:text-left text-center">
            I am French and I've lived in the UK for 30 years, 25 of which have been spent teaching. I have found it 
            very rewarding taking each of my students on their individual learning journeys and watching them become confident
            in all the facets of the language. 
            <br />
            <br />
            I am very patient and encouraging and it is important to me that my students feel at ease all the time. I always suggest a 
            free, informal introductory meeting before we start. Just tap on the "Call" button to navigate to my bookings 
            page.
          </p>
        </section>

        <section className="mt-20 mb-20 bg-neutral-600 rounded-2xl dark:bg-neutral-700 p-4">
          <div className="flex-row items-center justify-center">
            <p className="landing__gradient_reducedOpacity p-2 rounded-2xl ml-auto mr-auto w-5/12 xl:w-2/12 text-center text-sm mb-3 mt-3">
                Rachel Wilkey
            </p>
            <p className="text-3xl xl:text-4xl text-white text-center mb-6">
              "Valérie was an understanding teacher who made the lessons enjoyable."
            </p>
          </div>
        </section>

        <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center xl:text-left xl:w-10/12">
            Get the support you need.
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
          width={250}
          height={250}
          src="/img__french_cafe.jpg"
          className="footer__img_settings"
          id="footer__img_1"
          
          />
          <Image 
          width={250}
          height={250}
          src="/img__eiffel_tower.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          
          />
          <Image 
          width={250}
          height={250}
          src="/img__french_cafe_2.jpg"
          id="footer__img_3"
          
          />
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default About; 