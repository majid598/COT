import SecWelcomeContent from "./SecWelcomeContent";

const SecWelcomeArea = () => {
  return (
    <section
      className="welcome_area clearfix auto-init ico fullwidth"
      data-options={{ direction: "normal" }}
      id="home"
    >
      <div className="hero-content dark-blue">
        <div className="container relative h-100">
          <div className="row h-100 align-items-center lg:!text-start md:!text-start !text-center">
            <div className="col-12">
              <SecWelcomeContent img={"/assets/images/6.png"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWelcomeArea;
