import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-16 fixed z-10 w-full">
        <nav className="h-full flex items-center max-w-7xl mx-auto justify-between text-base font-medium text-gray-700 tracking-wide">
          <ul className="flex items-center gap-x-10 text-white font-bold">
            <li className="mr-20">
              <Image src="/logo-white.png" alt="logo" width="84" height="56" />
            </li>
            <li>FITNESS</li>
            <li>SPORTS</li>
            <li>YOGA</li>
            <li>CARE</li>
          </ul>
          <ul className="flex gap-x-10 text-white font-bold">
            <li>
              <Link href="/signin">Signin</Link>
            </li>
            <li>
              <Link href="/signin">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="relative flex justify-center">
          <video
            autoPlay
            loop
            playsInline
            poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
            preload="metadata"
            muted
            className="w-screen h-screen object-cover"
          >
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-20">
            <h1 className="text-9xl text-white font-bold italic">
              We are <br />
              Fitness365
            </h1>
            <h3 className="text-4xl font-bold leading-9 mt-6 text-center text-orange-400">
              A fitness movement that is worth
              <br /> breaking a sweat for
            </h3>
            <button className="bg-white border border-gray-500 text-orange-500 px-5 py-3 text-sm rounded-xl mt-12 mx-auto flex">
              Explore Fitness365 Pass
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
