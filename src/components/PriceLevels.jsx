const PriceLevels = ({ priceLevels }) => {
  return (
    <section id="services">
      <div className="md:container px-5 py-14 flex flex-col items-center">
        <h2 className="title" data-aos="fade-down">
          {priceLevels.title}
        </h2>

        <button className="btn bg-white my-4" onClick={() => {
          fbq('track', 'Purchase', {currency: "USD", value: 15.00});
          window.open("https://calendly.com/henmascript/consulta", "_blank");
        }}>Consulta $15</button>

        <div className="flex gap-5 justify-between flex-wrap group">
          {priceLevels.plans.map((content, i) => (
            <button
              key={i}
              onClick={() => {
                fbq('track', 'Purchase', {currency: "USD", value: parseFloat(content.price).toFixed(2)});
                window.open(content.link, '_blank');
              }}

              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center p-6 flex-1 bg-white sm:cursor-pointer"
            >
              <h6>{content.title}</h6>
              <h4>{content.description}</h4>
              <p className="sm:text-base text-sm">{content.review}</p>
              <ul style={{ listStyle: 'none' }}>
                {content.features.map((feature, j) => (
                  <li key={j} style={{ marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>
              <h4 style={{ fontSize: '20px' }}>{content.price}</h4>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceLevels;
