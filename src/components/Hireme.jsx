import { content_ES } from "../Content_ES";

const Hireme = () => {
  const { Hireme } = content_ES;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down" onClick={() => {
          fbq('track', 'Lead');
          window.location.href = "https://wa.me/message/2AGAMZCPXIXNG1";
        }}>
          {Hireme.title}
        </h2>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={() => {
              fbq('track', 'Lead');
              window.location.href = "https://wa.me/message/2AGAMZCPXIXNG1";
            }}>
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
