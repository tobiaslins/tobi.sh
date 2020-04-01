import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Project } from "../components/project";
import { Position } from "../components/position";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div className="container mt-10">
      <Head>
        <title>Tobias Lins</title>
        <link rel="manifest" href="/static/manifest.json" />
        <meta
          name="description"
          content="Tobias Lins - React, React Native, Node.JS & GraphQL Consultant"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <h1 className="font-bold text-4xl">Tobias Lins</h1>
      <div className="text-gray-600 mb-5 font-medium">
        Freelance Software Consultant focusing on React, React Native, GraphQL,
        NodeJS & PostgreSQL
      </div>
      <h2 className="font-bold text-2xl mt-8 mb-3">Projects</h2>
      <motion.div
        variants={{
          hidden: { opacity: 1, scale: 1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0,
              easings: "backOut",
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-3  grid-cols-1 gap-3"
      >
        <Project
          name="Splitbee"
          color="#FFF0D3"
          url="https://splitbee.io/"
          style={{ scale }}
          description="Splitbee is an Analytics and A/B testing tool that focuses on usability and performance"
          logo={
            <img
              className="w-16 transform transition-transform duration-500 group-hover:scale-110"
              src="/logo.svg"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                React
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                TimescaleDB
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800 mr-2">
                GraphQL
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-green-100 text-green-800 mr-2">
                Cloudflare Workers
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-orange-100 text-orange-800 mr-2">
                Redis
              </span>
            </div>
          }
        />
        <Project
          name="Upclimb"
          url="https://apps.apple.com/br/app/upclimb/id1479219726?l=en"
          style={{ scale }}
          color="rgba(180, 216, 165, 0.23)"
          description="An Mobile App for climbers that provides workouts and tracking."
          logo={
            <img
              className="w-16 transform transition-transform duration-500 group-hover:scale-110"
              src="/upclimb.svg"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                React Native
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Sanity
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800 mr-2">
                GraphQL
              </span>
            </div>
          }
        />
        <Project
          name="Mobile Hub for Lisk"
          url="https://apps.apple.com/at/app/mobile-hub-for-lisk/id1390358799"
          style={{ scale }}
          color="rgba(108, 186, 248, 0.2)"
          description="An iOS and Android App for the Lisk Blockchain. Provides a wallet and an blockchain explorer"
          logo={
            <img
              className="w-16 transform transition-transform duration-500 group-hover:scale-110"
              src="/lisk_hub.png"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                React Native
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                LiskJS
              </span>
            </div>
          }
        />
      </motion.div>
      <h2 className="font-bold text-2xl mt-8 mb-3">Work Experience</h2>
      <div className="align-middle inline-block max-w-full w-full shadow overflow-hidden sm:rounded-lg border-b last:border-b-0 border-gray-200">
        <table className="w-full">
          <tbody className="bg-white">
            <Position
              company="Tobias Lins"
              position="Freelance Consultant, System Architect"
              description="I'm helping clients developing React & Node Applications"
              url=""
              from="June 2019"
              logo={
                <img
                  className="h-10 w-10"
                  src={`/tobiaslins.svg`}
                  alt="Tobias Lins logo"
                />
              }
            />
            <Position
              company="d:code:it"
              position="Fullstack Software Engineer"
              description="Building Axcept.io. An visual testing platform"
              url=""
              from="Sept. 2018"
              to="July 2019"
              logo={
                <img
                  className="h-10 w-10"
                  src={`/dcodeit.png`}
                  alt="d:code:it logo"
                />
              }
            />
            <Position
              company="mPAY24"
              position="Software Engineer"
              description="Working on the complete platform, website & SDKs"
              url=""
              from="Sept. 2014"
              to="June 2018"
              logo={
                <img
                  className="w-10"
                  src={`/mpay24.svg`}
                  alt="d:code:it logo"
                />
              }
            />
          </tbody>
        </table>
      </div>
      <h2 className="font-bold text-2xl mt-8 mb-3">Contact</h2>
      <div className="text-base text-gray-900">
        If you are interested in working with me just drop me a short mail at{" "}
        <b>me@tobi.sh</b>
      </div>
      <div className="mt-8 text-gray-600 mb-5 font-medium flex justify-center">
        <a
          data-splitbee-event="Click Github"
          target="_blank"
          href="https://github.com/tobiaslins"
        >
          Github
        </a>
        <span className="font-bold mx-2">·</span>
        <a
          data-splitbee-event="Click LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/tobias-lins-971082109/"
        >
          LinkedIn
        </a>
        <span className="font-bold mx-2">·</span>
        <a
          data-splitbee-event="Click Resume"
          target="_blank"
          href="https://stackoverflow.com/story/tobiaslins"
        >
          Resume
        </a>
        <span className="font-bold mx-2">·</span>
        <a
          data-splitbee-event="Click Twitter"
          target="_blank"
          href="https://twitter.com/linstobias"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Home;
