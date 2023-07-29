import CategoriesSection from "./category/CategoriesSection";
//import a from "../../assets/img/charging-phone.jpg";
export const Home = () => {
  return (
    <>
      <div className="">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f8faf] to-[#374151] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto py-32 sm:py-48 lg:py-56  ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Discover our best promotions.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  See more<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center ">
              <h1 className="text-4xl font-bold tracking-tight text-cyan-900 sm:text-6xl">
              Technology Vanguard
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
              You'll find everything you need to stay at the forefront of the technological world. From wireless headphones that will immerse you in your favorite music, fast chargers to keep your devices always ready, to ergonomic mice and keyboards that will optimize your productivity. Explore our wide selection of high-quality, high-performance products. We are committed to bringing you the latest in technology so you can enjoy an exceptional experience in every aspect of your life. Join the technological revolution with us and embrace the future today! Are you ready to experience cutting-edge technology? Let's see what we have for you!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 See Categories
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                 About Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div className="divide-y divide-blue-20"></div>
        <div className=" flex px-2 sm:px-48 lg:px-8 flex-col">
          {/* <h2 className="text-lg font-bold tracking-tight text-cyan-900 sm:text-6xl">
          Categories
          </h2> */}
          <CategoriesSection />
        </div>
      </div>
    </>
  );
};
