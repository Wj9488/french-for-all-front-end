import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Method = () => {
  return (
    <div>
      <Head>
        <title>French For All | Method</title>
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
          content="/ffa__icon.png"
        />
      </Head>
      <div className="overflow-x-hidden ml-auto mr-auto app__width">
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
                My teaching method
              </h1>
              <p className="text-center mt-5 dark:text-neutral-200">
                Find out more about how the methods I use to teach help you
                achieve your full potential and ace your French goals.
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

        <section className="mt-20 mb-20 flex-row xl:flex items-center gap-5 justify-between">
          <div className="bg__app_green p-4 rounded-2xl xl:mt-0 mt-5">
            <p className="">
              01
            </p>
            <div className="about__divider_line bg-black mt-2"></div>
            <h2 className="text-3xl xl:text-4xl mt-2 mb-2 font-semibold ">
              Skype Lessons
            </h2>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; Very flexible timing, held over Skype or Zoom 
                meeting.
            </p>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; Typically lasts 1 hour.
            </p>
            <p className="rounded-xl border border-black mt-2 mb-5 p-4 xl:p-2">
                &#10003; Pay as you go pricing, you'll only pay for the 
                lessons that you take with me.
            </p>
          </div>
          <div className="bg__app_green p-4 rounded-2xl xl:mt-0 mt-5">
            <p className="">
              02
            </p>
            <div className="about__divider_line bg-black mt-2"></div>
            <h3 className="text-3xl xl:text-4xl mt-2 mb-2 font-semibold ">
              In person lessons
            </h3>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; Quiet and comfortable environment in the countryside. 
            </p>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; Typically lasts anywhere from 1 hour to 2 hours 
                depending on what you are looking for. 
            </p>
            <p className="rounded-xl border border-black mt-2 mb-5  p-4 xl:p-2">
                &#10003; Pay as you go pricing, you'll only pay for the 
                lessons that you take with me. 
            </p>
          </div>
          <div className="bg__app_green p-4 rounded-2xl xl:mt-0 mt-5">
            <p className="">
              03
            </p>
            <div className="about__divider_line bg-black mt-2"></div>
            <h4 className="text-3xl xl:text-4xl mt-2 mb-2 font-semibold ">
              Whatsapp support
            </h4>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; An entirely verbal lesson where you'll work primarily on speaking. 
            </p>
            <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
                &#10003; Typically lasts 30 minutes.
            </p>
            <p className="rounded-xl border border-black mt-2 mb-5  p-4 xl:p-2">
                &#10003; Pay as you go pricing, you'll only pay for the lessons that 
                you take with me.
            </p>
          </div>
        </section>

        <section className="flex-row xl:flex items-start gap-10 text-center xl:text-left xl:items-center justify-around">
        <div className="mt-20 mb-20  flex-row xl:flex items-center justify-center xl:justify-between">
          <div className="xl:w-4/12">
            <h5 className="text-4xl xl:text-5xl font-semibold dark:text-neutral-200">
              What sets me apart from other tutors? 
            </h5>
            <div className="about__divider_line bg-black dark:bg-white mt-4 mb-2"></div>
            <p className="text-xl dark:text-neutral-200">
              This could be a small piece of short information that the user 
              should read.
            </p>
            <Link href="/sign-up">
              <div className="flex items-center xl:justify-start justify-center">
                <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center xl:justify-start gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                  <div className="cta__pulse_active dark:bg-green-600"></div>
                  Book a free call
                </button>
              </div>
            </Link>
          </div>
          <div className="xl:w-7/12 xl:gap-5 flex-row xl:flex xl:justify-around items-start justify-center mt-5 xl:mt-0">
            <div>
              <p className="dark:text-neutral-200">
                This is an area that should be filled with some text describing in more depth 
                what makes you a good tutor. What sets you apart from other tutors in the area? 
                How are you able to deliver a more valuable experience than your competition. 
                Try to keep it short and concise so that the user actually reads the text. Did you know that most of the 
                time, when presented with a large text section, the user won't read much or any of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-20 bg-neutral-600 rounded-2xl dark:bg-neutral-700 p-4">
        <div className="flex-row items-center justify-center">
          <p className="bg__app_green p-2 rounded-2xl ml-auto mr-auto w-4/12 xl:w-1/12 text-center text-sm mb-3 mt-3">
              Sarah Smith
          </p>
          <p className="text-3xl xl:text-4xl text-center col__app_green mb-6">
            "Valérie's lessons are fantastic, I always look forward to it. Her 
            teaching style is the has helped me improve my skills so much!"
          </p>
        </div>
      </section>

        <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl xl:text-5xl text-center xl:text-left">
            Let's level up your French abilities
          </h6>
          <Link href="/sign-up">
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
  );
};

export default Method;
