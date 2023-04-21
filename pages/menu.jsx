import Head from "next/head"
import Link from "next/link"

const About = () => {
  return (
    <div>
      <Head>
        <title>French For All | Menu</title>
        <link rel="shortcut icon" href="/ffa__icon.png"/>
      </Head>
      <div className="section__height flex justify-center items-center ml-auto mr-auto app__width">
        <ul className="flex-row items-center justify-around gap-5">
          <Link href="/">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              Home
            </li>
          </Link>
          <Link href="/method">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              Method
            </li>
          </Link>
          <Link href="/reviews">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              Reviews
            </li>
          </Link>
          <Link href="/about">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              About
            </li>
          </Link>
          <Link href="/#contact-me">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              Contact 
            </li>
          </Link>
          <Link href="/booking">
            <li className="dark:text-neutral-200 mt-10 font-semibold text-5xl text-center">
              Book a call
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default About; 