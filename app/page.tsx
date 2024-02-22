'use client';
import React from "react";
import { motion } from "framer-motion"
import Titlebar from "@/app/components/Titlebar/Titlebar";
import Card from "@/app/components/Card/Card";

function calculateTimeSinceJuly2022(date: Date): { years: number; months: number } {
    const july2022 = new Date('July 1, 2022');
    const diffInMillis = date.getTime() - july2022.getTime();

    const years = Math.floor(diffInMillis / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diffInMillis % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    return { years, months };
}

function calculateTimeSinceOct2019(date: Date): { years: number; months: number } {
    const oct2019 = new Date('October 22, 2019');
    const diffInMillis = date.getTime() - oct2019.getTime();

    const years = Math.floor(diffInMillis / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diffInMillis % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

    return { years, months };
}

const currentDate = new Date();
const timeSinceJuly2022 = calculateTimeSinceJuly2022(currentDate);
const timeSinceOct2019 = calculateTimeSinceOct2019(currentDate);

const items = [
    {
        title: "E2 (Intermediate) Software Engineer",
        description: "Ocado Technology - Hatfield, UK",
        time: `Jul 2022 - Present · ${timeSinceJuly2022.years} Years ${timeSinceJuly2022.months} Months `,
        fromColor: 'from-red-400',
        toColor: 'to-blue-600'
    },
    {
        title: "Full-Stack Software Engineer",
        description: "RCRaceControl - Ware, UK",
        time: `Oct 2019  - Present · ${timeSinceOct2019.years} Years ${timeSinceOct2019.months} Months `,
        fromColor: 'from-indigo-500',
        toColor: 'to-red-600'
    },
    {
        title: "Full-Stack Software Engineer",
        description: "HertsRCModels - Ware, UK",
        time: "Dec 2019 - Feb 2022 · 2 Years 3 Months",
        fromColor: 'from-blue-200',
        toColor: 'to-orange-600'
    },
]

//
const Home: React.FunctionComponent = () => {
  return (
      <div className="flex flex-col items-center h-screen overflow-scroll dark:bg-[#16181d] selection:bg-blue-900/20 selection:text-blue-500">

          <div className="max-w-5xl w-full flex flex-col">
              <motion.div
                animate={{
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
              >
                  <Titlebar />
              </motion.div>
              <motion.div
                  animate={{
                      opacity: [0, 1],
                      translateY: [30, 0],
                  }}
                  transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.5,
                  }}
              >
                  <div className="px-12 z-10 relative mt-8 h-full justify-center duration-300 transition-all text-xl sm:text-4xl leading-normal items-center w-full font-semibold flex flex-col">
                    <div>
                      <span className="dark:text-indigo-200">
                          Hi,
                          <motion.div
                              style={{
                                  marginBottom: '-20px',
                                  marginRight: '-45px',
                                  paddingBottom: '20px',
                                  paddingRight: '45px',
                                  display: 'inline-block',
                              }}
                              animate={{ rotate: 20 }}
                              transition={{
                                  from: 0,
                                  duration: 1,
                                  ease: 'easeInOut',
                                  repeat: Infinity,
                                  repeatType: 'mirror'
                              }}
                          >
                            👋
                          </motion.div> I'm Marques, a software engineer from the UK.
                      </span>
                        <motion.div
                            animate={{
                                opacity: [0, 1],
                                translateY: [30, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        >
                          <span className="opacity-50 dark:text-white/30">
                             {' '} Here, I share through my writing experiences, thoughts, and ideas as a software engineer and everything I'm currently learning.
                          </span>
                        </motion.div>
                    </div>
                  </div>
                  <motion.div
                      animate={{
                          opacity: [0, 1],
                          translateY: [30, 0],
                      }}
                      transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: 0.5,
                      }}
                  >
                      <div className="z-10 relative text-center w-full flex flex-col items-center self-center hover:cursor-pointer">
                          <div onClick={() => window.location.href = '/CV.pdf'} className="bg-gray-200 hover:cursor-pointer dark:bg-gray-500/20 rounded-lg px-2 py-1 border border-white/10 text-gray-600 dark:text-white/80 duration-300 ease-in-out transition-all hover:inner-border-2 hover:inner-border-blue-500 hover:shadow hover:shadow-blue-500">
                              Download Resume
                          </div>
                      </div>
                  </motion.div>
              </motion.div>
              <motion.div
                  animate={{
                      opacity: [0, 1],
                      translateY: [30, 0],
                  }}
                  transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.5,
                  }}
              >
                  <div className="px-12 mt-24 items-center w-full">
                      <div>
                      <span className="text-gray-800 dark:text-indigo-200 text-2xl font-semibold">
                          Work Experience
                      </span>
                          {items.map((item, index) => (
                              <motion.div
                                  className="my-8"
                                  key={index}
                                  animate={{
                                      opacity: [0, 1],
                                      translateY: [30, 0],
                                  }}
                                  transition={{
                                      duration: 1,
                                      ease: "easeInOut",
                                      delay: 0.5 + index * 0.2,
                                  }}
                              >
                                  <motion.div
                                      whileHover={{
                                          scale: 1.05,
                                          transition: { duration: 0.2 },
                                      }}
                                  >
                                    <Card time={item.time} toColor={item.toColor} fromColor={item.fromColor} title={item.title} description={item.description}/>
                                  </motion.div>
                              </motion.div>
                          ))}
                      </div>
                  </div>
              </motion.div>
          </div>
          <motion.div
              animate={{
                  opacity: [0, 1],
                  translateY: [30, 0],
              }}
              transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.5 * items.length * 0.2 + 0.5,
              }}
          >
              <div className="relative bottom-0 mb-4 text-white/30">
                  &copy; {new Date().getFullYear()} Marques Scripps
              </div>
          </motion.div>
      </div>
  )
}

export default Home;
