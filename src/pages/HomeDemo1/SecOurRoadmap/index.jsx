import SectionHeading from "../../../components/SectionHeading";

const SecOurRoadmap = ({ data }) => {
  return (
    <>
      <section className="trust-section section-padding-100">
        <SectionHeading title={"WHAT IS C.O.T"} />
        <div className="xl:!px-32 lg:!px-16 md:!px-12 !px-3">
          <p className="w-3/4 mx-auto text-center relative z-10">
            COT (Coffee Or Tea) is a pioneering financial product backed by Real
            World Assets (RWA), ensuring enhanced reliability. It tokenizes
            RWAs, legally confirming ownership, and collaborates with listed
            companies through STOs, bridging traditional and crypto markets.
            Future plans involve partnerships with D3X and TimeX for wider
            market influence.
          </p>
        </div>
      </section>
      <section
        className="roadmap relative"
        style={{ paddingBottom: 0 }}
        id="roadmap"
      >
        <div className="container">
          <div className="px-8">
            <img src="/assets/images/image.png" alt="" />
          </div>
          <div className="mt-12 lg:px-32 md:px-24 px-10 py-8 text-white text-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl">
              Join us today and discover the many benefits we have to offer!
            </h1>
          </div>
        </div>
        {/* <div className="absolute !-bottom-28 lg:block hidden right-0 ">
          <img src="/assets/images/3.png" alt="" />
        </div> */}
      </section>
      {/* <section className="trust-section section-padding-100">
        <SectionHeading title={"CONTACT US NOW"} />
        <div className="xl:!px-32 lg:!px-16 md:!px-12 !px-3">
          <p className="w-3/4 mx-auto text-center">
            As the financial landscape evolves, adapting your strategies while
            keeping these principles in mind will likely contribute to sustained
            success as we place importance on excellence over volume in our
            asset selection, risk management over yield in our strategy
            formulation, and always prioritize our clients' interests in our
            collaborations.
          </p>
          <a
            href="/"
            className="text-white mr-4 lg:!px-8 lg:!py-3 md:!px-4 md:!py-3 !px-4 !py-2 !bg-[#DE357A] !border-[#DE357A] block mx-auto w-max lg:rounded-md md:rounded-md rounded-sm transition-all duration-200 hover:scale-95"
          >
            Contact
          </a>
        </div>
      </section> */}
    </>
  );
};

export default SecOurRoadmap;
