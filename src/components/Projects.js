import React from "react";
import { useContext } from "react";
import { ThemeLangContext } from "../Context/Context";

function Projects() {
  const { text, Lang, setLang } = useContext(ThemeLangContext);
  return (
    <div id="projects-section">
      <h1 className="mainTitle">{text.projects.mTitle}</h1>
      <div className="projects-container">
        {text.projects.pItems.map((pro) => {
          return (
            <div key={pro.id} className="pCard">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="./icons/proje1.png" alt="" />
                </a>
                <div class="p-5">
                  <a href="https://vercel.com/dogan-keles/redux-filmler">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {text.projects.pItems[0].title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {text.projects.pItems[0].descr}
                  </p>
                  <a
                    href="https://vercel.com/dogan-keles/redux-filmler"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {text.projects.pItems[0].goToLink}
                    <svg
                      class="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
