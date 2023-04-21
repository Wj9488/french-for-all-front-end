import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion as a } from "framer-motion";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const toggleFaq = (qIndex) => {
    if (selected == qIndex) {
      return setSelected(null);
    }

    setSelected(qIndex);
  };

  const faqData = [
    {
      question: "Can I do less or more than an hour?",
      answer:
        "Yes of course, you can choose to do a shorter 45 minute session for £23 or a longer hour and a quarter session for £37.",
    },
    // {
    //   question: "?",
    //   answer:
    //     "While I prefer to stick to the pay as you go system that I work on, I would be happy to consider this on a case by case basis. Book your free call so we can discuss this further.",
    // },
    {
      question: "How many lessons will I need?",
      answer:
        "It is possible to cover a lot in a 1:1 session so I usually recommend one lesson a week. You can book more lessons if you have a specific deadline that you're working towards",
    },
    {
      question:
        "I've found learning French daunting and I'm worried that I won't be able to do it.",
      answer:
        "A lot of people who come to me have had unsuccessful previous experiences learning French. It is my job to make the lessons enjoyable for you and to help you progress at your own pace... you're not alone in feeling this and I hope you'll read some of the testimonials from my other students.",
    },
    {
      question: "Am I too old to start learning French?",
      answer:
        "I've had students from age 5 to in their 80's... learning a language is a wonderful exercise for the brain and you're never too old to start.",
    },
  ];

  return (
    <a.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="overflow-x-hidden ml-auto mr-auto app__width"
    >
      <Head>
        <title>
          Online French Lessons - Friendly & experienced native speaker | French
          For All
        </title>
        <link rel="shortcut icon" href="/ffa__icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Get help from a professional native speaker with lessons personalised to you.
          Learn French online from the comfort of your home."
        />
        <meta
          name="description"
          content="Get help from a local professional native speaker with 
          lessons personalised to you. Learn French online from the comfort of your home."
        />
        <meta property="og:image" content="/ffa__og_image.png" />
        <meta
          name="keywords"
          content="french lessons, online french lessons, french lessons near me, french lessons london, french lessons sussex, 
         french lesson, french online lessons, french classes near me, learn french online, french for all"
        />
      </Head>

      <header className="header__height flex items-center justify-center">
        <a.div
          id="header__bg_img"
          initial={{ opacity: 0 }}
          animate={{ opacity: .8 }}
          transition={{ duration: 1 }}
        ></a.div>
        <div className="flex-row lg:flex lg:flex-between lg:items-center xl:gap-10 z-10">
          <div className="lg:w-7/12">
            <div className="font-semibold xl:text-5xl text-4xl xl:w-11/12">
              <h1 className="dark:text-neutral-200 text-4xl sm:text-5xl 2xl:text-6xl text-center lg:text-left">
                French language tuition with a native speaker - personalised
                lessons for all levels
              </h1>
            </div>
            <p className="dark:text-neutral-200 mt-5 text-xl text-center lg:text-left">
              With 25 years of teaching experience, I've helped hundreds of
              people gain confidence to learn French.
            </p>
            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <Link href="/booking">
                <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                  <div className="cta__pulse_active dark:bg-green-600"></div>
                  Help me improve
                </button>
              </Link>
              <Link href="/method">
                <button className="bg-neutral-200 dark:bg-neutral-700 dark:text-white py-2 px-4 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded xl:mt-5 mt-3 font-medium">
                  Find out how &#8594;
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center xl:items-center">
            <Image
              src="/header__main_image_v2_nbg.png"
              alt="Valerie Jones - Tutor"
              width={600}
              height={600}
              className="mt-10 xl:mt-0 image__settings"
            />
          </div>
        </div>
      </header>

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

      <section className="flex-row mt-20 md:mt-0 lg:mt-20 lg:mb-20 lg:gap-5 xl:gap-0 lg:flex items-start text-center lg:text-left justify-between">
        <div className="mb-10 xl:mb-5 lg:w-4/12 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="27" rx="5" fill="#0050a4 " />
              <path
                d="M4 15.5L8.73684 21L16.1053 10.5L19.7895 13.5L24 8"
                stroke="white"
                stroke-width="1.3"
              />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Friendly support
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            Learning a language can be daunting and I will be there to help you
            every step of the way.
          </p>
        </div>

        <div className="mb-10 xl:mb-5 lg:w-4/12 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="28"
                height="27"
                rx="5"
                className="dark:fill-neutral-900 fill-neutral-50"
              />
              <ellipse
                cx="14"
                cy="9"
                rx="5"
                ry="6"
                className="dark:fill-white fill-black"
              />
              <path
                d="M21.1506 15.8182C17.8587 14.7273 10.7278 14.7273 6.8879 15.8182C3.04795 16.9091 4.14507 24 4.14507 24H23.8934C23.8934 24 24.8301 17.0375 21.1506 15.8182Z"
                className="dark:fill-white fill-black"
              />
              <ellipse
                cx="1"
                cy="3.5"
                rx="1"
                ry="3.5"
                transform="matrix(-1 0 0 1 15 15)"
                className="fill-white dark:fill-black"
              />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Expert guidance
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            I understand the struggles of learning French and where most people
            go wrong. I keep you on track and make sure you progress properly at
            your own pace.
          </p>
        </div>

        <div className="mb-10 xl:mb-5 lg:w-4/12 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#ef4135 " />
              <circle cx="14" cy="14" r="11" className="fill-neutral-50" />
              <circle cx="14" cy="14" r="8" fill="#ef4135 " />
              <circle cx="14" cy="14" r="3" className="fill-neutral-50" />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Personalised lessons
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            Each lesson is tailored specifically for you and is designed to give
            you the tools to enable you to speak with confidence.
          </p>
        </div>
      </section>

      <section className="mt-20 mb-20 flex-row xl:flex items-center gap-5 justify-between">
        <div className="bg__ff_blue text-white p-4 xl:w-10/12 xl:min-h-[45vh] 2xl:min-h-[35vh] rounded-2xl xl:mt-0 mt-5">
          <h2 className="text-3xl 2xl:text-4xl mt-2 mb-5 font-semibold ">
            Skype / Zoom Lessons
          </h2>
          <p className="rounded-xl border border-white mt-2 p-4 xl:p-2">
            &#10003; Very flexible timing, held over Skype or Zoom meeting.
          </p>
          <p className="rounded-xl border border-white mt-2 p-4 xl:p-2">
            &#10003; Typically lasts an hour with the option of doing 45 minute
            sessions.
          </p>
          <p className="rounded-xl border border-white mt-2 mb-5 p-4 xl:p-2">
            &#10003; Pay as you go pricing - you'll only pay for the lessons
            that you take with me.
          </p>
        </div>
        <div className="bg-neutral-200 p-4 xl:w-10/12 xl:min-h-[45vh] 2xl:min-h-[35vh] rounded-2xl xl:mt-0 mt-5">
          <h3 className="text-3xl 2xl:text-4xl mt-2 mb-5 font-semibold ">
            In person lessons
          </h3>
          <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
            &#10003; In a quiet & comfortable environment in the countryside.
          </p>
          <p className="rounded-xl border border-black mt-2 p-4 xl:p-2">
            &#10003; Typically lasts an hour with the option of doing 45 minute
            sessions.
          </p>
          <p className="rounded-xl border border-black mt-2 mb-5  p-4 xl:p-2">
            &#10003; Pay as you go pricing - you'll only pay for the lessons
            that you take with me.
          </p>
        </div>
        <div className="bg__ff_red text-white p-4 xl:w-10/12 xl:min-h-[45vh] 2xl:min-h-[35vh] rounded-2xl xl:mt-0 mt-5">
          <h4 className="text-3xl 2xl:text-4xl mt-2 mb-5 font-semibold ">
            Whatsapp support
          </h4>
          <p className="rounded-xl border border-white mt-2 p-4 xl:p-2">
            &#10003; Between lessons you'll be able to practive what you've
            learnt by sending me messages.
          </p>
          <p className="rounded-xl border border-white mt-2 p-4 xl:p-2">
            &#10003; Your messages will be sent back to you corrected.
          </p>
          <p className="rounded-xl border border-white mt-2 mb-5  p-4 xl:p-2">
            &#10003; This service is <span className="font-semibold">free</span>{" "}
            and is part of your tuition fee.
          </p>
        </div>
      </section>

      <section className="flex-row lg:flex items-start gap-10 text-center lg:text-left lg:items-center justify-around">
        <div className="mt-20 mb-20  flex-row xl:flex items-center justify-center xl:justify-between">
          <div className="xl:w-4/12">
            <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold dark:text-neutral-200">
              About my lessons
            </h3>
            <div className="about__divider_line bg-black dark:bg-white mt-4 mb-2"></div>
            <p className="text-xl dark:text-neutral-200">
              Join countless other students that I've helped and improve your
              French.
            </p>
            <Link href="/booking">
              <div className="flex items-center lg:justify-start justify-center">
                <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center lg:justify-start gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                  <div className="cta__pulse_active dark:bg-green-600"></div>
                  Help me improve
                </button>
              </div>
            </Link>
          </div>
          <div className="xl:w-7/12 xl:gap-5 flex-row xl:flex xl:justify-around items-start justify-center mt-5 xl:mt-0">
            <div>
              <p className="rounded-xl border border-black p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; A friendly and supportive way of learning French.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Competitive pricing.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Flexible, if you need to cancel we'll try to
                reschedule.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Pay as you go pricing with no minimum booking.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Available online over Skype or Zoom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 mt-20 landing__gradient dark:opacity-80 rounded-2xl p-4 xl:p-6">
        <h4 className="text-4xl 2xl:text-5xl font-semibold text-center bg-neutral-700 text-white p-4 rounded-2xl">
          A few success stories
        </h4>
        <div className="flex-row lg:flex flex-1 items-center justify-center gap-5 lg:justify-around mt-5 mb-5">
          <Link href="/reviews">
            <div className="hover:scale-105 transition-all bg-neutral-700 lg:min-h-[35vh] xl:min-h-[45vh] 2xl:min-h-[35vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
              <p className="bg-white p-2 rounded-2xl w-6/12 text-center text-xs">
                Barry Langridge
              </p>
              <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
                "Valérie is a born teacher... She always accompanies her
                students warmly but firmly; encouraging success but very
                clear-eyed about weaknesses"
              </p>
              <div></div>
              <div className="flex items-center justify-between mt-5 xl:mt-3 bg-neutral-700 p-2">
                <p className="text-white">Read testimonial</p>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="white" />
                  <path
                    d="M18.3536 13.3536C18.5488 13.1583 18.5488 12.8417 18.3536 12.6464L15.1716 9.46447C14.9763 9.2692 14.6597 9.2692 14.4645 9.46447C14.2692 9.65973 14.2692 9.97631 14.4645 10.1716L17.2929 13L14.4645 15.8284C14.2692 16.0237 14.2692 16.3403 14.4645 16.5355C14.6597 16.7308 14.9763 16.7308 15.1716 16.5355L18.3536 13.3536ZM8 13.5H18V12.5H8V13.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reviews">
            <div className="hover:scale-105 transition-all bg-neutral-700 lg:min-h-[35vh] xl:min-h-[45vh] 2xl:min-h-[35vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
              <p className="bg-white p-2 rounded-2xl w-8/12 text-center text-xs">
                Penny Massey & Pam Atkinson
              </p>
              <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
                "The ambience is friendly and very supportive with a lovely
                sprinkling of humour. Valérie is an excellent teacher; very
                encouraging and patient while gently insisting that mistakes are
                corrected."
              </p>
              <div></div>
              <div className="flex items-center justify-between mt-5 xl:mt-3 bg-neutral-700 p-2">
                <p className="text-white">Read testimonial</p>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="white" />
                  <path
                    d="M18.3536 13.3536C18.5488 13.1583 18.5488 12.8417 18.3536 12.6464L15.1716 9.46447C14.9763 9.2692 14.6597 9.2692 14.4645 9.46447C14.2692 9.65973 14.2692 9.97631 14.4645 10.1716L17.2929 13L14.4645 15.8284C14.2692 16.0237 14.2692 16.3403 14.4645 16.5355C14.6597 16.7308 14.9763 16.7308 15.1716 16.5355L18.3536 13.3536ZM8 13.5H18V12.5H8V13.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/reviews">
            <div className="hover:scale-105 transition-all bg-neutral-700 lg:min-h-[35vh] xl:min-h-[45vh] 2xl:min-h-[35vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
              <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-xs">
                Mike Leonard
              </p>
              <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
                "Our progress is reviewed regularly in class which is helpful
                and builds confidence. My vocabulary has increased and the
                ongoing reviews ensures that you don't simply learn something
                and leave it but continue to use it and therefore remember it."
              </p>
              <div></div>
              <div className="flex items-center justify-between mt-5 xl:mt-3 bg-neutral-700 p-2">
                <p className="text-white">Read testimonial</p>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13" cy="13" r="13" fill="white" />
                  <path
                    d="M18.3536 13.3536C18.5488 13.1583 18.5488 12.8417 18.3536 12.6464L15.1716 9.46447C14.9763 9.2692 14.6597 9.2692 14.4645 9.46447C14.2692 9.65973 14.2692 9.97631 14.4645 10.1716L17.2929 13L14.4645 15.8284C14.2692 16.0237 14.2692 16.3403 14.4645 16.5355C14.6597 16.7308 14.9763 16.7308 15.1716 16.5355L18.3536 13.3536ZM8 13.5H18V12.5H8V13.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <h4 className="font__quicksand font-semibold text-3xl mb-10 mt-20 text-center xl:text-left dark:text-neutral-200">
        Pricing
      </h4>

      <section className="flex-row lg:flex items-start justify-between gap-5">
        <div className="text-center xl:text-left xl:w-4/12 dark:opacity-80 pricing__border_box landing__gradient mt-3 lg:mt-0 p-5 rounded-xl flex justify-start items-center xl:justify-center">
          <p className="font-light font__quicksand large__text">
            £30 <span className="text-xl">/ hour</span>
          </p>
        </div>
        <div className="pricing__border_box dark:border-neutral-200 mt-5 lg:mt-0 p-5 rounded-xl xl:w-4/12">
          <p className="font-semibold font__quicksand text-base 2xl:text-xl dark:text-neutral-200">
            What my lessons offer
          </p>
          <p className="mt-4 dark:text-neutral-200">
            <span className="font-extrabold dark:text-neutral-200">
              &#10003;{" "}
            </span>
            Flexible timings
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">
              &#10003;{" "}
            </span>
            Competitive pricing
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">
              &#10003;{" "}
            </span>
            Expert 1:1 teaching
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">
              &#10003;{" "}
            </span>
            All levels welcome
          </p>
        </div>
        <div className="mt-5 xl:mt-0 xl:w-4/12 text-center xl:text-left dark:opacity-80">
          <p className="rounded-xl p-4 xl:p-2 dark:text-neutral-200">
            &#10003; Pay as you go
          </p>
          <p className="rounded-xl mt-2 p-4 xl:p-2 dark:text-neutral-200">
            &#10003; Available over{" "}
            <span className="font-semibold">Zoom / Skype / In person</span>
          </p>
        </div>
      </section>

      <div className="mb-20 flex items-center gap-5 justify-center xl:justify-start">
        <Link href="/booking">
          <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
            <div className="cta__pulse_active dark:bg-green-600"></div>
            Book a call
          </button>
        </Link>
        <Link href="/method">
          <button className="bg-neutral-200 dark:bg-neutral-700 dark:text-white py-2 px-4 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded xl:mt-5 mt-3 font-medium">
            Find out more &#8594;
          </button>
        </Link>
      </div>

      <section
        className="mb-20 mt-20 gap-5 xl:mt-30 xl:mb-30 flex-row xl:flex items-center xl:items-start justify-between"
        id="contact-me"
      >
        <div className="flex-row">
          <h5 className="font-semibold text-3xl xl:text-4xl 2xl:text-5xl text-center xl:text-left mb-5 xl:w-10/12 dark:text-neutral-200">
            Got questions?
          </h5>
          <div className="about__divider_line bg-black dark:bg-neutral-200 mb-4 xl:mb-2"></div>
          <p className="text-center text-xl xl:text-base xl:text-left dark:text-neutral-200">
            If you've got a more specific question you can send me a message
            directly using the contact form.
          </p>
        </div>
        <div>
          {faqData.map((item, qIndex) => (
            <div className="mt-4 xl:mt-3">
              <div
                className="flex items-center justify-between hover:cursor-pointer bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-xl py-3 px-4"
                onClick={() => toggleFaq(qIndex)}
              >
                <p className="font-medium dark:text-neutral-200">
                  {item.question}
                </p>
                <p className="font-bold text-xl dark:text-neutral-200">
                  {selected === qIndex ? "-" : "+"}
                </p>
              </div>
              <p
                className={
                  selected === qIndex
                    ? "h-fit max-h-96 mt-3 py-3 px-4 dark:text-neutral-200"
                    : "max-h-0 overflow-hidden"
                }
              >
                {item.answer}
              </p>
            </div>
          ))}
          <form
            method="POST"
            action="https://formsubmit.co/0433b23c0f1fa2d490edb025a0c79453 "
            className="flex-row mt-10"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://frenchforall.netlify.app/message-send-success"
            />
            <input
              type="hidden"
              name="_subject"
              value="French for all website message"
            />
            <div className="flex items-center justify-between gap-5">
              <div className="w-6/12">
                <p className="mb-2 text-sm dark:text-neutral-200">
                  Your name <sup>*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Your name..."
                  name="name"
                  required
                  className="p-4 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full mb-5"
                />
              </div>
              <div className="w-6/12">
                <p className="mb-2 text-sm dark:text-neutral-200">
                  Your email <sup>*</sup>
                </p>
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  required
                  className="p-4 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full mb-5"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 dark:text-neutral-200">
                Your question <sup>*</sup>
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Your question..."
                required
                className="p-4 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full"
              ></textarea>
            </div>
            <div className="flex items-center justify-center xl:justify-start">
              <button
                type="submit"
                className="mt-5 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl"
              >
                Send message &#8594;
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-20 mb-20 flex-row lg:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl 2xl:text-5xl text-center lg:text-left xl:w-10/12">
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
        <div className=" gap-5 mt-20 xl:mt-0">
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
    </a.div>
  );
}
