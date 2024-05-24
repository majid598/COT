import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-[#de357a] bg-white body-font relative z-10">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="/"
            className="flex items-start md:justify-start justify-center"
          >
            <img alt="" src="/assets/images/foot.svg" className="w-1/2" />{" "}
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:!text-left !text-center">
          <div className="lg:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li className="my-1">
                <a href="/" className="text-[#de357a]">
                  Home
                </a>
              </li>
              <li className="my-1">
                <a href="https://cot.asia/iao" className="text-[#de357a]">
                  IAO Portal
                </a>
              </li>
              <li className="my-1">
                <a href="/" className="text-[#de357a]">
                  DEX{" "}
                </a>
              </li>
              <li className="my-1">
                <a href="https://cot.asia/asset" className="text-[#de357a]">
                  Asset Owners' Portal
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2  w-full px-4">
            <nav className="list-none mb-10">
              <li className="my-1">
                <a
                  href="https://nr9mx8metr.larksuite.com/docx/DrIfdoEwMoMG50x9mJ4uEuzWsgz?from=from_copylink"
                  className="text-[#de357a]"
                >
                  Terms of Use 
                </a>
              </li>
              <li className="my-1">
                <a
                  href="https://nr9mx8metr.larksuite.com/docx/E6XHdkwlhoHKWNx60PPuG3Fiszh?from=from_copylink"
                  className="text-[#de357a]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="my-1">
                <a
                  href="https://twitter.com/COTRWAA"
                  className="text-[#de357a]"
                >
                  Twitter
                </a>
              </li>
              <li className="my-1">
                <a
                  href="https://t.me/+r_3Vkn8YeCZjOWNl"
                  className="text-[#de357a]"
                >
                  Telegram
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
