import SectionHeading from "../../../components/SectionHeading";

const SecOurFeatures = ({ data, img, Rings }) => {
  return (
    <section className="features section-padding-100">
      <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
        <SectionHeading
          title="Contact Us Now"
          text={
            "As the financial landscape evolves, adapting your strategies while keeping these principles in mind will likely contribute to sustained success as we place importance on 3 key elements."
          }
        />
      </div>
      <div className="container-fluid">
        <div className="row items-center">
          <div className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
            <img src="/assets/images/laser.png" alt="" />
          </div>
          <div className="service-img-wrapper flex justify-center col-lg-6 col-md-12 col-sm-12">
            <div className="">
              <img
                autoPlay
                loop
                muted
                src={img}
                className="w-4/5 mx-auto object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecOurFeatures;
