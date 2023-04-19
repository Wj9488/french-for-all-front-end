import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
        "Yes of course, you can choose to do a shorter 45 minute session for £19 or a longer hour and a quarter session for £31.",
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
      question: "I have not enjoyed learning French in the past. I'm worried I won't enjoy 1:1 tuition.",
      answer:
        "A lot of people who come to me have had unsuccessful previous experiences learning French. It is my job to make the lessons enjoyable for you and to help you properly. Read some of my reviews to see what previous students have said.",
    },
  ];

  return ( 
    <div className="overflow-x-hidden ml-auto mr-auto app__width">
      <Head>
        <title>Online French Lessons - Friendly & experienced native speaker | French For All</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
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

      <header className="header__height flex items-center justify-center" >
        <div id="header__bg_img" className="dark:opacity-50"></div>
        <div className="flex-row xl:flex  xl:flex-center xl:items-center xl:gap-20 z-10">
          <div className="xl:w-7/12">
            <div className="font-semibold xl:text-5xl text-4xl xl:w-11/12">
              <h1 className="dark:text-neutral-200 text-5xl xl:text-5xl 2xl:text-6xl text-center xl:text-left">
              French language tuition with a native speaker - personalised lessons for all levels
              </h1>
            </div>
            <p className="dark:text-neutral-200 mt-5 text-xl text-center xl:text-left">
              With 25 years of teaching experience, I've helped hundreds of people gain confidence 
              to learn French. 
            </p>
            <div className="flex items-center gap-5 justify-center xl:justify-start">
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
              src="/header__image_main.png"
              alt="Valerie Jones - Tutor"
              width={600}
              height={600}
              className="mt-10 xl:mt-0 rounded-2xl image__settings"
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
              <circle cx="20" cy="20" r="19.5" className="stroke-black dark:stroke-neutral-100" />
              <path
                d="M19.6464 26.3536C19.8417 26.5488 20.1583 26.5488 20.3536 26.3536L23.5355 23.1716C23.7308 22.9763 23.7308 22.6597 23.5355 22.4645C23.3403 22.2692 23.0237 22.2692 22.8284 22.4645L20 25.2929L17.1716 22.4645C16.9763 22.2692 16.6597 22.2692 16.4645 22.4645C16.2692 22.6597 16.2692 22.9763 16.4645 23.1716L19.6464 26.3536ZM19.5 12V26H20.5V12H19.5Z"
                className="fill-black dark:fill-white"
              />
            </svg>
            <p className="dark:text-neutral-200">Explore</p>
          </div>
        </div>
      </section>

      <section className="flex-row mt-0 lg:mt-20 lg:mb-20 lg:gap-5 xl:gap-0 lg:flex items-start text-center lg:text-left justify-between">
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
            Learning a language can be daunting and I will 
            be there to help you every step of the way.
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
              <rect width="28" height="27" rx="5" className="dark:fill-neutral-900 fill-neutral-50"/>
              <ellipse cx="14" cy="9" rx="5" ry="6" className="dark:fill-white fill-black" />
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
            I understand the struggles of learning French and where most 
            people go wrong. I'll keep you on the right track and make sure you 
            progress properly at your own pace.
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
              Personalised support
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            Each lesson is tailored specifically for you and is designed to 
            give you the tools to enable you to speak and write well.
          </p>
        </div>
      </section>

      <section className="flex-row lg:flex items-start gap-10 text-center lg:text-left lg:items-center justify-around">
        <div className="mt-20 mb-20  flex-row xl:flex items-center justify-center xl:justify-between">
          <div className="xl:w-4/12">
            <h3 className="text-4xl xl:text-5xl font-semibold dark:text-neutral-200">
              About my lessons
            </h3>
            <div className="about__divider_line bg-black dark:bg-white mt-4 mb-2"></div>
            <p className="text-xl dark:text-neutral-200">
              Join the countless other students that I've helped and improve
              your French.
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
                &#10003; Flexible, if you need to cancel we'll
                try to reschedule.
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
        <h4 className="text-4xl text-white 2xl:text-5xl font-semibold xl:text-left text-center">
          A few success stories
        </h4>
        <div className="flex-row xl:flex flex-1 items-center justify-center gap-5 xl:justify-around mt-5 mb-5">
        <Link href="/reviews">
          <div className="bg-neutral-700 xl:min-h-[50vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-6/12 text-center text-xs">
              Barry Langridge
            </p>
            <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
              "Valérie is a born teacher... She always accompanies her students warmly but firmly; encouraging success but very clear-eyed about weaknesses"
            </p>
            <div>
            </div>
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
          <div className="bg-neutral-700 xl:min-h-[50vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-xs">
              Penny Massey
            </p>
            <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
              "The ambience is friendly and very supportive with a lovely sprinkling of humour.  Valérie is an excellent teacher; very encouraging and patient while gently insisting that mistakes are corrected."
            </p>
            <div>
            </div>
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
          <div className="bg-neutral-700 xl:min-h-[50vh] min-w-full rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-xs">
              Mike Leonard
            </p>
            <p className="text-white xl:text-xl 2xl:text-2xl mt-5 mb-5">
              "Our progress is reviewed regularly in class which is helpful and builds confidence. My vocabulary
              has increased and the ongoing reviews ensures that you don't simply learn something and leave
              it but continue to use it and therefore remember it."
            </p>
            <div>
            </div>
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
            £25 <span className="text-xl">/ hour</span>
          </p>
        </div>
        <div className="pricing__border_box dark:border-neutral-200 mt-5 lg:mt-0 p-5 rounded-xl xl:w-4/12">
          <p className="font-semibold font__quicksand text-base 2xl:text-xl dark:text-neutral-200">
            What my lessons offer
          </p>
          <p className="mt-4 dark:text-neutral-200">
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Flexible timing
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Competitive pricing
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Expert 1:1 teaching
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            All levels welcome
          </p>
        </div>
        <div className="mt-5 xl:mt-0 xl:w-4/12 text-center xl:text-left dark:opacity-80">
          <p className="rounded-xl p-4 xl:p-2 dark:text-neutral-200">
            &#10003; Pay as you go
          </p>
          <p className="rounded-xl mt-2 p-4 xl:p-2 dark:text-neutral-200">
            &#10003; Available over {" "} 
            <span className="font-semibold">
              Zoom / Skype / In person
            </span>
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

      <section className="mb-20 mt-20 gap-5 xl:mt-30 xl:mb-30 flex-row xl:flex items-center xl:items-start justify-between"
      id="contact-me">
        <div className="flex-row">
          <h5 className="font-semibold text-4xl 2xl:text-5xl text-center xl:text-left mb-5 xl:w-10/12 dark:text-neutral-200">
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
                <p className="font-medium dark:text-neutral-200">{item.question}</p>
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
            action="https://formsubmit.co/valeroche@btinternet.com"
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
                <p className="mb-2 text-sm dark:text-neutral-200">Your name <sup>*</sup></p>
                <input
                  type="text"
                  placeholder="Your name..."
                  name="name"
                  required
                  className="p-4 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full mb-5"
                />
              </div>
              <div className="w-6/12">
                <p className="mb-2 text-sm dark:text-neutral-200">Your email <sup>*</sup></p>
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
              <p className="mb-2 dark:text-neutral-200">Your question <sup>*</sup></p>
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
              <button type="submit" className="mt-5 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-2xl">
                Send message &#8594;
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-20 mb-20 flex-row xl:flex justify-between items-center font-semibold">
        <div>
          <h6 className="dark:text-white text-4xl 2xl:text-5xl text-center xl:text-left xl:w-10/12">
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
  );
}
