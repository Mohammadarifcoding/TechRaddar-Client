import React from 'react';

const Ban = () => {
    return (
      <section className="relative pb-20 overflow-hidden">
  <img className="absolute top-0 right-0 w-52 md:w-auto" src="saturn-assets/images/headers/star-background-header.png" alt />
  <img className="absolute top-0 right-0 mt-10 mr-10" src="saturn-assets/images/headers/light-orange-blue-1.png" alt />
  <img className="absolute top-0 right-0 mt-64 sm:mt-80 lg:mt-64 w-2/5 animate-moveHand" src="saturn-assets/images/headers/robot-hand-header.png" alt />
  <nav className="relative py-6 mb-12 md:mb-20 bg-transparent">
    <div className="container px-4 mx-auto">
      <div className="flex items-center">
        <a className="inline-block text-lg font-bold" href="#">
          <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt width="auto" />
        </a>
        <div className="lg:hidden ml-auto">
          <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
          <li className="group relative">
            <a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Featured</a>
            <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-30">
              <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45" />
              <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                <div className="pb-3 mb-3 border-b border-gray-100"><a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Featured</a><a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Solutions</a></div>
                <div className="pb-3 mb-3 border-b border-gray-100">
                  <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                    <img src="saturn-assets/images/headers/icon-download.svg" alt />
                    <span className="ml-3">Download</span>
                  </a>
                  <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                    <img src="saturn-assets/images/headers/icon-slack.svg" alt />
                    <span className="ml-3">Community</span>
                  </a>
                  <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                    <img src="saturn-assets/images/headers/icon-help.svg" alt />
                    <span className="ml-3">Help</span>
                  </a>
                </div>
                <div className="flex items-center pb-3 mb-3 border-b border-gray-100"><a className="inline-block px-4 py-3 mr-6 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">Sign In</a><a className="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200" href="#">Create an account</a></div>
                <div className="flex items-center">
                  <div className="flex w-10 h-10 items-center justify-center bg-orange-50 rounded-full">
                    <img src="saturn-assets/images/headers/icon-email-me.svg" alt />
                  </div>
                  <div className="ml-3">
                    <span className="block text-xs text-gray-500">Drop us a line</span>
                    <a className="text-sm font-semibold text-black hover:text-orange-900" href="#">hello@shuffle.dev</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Solutions</a></li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Products</a></li>
          <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Articles</a></li>
        </ul>
        <div className="hidden lg:block ml-auto">
          <div className="flex items-center">
            <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">Sign In</a>
            <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="#">
              <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
              <span className="relative">Create an account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className="relative container px-4 mx-auto">
    <div className="max-w-xl xl:max-w-4xl">
      <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
        <span>World Best Tech Startup</span>
        <span className="font-serif italic">Ever</span>
      </h1>
      <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
        <div className="mb-6 md:mb-0 md:mr-8 pt-3">
          <svg width={84} height={10} viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="#1E254C" />
          </svg>
        </div>
        <div className="max-w-md">
          <p className="md:text-xl text-gray-900 font-semibold">Saturn is a startup that's making the world a&nbsp;better place! We've been working on our mission since 2021</p>
        </div>
      </div>
      <a className="relative group inline-block w-full sm:w-auto py-4 px-6 mb-24 text-white font-semibold rounded-md bg-orange-900 overflow-hidden" href="#">
        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
        <div className="relative flex items-center justify-center">
          <span className="mr-4">Meet The Expert</span>
          <span>
            <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z" fill="#FFF2EE" />
            </svg>
          </span>
        </div>
      </a>
    </div>
    <div className="lg:flex">
      <div className="max-w-2xl mb-20 lg:mb-0 lg:mr-32">
        <span className="block mb-6 text-sm font-semibold text-gray-500">TRUSTED BY BIG COMPANIES</span>
        <div className="flex items-center -mx-4">
          <div className="w-1/3 px-4">
            <img className="block" src="saturn-assets/logos/brands/logo-example3.png" alt />
          </div>
          <div className="w-1/3 px-4">
            <img className="block" src="saturn-assets/logos/brands/logo-example2.png" alt />
          </div>
          <div className="w-1/3 px-4">
            <img className="block" src="saturn-assets/logos/brands/logo-example1.png" alt />
          </div>
        </div>
      </div>
      <div className="relative lg:-mt-20 w-full max-w-md">
        <img className="absolute top-0 left-0 w-full" src="saturn-assets/images/headers/bg-folder.svg" alt />
        <div className="relative flex flex-col">
          <div className="xs:w-100 max-w-xs pl-5 xs:pl-10 pt-10 pr-20 xs:pr-5 z-10">
            <h3 className="text-xl font-semibold text-gray-900">We are building the future together</h3>
          </div>
          <div className="xs:w-100 max-w-md -mt-10 px-5 xs:px-10 pb-12 pt-18 bg-orange-50 rounded-b-3xl">
            <div className="flex items-center">
              <div>
                <span className="text-3xl xs:text-5xl font-semibold text-gray-900">18k+</span>
                <span className="block text-sm text-gray-500">Projects Done</span>
              </div>
              <div className="h-12 w-px mx-auto bg-orange-200" />
              <div>
                <span className="text-3xl xs:text-5xl font-semibold text-gray-900">20+</span>
                <span className="block text-sm text-gray-500">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-16">
        <a className="mr-auto text-2xl font-medium leading-none" href="#">
          <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul className="mb-2">
          <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">About Us</a></li>
          <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Featured</a></li>
          <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Solutions</a></li>
          <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Products</a></li>
          <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Articles</a></li>
        </ul>
        <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
          <a className="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600" href="#">
            <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z" fill="currentColor" />
            </svg>
            <span className="ml-3">Upgrade to Premium</span>
          </a>
        </div>
        <div className="flex px-6 mb-16 items-center"><a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">Sign In</a><a className="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200" href="#">Create an account</a></div>
        <div>
          <div className="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full">
            <svg width={29} height={28} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z" fill="black" />
            </svg>
          </div>
          <span className="block mb-3 text-sm text-gray-500">Drop us a line</span>
          <a className="font-semibold text-black" href="#">hello@shuffle.dev</a>
        </div>
      </div>
    </nav>
  </div>
</section>

    );
};

export default Ban;