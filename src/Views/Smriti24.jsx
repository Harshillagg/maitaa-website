import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import AboutSmriti from '../Components/AboutSmriti';
import ScheduleSmriti from '../Components/ScheduleSmriti';
import SponsorsSmriti from '../Components/SponsorsSmriti';

export default function Smriti24({ setProgress }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 500)
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const COUNTDOWN_FROM = "3/16/2024";

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    const intervalRef = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className='bg-light text-dark'>
      <div className="flex flex-col items-center h-screen bg-[url('/smriti-bg2.jpg')] bg-no-repeat bg-fixed bg-cover">
        <nav className="fixed top-10 w-full max-w-2xl rounded-3xl border-2 border-secondary bg-light shadow-lg z-50">
          <div className="mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <NavLink to="/smriti24" className="font-semibold font-subhead text-4xl text-dark">Smriti</NavLink>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-dark hover:text-secondary">
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex space-x-6">
              <NavLink onClick={() => scrollToSection('about')} className="text-dark hover:text-secondary text-lg font-semibold">About</NavLink>
              <NavLink onClick={() => scrollToSection('schedule')} className="text-dark hover:text-secondary text-lg font-semibold">Schedule</NavLink>
              <NavLink onClick={() => scrollToSection('sponsors')} className="text-dark hover:text-secondary text-lg font-semibold">Sponsors</NavLink>
            </div>
            <button className="hidden md:flex border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-500 hover:text-white text-xl font-semibold py-2 px-4 rounded-2xl ">
              Register
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="flex flex-col md:hidden">
              <NavLink onClick={() => scrollToSection('about')} className="text-dark hover:text-secondary">About</NavLink>
              <NavLink onClick={() => scrollToSection('schedule')} className="text-dark hover:text-secondary">Schedule</NavLink>
              <NavLink onClick={() => scrollToSection('sponsors')} className="text-dark hover:text-secondary">Sponsors</NavLink>
              <button className="border-2 border-secondary bg-light hover:bg-secondary text-secondary duration-200 hover:text-white font-semibold py-2 px-4 rounded-2xl mt-4">
                Register
              </button>
            </div>
          )}
        </nav>
        <section class="mt-40">
          <div class="px-4 mx-auto max-w-screen-xl text-center ">
            <h1 class="mb-4 text-8xl font-extrabold tracking-widest font-normaltext text-dark">MAIT SMRITI 2k24</h1>
            <p class="mb-16 text-4xl font-semibold font-subhead tracking-widest text-secondary">RELIVE | REJOICE | RECONNECT</p>
          </div>
          {/* <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-40 h-40 absolute right-40"
                animate={{
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",

                }}
            >
                <svg fill="#121212" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 260" enable-background="new 0 0 260 260" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32.478,129.993c0-6.691,5.422-12.114,12.111-12.114c6.689,0,12.111,5.424,12.111,12.114 c0,6.691-5.422,12.114-12.111,12.114C37.901,142.107,32.478,136.683,32.478,129.993z M89.844,126.509 c-2.74-1.858-6.473-1.143-8.333,1.6L69.381,146H29.975c-1.088,0-2.156,0.296-3.089,0.856L4.912,160.051 c-2.332,1.399-3.431,4.193-2.676,6.807l6.458,22.38c0.758,2.629,3.157,4.339,5.762,4.339c0.551,0,1.111-0.077,1.667-0.237 c3.184-0.919,5.02-4.244,4.101-7.428l-5.178-17.947L28,160.229V222l-16.566,24.971c-2.132,3.225-1.247,7.567,1.978,9.699 c1.188,0.786,2.529,1.162,3.854,1.162c2.271,0,4.499-1.104,5.845-3.141l17.703-26.773c0.757-1.145,1.161-2.487,1.161-3.86v-20.074 c0.503-0.013,0.999-0.034,1.484-0.068l8.516,20.79V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-27.673c0-0.91-0.177-1.812-0.522-2.653 l-11.478-28.021V158h18.587c1.99,0,3.85-0.986,4.966-2.633l13.915-20.524C93.303,132.1,92.587,128.369,89.844,126.509z M248.08,33.421c-2.593-1.264-5.159-2.546-7.697-3.845c-2.563-1.34-5.118-2.73-7.634-4.119c-4.699-2.599-9.289-5.262-13.788-7.974 c-0.329,0.184-0.661,0.362-0.991,0.545c-0.026,5.356-0.248,10.582-0.545,15.919c-0.325,5.701-0.766,11.463-1.326,17.281 c-9.503-6.017-18.646-12.449-27.3-18.981c-0.337,0.143-0.671,0.291-1.008,0.432c-0.649,5.207-1.394,10.456-2.256,15.751 c-0.461,2.829-0.952,5.671-1.475,8.524c-0.524,2.851-1.068,5.741-1.688,8.52c-4.562-3.653-9.001-7.353-13.314-11.094 c-4.035-3.509-7.934-6.989-11.793-10.708c-0.359,0.109-0.718,0.216-1.078,0.324c-1.194,5.117-2.487,10.264-3.902,15.446 c-0.758,2.776-1.548,5.56-2.37,8.353c-0.837,2.735-1.711,5.456-2.615,8.196c-8.013-7.973-15.495-15.839-22.61-24.338 c-0.374,0.07-0.749,0.133-1.123,0.203c-1.731,4.976-3.563,9.972-5.519,14.988l-1.597,4.038l-1.662,3.94 c-1.124,2.627-2.281,5.257-3.471,7.892c-3.676-4.499-7.221-9.016-10.636-13.548c-3.188-4.24-6.28-8.691-9.253-13.063 c-0.379,0.03-0.757,0.067-1.136,0.096c-2.25,4.779-4.602,9.569-7.077,14.364c-2.658,5.053-5.451,10.011-8.37,15.026 c-3.178-4.848-6.227-9.701-9.147-14.553c-2.724-4.665-5.324-9.33-7.824-13.991c-0.382-0.009-0.762-0.026-1.144-0.036 c-2.741,4.525-5.585,9.086-8.549,13.554c-3.171,4.699-6.471,9.39-9.901,14.07c-2.651-5.173-5.185-10.21-7.567-15.467 c-2.222-4.919-4.32-9.824-6.315-14.715c-0.371-0.049-0.741-0.106-1.112-0.155c-1.493,1.97-2.999,3.94-4.542,5.904l-2.683,3.38 l-2.715,3.267C9.694,71.196,5.912,75.526,2,79.83V50.714v-0.962v-4.138c20.565,4.315,41.867,6.602,63.697,6.602 c62.298,0,120.348-18.48,169.002-50.216v0.001L246,1.999C246.982,12.411,247.987,22.759,248.08,33.421z M141.579,142.107 c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114s-12.111,5.424-12.111,12.114 C129.468,136.683,134.89,142.107,141.579,142.107z M190.012,175.023l-31.442-27.537c-1.094-0.958-2.499-1.486-3.953-1.486h-22.944 c-1.325,0-2.612,0.438-3.662,1.247l-17.924,13.809l-13.515-11.678c-2.507-2.165-6.296-1.891-8.463,0.617 c-2.167,2.507-1.89,6.296,0.617,8.463l17.22,14.88c2.157,1.863,5.327,1.952,7.584,0.213l16.471-12.69L130,197.429l-13.67,21.417 c-0.537,0.842-0.888,1.788-1.029,2.776l-4.032,28.219c-0.547,3.827,2.112,7.373,5.939,7.92c0.336,0.048,0.669,0.071,0.999,0.071 c3.427,0,6.422-2.52,6.921-6.011l3.817-26.72L142,204.65V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-55v-4v-30.812l26.105,22.863 c1.139,0.997,2.548,1.486,3.951,1.486c1.669,0,3.329-0.692,4.516-2.047C192.756,180.997,192.505,177.207,190.012,175.023z M255.511,234.689l-21.518-18.366l-5.02-24.329V156.39l27.99-41.25c1.86-2.742,1.146-6.474-1.596-8.334 c-2.743-1.861-6.474-1.146-8.334,1.596L221.522,146h-32.7l-16.73-14.769c-2.483-2.193-6.276-1.958-8.469,0.527 c-2.193,2.484-1.957,6.276,0.527,8.469l18.432,16.271c1.097,0.968,2.509,1.502,3.971,1.502H203v93c0,3.866,3.108,7,6.974,7 s7-3.134,7-7v-47.885l3.794,18.388c0.314,1.524,1.127,2.9,2.311,3.91l23.343,19.925c1.318,1.125,2.935,1.676,4.542,1.676 c1.978,0,3.942-0.833,5.327-2.455C258.8,241.618,258.452,237.199,255.511,234.689z M210.669,141.855 c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114c-6.689,0-12.111,5.424-12.111,12.114 C198.558,136.431,203.98,141.855,210.669,141.855z"></path> </g></svg>
            </motion.svg>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-40 h-40 absolute left-40"
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",

                }}
            >
                <svg fill="#121212" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 260" enable-background="new 0 0 260 260" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32.478,129.993c0-6.691,5.422-12.114,12.111-12.114c6.689,0,12.111,5.424,12.111,12.114 c0,6.691-5.422,12.114-12.111,12.114C37.901,142.107,32.478,136.683,32.478,129.993z M89.844,126.509 c-2.74-1.858-6.473-1.143-8.333,1.6L69.381,146H29.975c-1.088,0-2.156,0.296-3.089,0.856L4.912,160.051 c-2.332,1.399-3.431,4.193-2.676,6.807l6.458,22.38c0.758,2.629,3.157,4.339,5.762,4.339c0.551,0,1.111-0.077,1.667-0.237 c3.184-0.919,5.02-4.244,4.101-7.428l-5.178-17.947L28,160.229V222l-16.566,24.971c-2.132,3.225-1.247,7.567,1.978,9.699 c1.188,0.786,2.529,1.162,3.854,1.162c2.271,0,4.499-1.104,5.845-3.141l17.703-26.773c0.757-1.145,1.161-2.487,1.161-3.86v-20.074 c0.503-0.013,0.999-0.034,1.484-0.068l8.516,20.79V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-27.673c0-0.91-0.177-1.812-0.522-2.653 l-11.478-28.021V158h18.587c1.99,0,3.85-0.986,4.966-2.633l13.915-20.524C93.303,132.1,92.587,128.369,89.844,126.509z M248.08,33.421c-2.593-1.264-5.159-2.546-7.697-3.845c-2.563-1.34-5.118-2.73-7.634-4.119c-4.699-2.599-9.289-5.262-13.788-7.974 c-0.329,0.184-0.661,0.362-0.991,0.545c-0.026,5.356-0.248,10.582-0.545,15.919c-0.325,5.701-0.766,11.463-1.326,17.281 c-9.503-6.017-18.646-12.449-27.3-18.981c-0.337,0.143-0.671,0.291-1.008,0.432c-0.649,5.207-1.394,10.456-2.256,15.751 c-0.461,2.829-0.952,5.671-1.475,8.524c-0.524,2.851-1.068,5.741-1.688,8.52c-4.562-3.653-9.001-7.353-13.314-11.094 c-4.035-3.509-7.934-6.989-11.793-10.708c-0.359,0.109-0.718,0.216-1.078,0.324c-1.194,5.117-2.487,10.264-3.902,15.446 c-0.758,2.776-1.548,5.56-2.37,8.353c-0.837,2.735-1.711,5.456-2.615,8.196c-8.013-7.973-15.495-15.839-22.61-24.338 c-0.374,0.07-0.749,0.133-1.123,0.203c-1.731,4.976-3.563,9.972-5.519,14.988l-1.597,4.038l-1.662,3.94 c-1.124,2.627-2.281,5.257-3.471,7.892c-3.676-4.499-7.221-9.016-10.636-13.548c-3.188-4.24-6.28-8.691-9.253-13.063 c-0.379,0.03-0.757,0.067-1.136,0.096c-2.25,4.779-4.602,9.569-7.077,14.364c-2.658,5.053-5.451,10.011-8.37,15.026 c-3.178-4.848-6.227-9.701-9.147-14.553c-2.724-4.665-5.324-9.33-7.824-13.991c-0.382-0.009-0.762-0.026-1.144-0.036 c-2.741,4.525-5.585,9.086-8.549,13.554c-3.171,4.699-6.471,9.39-9.901,14.07c-2.651-5.173-5.185-10.21-7.567-15.467 c-2.222-4.919-4.32-9.824-6.315-14.715c-0.371-0.049-0.741-0.106-1.112-0.155c-1.493,1.97-2.999,3.94-4.542,5.904l-2.683,3.38 l-2.715,3.267C9.694,71.196,5.912,75.526,2,79.83V50.714v-0.962v-4.138c20.565,4.315,41.867,6.602,63.697,6.602 c62.298,0,120.348-18.48,169.002-50.216v0.001L246,1.999C246.982,12.411,247.987,22.759,248.08,33.421z M141.579,142.107 c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114s-12.111,5.424-12.111,12.114 C129.468,136.683,134.89,142.107,141.579,142.107z M190.012,175.023l-31.442-27.537c-1.094-0.958-2.499-1.486-3.953-1.486h-22.944 c-1.325,0-2.612,0.438-3.662,1.247l-17.924,13.809l-13.515-11.678c-2.507-2.165-6.296-1.891-8.463,0.617 c-2.167,2.507-1.89,6.296,0.617,8.463l17.22,14.88c2.157,1.863,5.327,1.952,7.584,0.213l16.471-12.69L130,197.429l-13.67,21.417 c-0.537,0.842-0.888,1.788-1.029,2.776l-4.032,28.219c-0.547,3.827,2.112,7.373,5.939,7.92c0.336,0.048,0.669,0.071,0.999,0.071 c3.427,0,6.422-2.52,6.921-6.011l3.817-26.72L142,204.65V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-55v-4v-30.812l26.105,22.863 c1.139,0.997,2.548,1.486,3.951,1.486c1.669,0,3.329-0.692,4.516-2.047C192.756,180.997,192.505,177.207,190.012,175.023z M255.511,234.689l-21.518-18.366l-5.02-24.329V156.39l27.99-41.25c1.86-2.742,1.146-6.474-1.596-8.334 c-2.743-1.861-6.474-1.146-8.334,1.596L221.522,146h-32.7l-16.73-14.769c-2.483-2.193-6.276-1.958-8.469,0.527 c-2.193,2.484-1.957,6.276,0.527,8.469l18.432,16.271c1.097,0.968,2.509,1.502,3.971,1.502H203v93c0,3.866,3.108,7,6.974,7 s7-3.134,7-7v-47.885l3.794,18.388c0.314,1.524,1.127,2.9,2.311,3.91l23.343,19.925c1.318,1.125,2.935,1.676,4.542,1.676 c1.978,0,3.942-0.833,5.327-2.455C258.8,241.618,258.452,237.199,255.511,234.689z M210.669,141.855 c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114c-6.689,0-12.111,5.424-12.111,12.114 C198.558,136.431,203.98,141.855,210.669,141.855z"></path> </g></svg>
            </motion.svg> */}
          <div className="font-bold tracking-widest text-center my-10 font-heading text-6xl text-dark">
            16<sup>th</sup> March
          </div>
        </section>
        <div className="w-[99vw]">
          <h1 class="my-2 text-3xl text-dark text-center">SEE YOU IN</h1>
          <div className="w-full max-w-3xl mx-auto flex items-center bg-light rounded-3xl">
            <CountdownItem num={remaining.days} text="days" />
            <CountdownItem num={remaining.hours} text="hours" />
            <CountdownItem num={remaining.minutes} text="minutes" />
            <CountdownItem num={remaining.seconds} text="seconds" />
          </div>
        </div>
        <div className="container mx-auto text-center scroll-smooth">
          <NavLink onClick={() => scrollToSection('about')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-auto my-10 animate-bounce text-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </NavLink>
        </div>
      </div>
      <section id="about" className="text-light bg-dark flex flex-col items-center justify-center">
        <AboutSmriti />
      </section>
      <section id="schedule" className="text-dark bg-light flex flex-col items-center justify-center">
        <ScheduleSmriti />
      </section>
      <section id="sponsors" className="text-light bg-dark flex flex-col items-center justify-center">
        <SponsorsSmriti />
      </section>
      <footer className="footer items-center p-4 bg-light text-dark shadow-xl">
        <aside className="items-center grid-flow-col">
          <img src="alumni-logo.png" alt="logo" className="w-20" />
          <p className=' text-xl'>Maintained under <a className='hover:underline font-bold text-secondary' href='https://github.com/IshaanMinocha/maitaa-website'>Alumni Cell
          </a> | © 2024 <a className='hover:underline font-bold text-secondary' href='https://mait.ac.in/'>
              MAIT
            </a>
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="linkedin" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="whatsapp" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="instagram" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="facebook" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="x" bgColor="#01447C" fgColor="#fff" />
          </a>
          <a>
            <SocialIcon className="m-1 hover:opacity-90 duration-100" url="/" network="youtube" bgColor="#01447C" fgColor="#fff" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="font-heading w-1/4 h-28 flex flex-col gap-1 items-center justify-center shadow-2xl">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-6xl text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-lg font-light text-secondary">
        {text}
      </span>
    </div>
  );
};

