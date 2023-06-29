const PriceLevels = ({ priceLevels }) => {
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {priceLevels.title}
        </h2>

        <div className="flex gap-5 justify-between flex-wrap group">
          {priceLevels.plans.map((content, i) => (
            <div key={i} className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1">
              <h6>{content.title}</h6>
              <h4>{content.description}</h4>
              <p className="sm:text-base text-sm">{content.review}</p>
              <ul style={{ listStyle: 'none' }}>
                {content.features.map((feature, j) => (
                  <li key={j} style={{ marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>
              <h4 style={{ fontSize: '20px' }}>{content.price}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PriceLevels;
