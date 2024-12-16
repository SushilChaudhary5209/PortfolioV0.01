import React, { useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Frontend from "../../images/frontend.png";
import Backend from "../../images/backend.png";

function Service() {
  const { theme } = useTheme();
  const words = `As a passionate web developer, I specialize in creating custom websites that truly reflect your vision and goals. Whether you're looking for a stunning new design, a robust e-commerce platform, or improved search engine visibility, I offer tailored solutions to meet your specific needs. My approach is collaborative and detail-oriented, ensuring that every project is handled with care from concept to completion. I’m dedicated to delivering high-quality results and ongoing support, so you can focus on what you do best. Let’s work together to bring your ideas to life—reach out today to get started!`;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`service ${theme} pt-20 md:pt-28 pb-14 overflow-x-hidden`}>
      <p
        data-aos="fade-down"
        data-aos-duration="2000"
        className="pb-4 text-4xl font-semibold"
      >
        My Service
      </p>
      <div className="h-full flex flex-col md:flex-row">
        <div className="pb-14 w-full md:w-1/2 flex justify-center ">
          <div className="w-[90%] flex flex-col justify-center gap-10">
            <TextGenerateEffect
              duration={1}
              filter={false}
              words={words}
              className={`service ${theme}`}
            />
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 flex flex-col flex-wrap items-center xl:items-start md:flex-row  md:justify-evenly gap-2 md:gap-8">
          <Tilt>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset="150"
              className={`card ${theme} rounded-lg h-auto w-72`}
            >
              <img
                src={Frontend}
                alt=""
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="pb-4 px-2 flex flex-col gap-6">
                <p className="pt-2 text-2xl font-semibold">
                  Frontend Developer
                </p>
                <p>
                  Delivering seamless and responsive web design solutions
                  tailored to your unique business needs, ensuring an engaging
                  user experience across all devices.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset="150"
              className={`card ${theme} rounded-lg h-auto w-72`}
            >
              <img
                src={Backend}
                alt=""
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="pb-4 flex flex-col gap-6">
                <p className="pt-2 text-2xl font-semibold">Backend Developer</p>
                <p>
                  Our backend services ensure robust, secure, and scalable
                  solutions to power your applications efficiently.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Service;
