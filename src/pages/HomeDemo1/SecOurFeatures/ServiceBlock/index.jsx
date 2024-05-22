const ServiceBlock = ({ classIco, title, text }) => {
  return (
    <div className="services-block-four min-h-28 !flex !items-center">
      <div className="inner-box !flex !items-center">
        <div className="icon-box">
          <span className="text-3xl font-semibold">{classIco}</span>
        </div>
        <div className="h-full items-center flex mt-10">
          <h3 className="text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
