import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { useTheme } from "../components/ThemeContext";
import ProgressBar from "../components/ProgressBar";
import CircleProgress from "../components/CircleProgress";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import MyPic from "../../images/mypic.png";
import Backend from "../../images/backend.png";

function Home() {
  const { theme } = useTheme();
  const words = `a passionate Web Developer with a love for Front-end Development. Here, you'll find a showcase of my projects, skills, and the creative journey I've embarked on. Let's connect and create something amazing together!`;
  const [text] = useTypewriter({
    words: ["Sushil Chaudhary"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`home ${theme} overflow-x-hidden`}>
      <div className="flex flex-col-reverse justify-center items-center md:flex-row pt-4">
        <div className="w-full md:w-1/2 ps-1 md:ps-12 flex flex-col justify-center gap-3">
          <span className="text-4xl">👋</span>
          <div className="px-4 md:ps-8 flex flex-col gap-8">
            <p className={`fadeInScaleUp text-4xl font-semibold`}>
              <span className="">Hi, I'm </span>
              <span className="text-[#64ffda]">{text}</span>
              <span className="text-[#64ffda]">
                <Cursor />
              </span>
            </p>
            <p>
              <TextGenerateEffect
                duration={1}
                filter={false}
                words={words}
                className={`service ${theme}`}
              />
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-offset="150"
          className="flex items-center justify-center w-full md:w-1/2 h-96 bg-cover rounded-full overflow-hidden"
        >
          <div
            className={`ring ${theme} ring-[8px] ring-[#64ffda] ring-offset-1 ring-offset-slate-50 dark:ring-offset-white w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden`}
          >
            <img className="" src={MyPic} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center pt-8 ps-[30%] md:ps-[20%]">
        <button
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a
              href="https://drive.google.com/file/d/1Ro1-77jJhQJEKBY0wEV1eojfEwhvD_pE/view?usp=drive_link"
              className="flex items-center gap-2"
            >
              <IoMdDownload /> Downloads CV
            </a>
          </span>
        </button>
      </div>
      <div className="pt:12 md:pt-20">
        <p
          data-aos="fade-down"
          data-aos-duration="2000"
          className="px-4 pt-20 pb-4 md:pt-28 text-4xl font-semibold"
        >
          MY SKILL
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="p-4 w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Technical Skill</p>
            <div className="h-full flex itcems-center justify-around flex-wrap">
              <CircleProgress
                percent={85}
                colorFrom="#E53935"
                colorTo="#E53935"
                animationDuration={2}
                delay={0}
              >
                <a
                  href="#"
                  className="text-red-600 text-3xl hover:text-red-500"
                >
                  <i className="text-5xl">
                    <FaHtml5 />
                    <p className="text-sm">85%</p>
                  </i>
                </a>
              </CircleProgress>
              <CircleProgress
                percent={75}
                colorFrom="#1E88E5"
                colorTo="#1E88E5"
                animationDuration={2}
                delay={2}
              >
                <a
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-500"
                >
                  <i className="text-5xl">
                    <FaCss3Alt />
                    <p className="text-sm">75%</p>
                  </i>
                </a>
              </CircleProgress>
              <CircleProgress
                percent={60}
                colorFrom="#FFEB3B"
                colorTo="#FFEB3B"
                animationDuration={2}
                delay={4}
              >
                <a
                  href="#"
                  className="text-yellow-500 text-3xl hover:text-yellow-400"
                >
                  <i className="text-5xl">
                    <IoLogoJavascript />
                    <p className="text-sm">60%</p>
                  </i>
                </a>
              </CircleProgress>
              <CircleProgress
                percent={55}
                colorFrom="#2196F3"
                colorTo="#2196F3"
                animationDuration={2}
                delay={6}
              >
                <a
                  href="#"
                  className="text-blue-500 text-3xl hover:text-blue-400"
                >
                  <i className="text-5xl">
                    <FaReact />
                    <p className="text-sm">55%</p>
                  </i>
                </a>
              </CircleProgress>
              <CircleProgress
                percent={20}
                colorFrom="#43A047"
                colorTo="#43A047"
                animationDuration={2}
                delay={8}
              >
                <a
                  href="#"
                  className="text-green-600 text-3xl hover:text-green-500"
                >
                  <i className="text-6xl">
                    <FaNodeJs />
                    <p className="text-sm">20%</p>
                  </i>
                </a>
              </CircleProgress>
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Professional Skill</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p>Creative</p>
                <ProgressBar
                  percent={75}
                  colorFrom="#43A047"
                  colorTo="#43A047"
                  animationDuration={2}
                  animationDelay={0}
                ></ProgressBar>
              </div>
              <div>
                <p>Communication</p>
                <ProgressBar
                  percent={90}
                  colorFrom="#108ee9"
                  colorTo="#87d068"
                  animationDuration={2}
                  animationDelay={2}
                ></ProgressBar>
              </div>
              <div>
                <p>Problem Solving</p>
                <ProgressBar
                  percent={70}
                  colorFrom="#108ee9"
                  colorTo="#87d068"
                  animationDuration={2}
                  animationDelay={4}
                ></ProgressBar>
              </div>
              <div>
                <p>Teamwork</p>
                <ProgressBar
                  percent={75}
                  colorFrom="#108ee9"
                  colorTo="#87d068"
                  animationDuration={2}
                  animationDelay={6}
                ></ProgressBar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        data-aos="fade-down"
        data-aos-duration="2000"
        className="p-4 pt-20 md:pt-28 text-4xl font-semibold"
      >
        PROJECT
      </p>
      <div className="flex flex-wrap justify-around">
        <Tilt>
          <div className="flex flex-col gap-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset="150"
              className={` card ${theme} rounded-lg h-auto w-72 mt-8`}
            >
              <img
                src={Backend}
                alt=""
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="px-2 pb-4 flex flex-col gap-6">
                <p className="pt-2 text-2xl font-semibold">Backend Developer</p>
                <p>
                  Our backend services ensure robust, secure, and scalable
                  solutions to power your applications efficiently.
                </p>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="flex flex-col gap-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset="150"
              className={` card ${theme} rounded-lg h-auto w-72 mt-8`}
            >
              <img
                src={Backend}
                alt=""
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="px-2 pb-4 flex flex-col gap-6">
                <p className="pt-2 text-2xl font-semibold">Backend Developer</p>
                <p>
                  Our backend services ensure robust, secure, and scalable
                  solutions to power your applications efficiently.
                </p>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="flex flex-col gap-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset="150"
              className={` card ${theme} rounded-lg h-auto w-72 mt-8`}
            >
              <img
                src={Backend}
                alt=""
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="px-2 pb-4 flex flex-col gap-6">
                <p className="pt-2 text-2xl font-semibold">Backend Developer</p>
                <p>
                  Our backend services ensure robust, secure, and scalable
                  solutions to power your applications efficiently.
                </p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Home;
