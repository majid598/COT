
import "./footer.css";


const Footer = () => {
  return (
    <footer className="text-gray-200 body-font relative z-10">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img alt="" src="/assets/images/COT-01.png" />{" "}
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Company Link
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Products
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  C.O.T.
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Community Guidelines
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Wallet
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2  w-full px-4">
            <nav className="list-none mb-10">
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Legal
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  About US
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-gray-200 hover:text-gray-300">
                  Term of Use
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} COT —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-200 ml-1"
              target="_blank"
            >
              @cot
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://twitter.com/COTRWAA"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
