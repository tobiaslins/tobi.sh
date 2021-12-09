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
          content="Tobias Lins - React, React Native, Node.js & GraphQL Consultant"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Tobias Lins",
  "url": "https://tobi.sh",
  "image": "https://pbs.twimg.com/profile_images/1264167841827360768/rbrgZalT_400x400.jpg",
  "sameAs": "https://twitter.com/linstobias",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Splitbee"
  }  
}`,
          }}
        ></script>
      </Head>
      <h1 className="text-4xl font-bold">Tobias Lins</h1>
      <div className="mb-5 font-medium text-gray-600">
        Freelance Software Consultant focusing on React, React Native, GraphQL,
        Node.js & PostgreSQL
      </div>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Projects</h2>
      <motion.div
        variants={{
          hidden: { opacity: 1, scale: 1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0,
              easings: "backOut",
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        <Project
          name="Splitbee"
          color="#FFF0D3"
          url="https://splitbee.io/"
          style={{ scale }}
          description="Splitbee is an analytics and A/B testing tool that focuses on usability and performance"
          logo={
            <img
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
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
          description="A mobile app for climbers that provides workouts and tracking."
          logo={
            <img
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
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
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
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
      <h2 className="mt-8 mb-3 text-2xl font-bold">Work Experience</h2>
      <div className="inline-block w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg last:border-b-0">
        <table className="w-full">
          <tbody className="bg-white">
            <Position
              company="Tobias Lins"
              position="Freelance Consultant, System Architect"
              description="Helping clients develop React & Node applications"
              url=""
              from="June 2019"
              logo={
                <img
                  className="w-10 h-10"
                  src={`/tobiaslins.svg`}
                  alt="Tobias Lins logo"
                />
              }
            />
            <Position
              company="d:code:it"
              position="Fullstack Software Engineer"
              description="Building Axcept.io, a visual testing platform"
              url=""
              from="Sept. 2018"
              to="July 2019"
              logo={
                <img
                  className="w-10 h-10"
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
      <h2 className="mt-8 mb-3 text-2xl font-bold">Contact</h2>
      <div className="text-base text-gray-900">
        If you are interested in working with me just drop me a short mail at{" "}
        <b>me@tobi.sh</b>
      </div>
      <div className="flex justify-center mt-8 mb-5 font-medium text-gray-600">
        <a
          data-splitbee-event="Click Github"
          target="_blank"
          href="https://github.com/tobiaslins"
        >
          GitHub
        </a>
        <span className="mx-2 font-bold">·</span>
        <a
          data-splitbee-event="Click LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/tobias-lins-971082109/"
        >
          LinkedIn
        </a>
        <span className="mx-2 font-bold">·</span>
        <a
          data-splitbee-event="Click Resume"
          target="_blank"
          href="https://stackoverflow.com/story/tobiaslins"
        >
          Resume
        </a>
        <span className="mx-2 font-bold">·</span>
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
