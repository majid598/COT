import SectionHeading from "../../../components/SectionHeading";

const SecOurRoadmap = ({ data }) => {
  return (
    <>
      <section className="trust-section section-padding-100">
        <SectionHeading title={"WHAT IS C.O.T"} />
        <div className="xl:!px-32 lg:!px-16 md:!px-12 !px-3">
          <p className="w-3/4 mx-auto text-center relative z-10">
            COT, short for Coffee Or Tea, is an innovative and promising
            financial product. Supported by a robust background in Real World
            Assets (RWA), COT provides investors with enhanced reliability.
            Through the tokenization of Real World Assets (RWA), COT legally
            confirms ownership for holders of the underlying assets. COT
            collaborates extensively with listed companies, leveraging Security
            Token Offerings (STO) to seamlessly integrate with traditional
            financial markets, offering investors more opportunities and
            choices. In the future, COT plans to issue tokens in collaboration
            with D3X and TimeX, further expanding its influence in both the
            cryptocurrency and traditional financial markets."
          </p>
        </div>
      </section>
      <section
        className="roadmap relative"
        style={{ paddingBottom: 0 }}
        id="roadmap"
      >
        <div className="container">
          <div className="row gap-12 justify-between px-8">
            <div className="col-lg-5 col-md-5 col-sm-11 bg-[#DE357A] rounded-lg p-4 text-sm text-gray-300">
              <div className="h-40">
                <img
                  src="/assets/images/box1.png"
                  className="w-full h-full object-contain mx-auto"
                  alt=""
                />
              </div>
              <p className="text-center tracking-tighter">
                Innovatively merging COT with Hong Kong-listed company bonds via
                STO, it offers a convenient way to engage in both cryptocurrency
                and the appreciative opportunities of Hong Kong-listed company
                STOs. This unique strategy aims to reduce risks and enable
                diversified asset allocation, providing investors with broader
                market participation opportunities for comprehensive portfolio
                management.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11 bg-[#DE357A] rounded-lg p-4 text-sm text-gray-300">
              <div className="w-full h-40">
                <img
                  src="/assets/images/box2.png"
                  className="w-full h-full object-contain mx-auto"
                  alt=""
                />
              </div>
              <p className="text-center">
                COT Destructive Mechanism gives you access to actual digital
                asset STO, as well as a chance to win raffle prizes. This
                incentive model can attract more investors to participate while
                bringing vitality to the project&apos;s ecosystem. management.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11 bg-[#DE357A] rounded-lg p-4 text-sm text-gray-300">
              <div className="h-40">
                <img
                  src="/assets/images/box3.png"
                  className="w-full h-full object-contain mx-auto"
                  alt=""
                />
              </div>
              <p className="text-center">
                At COT, Our success is deeply rooted in strong, strategic
                partnerships. With a history of enduring collaborations and a
                commitment to purpose-driven alliances, we&apos;ve consistently
                delivered results that speak to the efficacy of our approach.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11 bg-[#DE357A] rounded-lg p-4 text-sm text-gray-300">
              <div className="h-40">
                <img
                  src="/assets/images/box1.png"
                  className="w-full h-full object-contain mx-auto"
                  alt=""
                />
              </div>
              <p className="text-center">
                Become a Part of Our Community and Enjoy the Benefits! We are
                constructing a community that provides a wide range of exciting
                advantages. Our services include swapping, trading, staking, and
                opportunities to expand your network and net worth.
              </p>
            </div>
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
