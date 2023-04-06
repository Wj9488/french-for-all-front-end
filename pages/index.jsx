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
      question: "What are your prices?",
      answer:
        "FAQ sections of websites are crucial to converting more of your traffic. Addressing the most commonly asked questions that your customers normally have allows them to more clearly understand whether or not your service or product is right for them.",
    },
    {
      question: "How many hours do your lessons last for?",
      answer:
        "The best thing to do to start populating a good FAQ section is by making a note of the most common questions that your customers ask over say, a month. Or you could ask your staff what they most commonly get asked.",
    },
    {
      question: "Is there a free lesson so I can try before committing fully?",
      answer:
        "Fun fact: FAQ sections have been shown to increase trust in users.",
    },
    {
      question: "How should I use FAQ sections?",
      answer:
        "Customers are highly likely to have questions about your product or service, this section is your change to handle these objections. Imagine it as your 24/7 sales assistant.",
    },
  ];

  return ( 
    <div className="overflow-x-hidden ml-auto mr-auto app__width">
      <Head>
        <title>French For All | Home</title>
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

      <header className="header__height flex items-center justify-center">
        <div className="flex-row xl:flex xl:flex-center xl:items-center xl:gap-20 z-10">
          <div className="xl:w-7/12">
            <div className="font__quicksand font-semibold xl:text-5xl text-4xl xl:w-11/12">
              <p className="dark:text-neutral-200 text-5xl lg:text-6xl xl:text-7xl text-center xl:text-left">
                I'll unlock your French potential with expert 1 to 1 teaching
              </p>
            </div>
            <p className="dark:text-neutral-200 mt-5 text-xl text-center xl:text-left">
              I'll use my expertise as a native speaker with tried and tested
              methods to help you navigate the French language and reach your
              goal faster.
            </p>
            <div className="flex items-center gap-5 justify-center xl:justify-start">
              <Link href="/sign-up">
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
              alt="unsplash test"
              width={600}
              height={600}
              placeholder="blur"
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

      <section className="flex-row mt-0 xl:mt-20 xl:mb-20 xl:flex items-start text-center xl:text-left justify-between">
        <div className="mb-10 xl:mb-5 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center xl:justify-start">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="27" rx="5" fill="#CAFFBF" />
              <path
                d="M4 15.5L8.73684 21L16.1053 10.5L19.7895 13.5L24 8"
                stroke="black"
                stroke-width="1.3"
              />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Continued support
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            This is the first benefit that your customers will experience when
            they purchase your service or product.
          </p>
        </div>

        <div className="mb-10 xl:mb-5 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center xl:justify-start">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="27" rx="5" fill="#FFF698" />
              <ellipse cx="14" cy="9" rx="5" ry="6" fill="black" />
              <path
                d="M21.1506 15.8182C17.8587 14.7273 10.7278 14.7273 6.8879 15.8182C3.04795 16.9091 4.14507 24 4.14507 24H23.8934C23.8934 24 24.8301 17.0375 21.1506 15.8182Z"
                fill="black"
              />
              <ellipse
                cx="1"
                cy="3.5"
                rx="1"
                ry="3.5"
                transform="matrix(-1 0 0 1 15 15)"
                fill="white"
              />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Expert guidance
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            Make sure to appeal to what you know your target market wants
            solved. You want to evoke emotion in the user and make them realise
            that you have the solution to their problem.
          </p>
        </div>

        <div className="mb-10 xl:mb-5 xl:w-3/12">
          <div className="flex gap-3 items-center justify-center xl:justify-start">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#4CC9F0" />
              <circle cx="14" cy="14" r="11" className="dark:fill-neutral-900 fill-neutral-50" />
              <circle cx="14" cy="14" r="8" fill="#4CC9F0" />
              <circle cx="14" cy="14" r="3" className="dark:fill-neutral-900 fill-neutral-50" />
            </svg>
            <h2 className="font__quicksand text-2xl font-semibold dark:text-neutral-200">
              Results focused
            </h2>
          </div>
          <p className="mt-3 dark:text-neutral-200">
            Boast about what your company can do for the client and why they
            should choose you over another business in the same field.
          </p>
        </div>
      </section>

      <section className="flex-row xl:flex items-start gap-10 text-center xl:text-left xl:items-center justify-around">
        <div className="mt-20 mb-20  flex-row xl:flex items-center justify-center xl:justify-between">
          <div className="xl:w-4/12">
            <h3 className="text-4xl xl:text-5xl font-semibold dark:text-neutral-200">
              What can you expect from my lessons?
            </h3>
            <div className="about__divider_line bg-black dark:bg-white mt-4 mb-2"></div>
            <p className="text-xl dark:text-neutral-200">
              Join the countless other students that I've helped and level up
              your French abilities.
            </p>
            <Link href="/sign-up">
              <div className="flex items-center xl:justify-start justify-center">
                <button className="mt-3 xl:mt-5 font-medium text-white dark:text-black flex items-center xl:justify-start gap-2 px-4 py-2 lg:py-2 bg-black dark:bg-white rounded-lg">
                  <div className="cta__pulse_active dark:bg-green-600"></div>
                  Help me improve
                </button>
              </div>
            </Link>
          </div>
          <div className="xl:w-7/12 xl:gap-5 flex-row xl:flex xl:justify-around items-start justify-center mt-5 xl:mt-0">
            <div>
              <p className="rounded-xl border border-black p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; A friendly, welcoming and supportive method to learn
                French.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; A completely tailored-to you experience.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Exercises in both speaking and written French designed
                specifically to help you consistently improve.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Flexible to your schedule, if you need to cancel we'll
                be able to reschedule easily.
              </p>
            </div>
            <div>
              <p className="rounded-xl border border-black p-4 xl:p-2 mt-5 xl:mt-0 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; No minimum booking.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; No upfront payments.
              </p>
              <p className="rounded-xl border border-black mt-5 xl:mt-2 p-4 xl:p-2 dark:text-neutral-200 dark:border-neutral-200">
                &#10003; Pay as you go pricing, you'll only pay for the lessons
                that you actually take.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 mt-20 landing__gradient dark:opacity-80 rounded-2xl p-4 xl:p-6">
        <h4 className="text-4xl xl:text-5xl font-semibold xl:text-left text-center">
          A few success stories
        </h4>
        <div className="flex-row xl:flex items-center justify-center gap-5 xl:justify-around mt-5 mb-5">
        <Link href="/reviews">
          <div className="bg-neutral-700 min-h-[30vh] rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-sm">
              Jane Adams
            </p>
            <p className="text-white text-3xl xl:text-4xl mt-5 mb-5">
              "These lessons made me progress so fast"
            </p>
            <div>
              <Image
                width={500}
                height={250}
                src="/testimonial__img.png"
                id="testimonial__img_1"
                className="rounded-2xl"
                placeholder="blur"
              />
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
          <div className="bg-neutral-700 min-h-[30vh] rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-sm">
              Sarah Smith
            </p>
            <p className="text-white text-3xl xl:text-4xl mt-5 mb-5">
              "I'm now able to get by just fine in France"
            </p>
            <div>
              <Image
                width={500}
                height={250}
                placeholder="blur"
                src="/testimonial__img_2.png"
                id="testimonial__img_3"
                className="rounded-2xl"
              />
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
          <div className="bg-neutral-700 min-h-[30vh] rounded-2xl p-2 mt-5 xl-mt-0">
            <p className="bg-white p-2 rounded-2xl w-4/12 text-center text-sm">
              Helen Brown
            </p>
            <p className="text-white text-3xl xl:text-4xl mt-5 mb-5">
              "I always look forward to Valérie's lessons"
            </p>
            <div>
              <Image
                width={500}
                height={250}
                src="/testimonial__img_3.png"
                id="testimonial__img_3"
                className="rounded-2xl"
                placeholder="blur"
              />
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

      <section className="flex-row xl:flex items-start justify-between gap-5">
        <div className="text-center xl:text-left xl:w-4/12 dark:opacity-80 pricing__border_box landing__gradient mt-3 xl:mt-0 p-5 rounded-xl flex justify-start items-center xl:justify-center">
          <p className="font-light font__quicksand large__text">
            £25 <span className="text-xl text-neutral-400">/ hour</span>
          </p>
        </div>
        <div className="pricing__border_box dark:border-neutral-200 mt-5 xl:mt-0 p-5 rounded-xl xl:w-4/12">
          <p className="font-semibold font__quicksand text-xl dark:text-neutral-200">
            What my lessons offer
          </p>
          <p className="mt-4 dark:text-neutral-200">
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Timing that is suited to you
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Competitive pricing
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Expert 1 to 1 teaching
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            In person or zoom
            <br />
            <br />
            <span className="font-extrabold dark:text-neutral-200">&#10003; </span>
            Beginner friendly
          </p>
        </div>
        <div className="mt-5 xl:mt-0 xl:w-4/12 text-center xl:text-left dark:opacity-80">
          <p className="rounded-xl p-4 xl:p-2 dark:text-neutral-200">
            &#10003; You choose how your lessons are delivered
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
        <Link href="/sign-up">
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
          <h5 className="font-semibold text-4xl xl:text-5xl text-center xl:text-left mb-5 xl:w-10/12 dark:text-neutral-200">
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
            action="https://formsubmit.co/valeroche@btinternet.com"
            className="flex-row mt-10"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="localhost:3000/#contact-me"
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
                  className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full mb-5"
                />
              </div>
              <div className="w-6/12">
                <p className="mb-2 text-sm dark:text-neutral-200">Your email <sup>*</sup></p>
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  required
                  className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full mb-5"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 dark:text-neutral-200">Your message <sup>*</sup></p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Your message..."
                required
                className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl w-full"
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
          placeholder="blur"
          />
          <Image 
          width={300}
          height={300}
          src="/footer__img_2.jpg"
          className="footer__img_settings "
          id="footer__img_2"
          placeholder="blur"
          />
          <Image 
          width={300}
          height={300}
          src="/footer__img_grid_3.png"
          id="footer__img_3"
          placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
}
