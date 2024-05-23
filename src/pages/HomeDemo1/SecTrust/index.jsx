import SectionHeading from "../../../components/SectionHeading";

const SecTrust = ({ data }) => {
  return (
    <section className="trust-section section-padding-100">
      <SectionHeading
        text={"a Revolutionary Financial Product"}
        title={"Introducing C.O.T (COFFEE OR TEA)"}
      />
      <div className="w-80 mx-auto -mt-10 mb-10">
        <img src="/assets/images/icon.png" alt="" />
      </div>
      <div className="xl:!px-32 lg:!px-16 md:!px-12 !px-3">
        <p className="w-3/4 mx-auto text-center">
          In finance, the convergence of WEB 2.0 and WEB 3.0 marks a unique
          revolution, offering an ideal blend of cryptocurrency innovation and
          traditional equity strength. This is a financial revolution where
          digital and traditional seamlessly intertwine, providing investors
          with more possibilities to showcase their wisdom on the future
          financial stage. Embrace both WEB 2.0 and WEB 3.0 to create your own
          financial legend.
        </p>

        <div className="mx-auto flex gap-4 justify-center text-center dream-btn-group mt-8">
          <a
            href="/"
            className="text-white mr-4 lg:!px-8 lg:!py-3 md:!px-4 md:!py-3 !px-4 !py-2 !bg-[#DE357A] !border-[#DE357A] block w-max lg:rounded-md md:rounded-md rounded-sm transition-all duration-200 hover:scale-95"
          >
            Explore
          </a>
          <a
            href="/"
            className="text-white mr-4 lg:!px-8 lg:!py-3 md:!px-4 md:!py-3 !px-4 !py-2 !bg-[#DE357A] !border-[#DE357A] block w-max lg:rounded-md md:rounded-md rounded-sm transition-all duration-200 hover:scale-95"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecTrust;
