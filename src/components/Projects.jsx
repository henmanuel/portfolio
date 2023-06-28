import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { content_ES } from "../Content_ES";
import PriceLevels from "./PriceLevels";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  const { Projects, PriceLeveles } = content_ES;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-[35vw] min-w-[22rem]"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end" onClick={() => {
                    window.open(
                      content.link,
                      '_blank'
                    );
                  }}>
                    SHOW
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            alt="..."
            src={Projects.image}
            data-aos="fade-right"
            className="max-w-[35vw] min-w-[22rem]"
          />

          <p>Uniendo AI y desarrollo, convierto ideas en soluciones digitales revolucionarias para la evolución empresarial eficiente</p>
        </div>
      </div>

      <PriceLevels priceLevels={PriceLeveles} />
    </section>
  );
};

export default Projects;
