import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {useState} from "react"

const BookingSuccess = () => {
    const [isLoading, setLoading] = useState(true)
  return (
    <div>
      <Head>
        <title>Booking Success!</title>
        <link rel="shortcut icon" href="/ffa__icon.png" />
      </Head>
      <section className="lg:flex items-center justify-around gap-10 my-20 lg:my-10 app__width min-h-[70dvh]">
        <div className="flex-row">
          <p className=" text-xl font-semibold mb-3 text-center">
            <span className="font__quicksand xl:text-5xl lg:text-left text-4xl font-semibold dark:text-neutral-200">You've successfully booked your call. Thank you!</span>
            <br />
            <br />
            <span className="font-normal dark:text-neutral-200 text-black">
              You'll recieve a confirmation email
            </span>
          </p>
          <div className="flex items-center justify-center">
            <Link href="/">
                <button className="bg-neutral-200 dark:bg-neutral-700 dark:text-white py-2 px-4 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded xl:mt-5 mt-3 font-medium">
                  Back to homepage
                </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSuccess;
