import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react"
import Transition from "@/components/Transition";
import { useScroll, useTransform, motion as a } from "framer-motion";

const Method = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.5]);
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
        <meta property="og:site_name" content="Teaching Method | French For All"/>
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

            <div className="flex items-center justify-center xl:justify-start xl:items-start overflow-hidden rounded-full">
              <a.div
                style={{ scale }}
                transition={{ duration: 0.8 }} // You can adjust the duration as needed
              >
                <Image
                  width={425}
                  height={425}
                  className="rounded-full"
                  id="header__img_1"
                  src="/img__lavander.jpg"
                  alt="A field of lavender"
                />
              </a.div>
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
              <p className="dark:text-neutral-200">Scroll</p>
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
        <div className="footer__img_grid gap-5 mt-20 xl:mt-0">
          <Image 
          width={350}
          height={350}
          src="/img__paris_museum.jpg"
          className={(
            "duration-700 ease-in-out footer__img_settings",
            isLoading
            ? "bg-neutral-100 dark:bg-neutral-800 rounded-2xl blur-2xl grayscale"
            : "bg-transparent dark:bg-transparent blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
          id="footer__img_2"
          alt="The eiffel tower"
          />
        </div>
      </section>
      </div>
    </Transition>
  );
};

export default Method;
