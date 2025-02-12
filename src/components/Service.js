import React from "react";
import Nav from "./Nav";
import arrow from "../assets/arrow.gif";
import Footer from "./Footer";

// services img
import labour from "../svgicons/labouricon.png";
import carpenter from "../svgicons/carpentericon.png";
import electrician from "../svgicons/electricianicon.png";
import plumber from "../svgicons/plumbericon.png";
import Supervisor from "../svgicons/supervisoricon.png";
import Shopfitter from "../svgicons/shopfittericon.png";
import PageProgress from "react-page-progress";

export default function Service() {
  return (
    <div className="service" id="offer">
      <PageProgress color={"skyblue"} height={5} />

      <Nav />
      <section>
        <div className="explore">
          <h2>Let's talk Services</h2>
        </div>
        <div className="arr">
          <a href="#gridd">
            <img src={arrow} alt="hii" height={50} id="arroww" />
          </a>
        </div>
      </section>
      {/* card section */}
      <section class="gridsec text-gray-600 body-font" id="gridd">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Showcasing the Best of all times
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Organizations or companies are renowned for their work. The reason
              we are proud of Shreeram Constructions is the fact that they have
              built many dreams! With our designs, we enrich the interior of
              your home in addition to making it a place to live.{" "}
            </p>
          </div>
        </div>
        {/* services */}
        <section class=" servicesec text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
              <div class="flex-grow md:pl-10 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={labour} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    General Laborer
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Assist with various tasks on-site, including loading
                    materials and cleaning.<br></br>
                    Skills: Physical fitness, teamwork, basic tools knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={carpenter} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Carpenter
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Build and repair structures, frameworks, and
                    fixtures.<br></br>
                    Skills: Precision, blueprint reading, hand tools proficiency.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={electrician} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Electrician[Service unavailable at this moment]
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Install and maintain electrical systems.<br></br>
                    Skills: Knowledge of wiring systems, problem-solving,
                    safety protocols.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={plumber} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Plumber
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Install and repair piping systems for water and
                    gas.<br></br>
                    Skills: Technical expertise, attention to detail, code knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                5
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={Supervisor} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Site Supervisor
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Supervise daily operations on-site, ensure safety
                    standards.<br></br>
                    Skills: Team management, safety regulations knowledge, logistics.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                6
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <img src={Shopfitter} alt="elevation" height={50} />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    shopfitter
                  </h2>
                  <p class="leading-relaxed">
                    Duties: Works to fit counter tops and shelves.<br></br>
                    Skills: expertise in joinery and carpentry Skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
