import React, { useEffect } from "react";
import { motion } from "framer-motion";
import briyanibg from "../Assets/bgvideo.mp4";
import "../Styles/vm.css";
import ShinyText from "../components/ShinyText/ShinyText";

export function InstagramEmbed() {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);
    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(elfsightScript);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden top-[10vh] sm:top-[5vh] md:top-[-25vh] lg:top-[-35vh] xl:top-[-20vh]">
    {/* Background Video */}
    <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
      <video
        autoPlay
        loop
        muted
        className="w-full h-[70vh] sm:h-[50vh] lg:h-[70vh] object-cover absolute top-0 left-0 z-0"
      >
        <source src={briyanibg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  
    {/* Instagram Feed Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto max-w-4xl p-4 z-20 top-[-1vh] sm:top-[-45vh] lg:top-[-50vh] xl:top-[-75vh]"
    >
      <div className="instagram-embed-container border-[6px] border-[#d2a260] relative rounded-lg shadow-lg p-4 bg-[#121414]">
        {/* Title with Shiny Text */}
        <h2 className="fabril-fatface text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-playfair text-[#d2a260]">
          <ShinyText
            text="Taste Our Instagram Feed"
            disabled={false}
            speed={3}
            className="custom-class fabril-fatface text-2xl sm:text-3xl"
          />
        </h2>
        <div className="relative h-[85  vh] sm:h-[60vh] md:h-[50vh] xl:h-[50vh]">
          {/* Dark Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"
            style={{ pointerEvents: "none" }} // Allow clicks to pass through
          ></div>
          <div
            className="elfsight-app-fc51a3d7-8e7c-41f0-8efb-d1ab120c441a border-[6px] border-[#d2a260] relative"
            data-elfsight-app-lazy
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "550px", // Ensure max height
              overflow: "hidden", // Prevent overflowing content
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  </div>
  );
}


// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import briyanibg from "../Assets/briyani1.mp4";
// import "../Styles/vm.css";
// import ShinyText from "../components/ShinyText/ShinyText";
// import bginsta from "../Assets/bginsta.png";

// export function InstagramEmbed({ profileUrl }) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//www.instagram.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Background Video */}
//       <div className="relative w-full">
//         <div className="backg w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] object-cover absolute top-0 left-0 z-0 rounded-md">
//         <img src={bginsta} alt="bginsta" className="w-full h-full object-cover rounded-full" />
//         </div>
//         {/* Glass Layer Effect */}
//         <div className="absolute top-0 left-0 w-full h-[80vh] bg-black/40 backdrop-blur-sm"></div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative mx-auto max-w-4xl p-4 z-20 mt-[-10vh] sm:mt-[25vh] lg:mt-[-0vh]"
//       >
//         <div className="instagram-embed-container relative rounded-lg shadow-lg p-4 bg-[#121414]">
//           <h2 className="fabril-fatface text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-playfair text-[#d2a260]">
//             <ShinyText
//               text="Taste Our Instagram Feed"
//               disabled={false}
//               speed={3}
//               className="custom-class fabril-fatface text-2xl sm:text-3xl"
//             />
//           </h2>
//           <blockquote
//             className="instagram-media"
//             data-instgrm-permalink={profileUrl}
//             data-instgrm-version="14"
//             style={{
//               background: "red",
//               border: 0,
//               borderRadius: "3px",
//               boxShadow: "none",
//               margin: 0,
//               padding: 0,
//               width: "100%",
//               height: "50vh",
//               maxHeight: "450px",
//             }}
//           >
//             <div className="p-4">
//               <a
//                 href={profileUrl}
//                 className="block bg-black text-center no-underline w-full"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="flex flex-row items-center justify-center sm:justify-start">
//                   <div className="bg-gray-100 rounded-full h-8 w-8 sm:h-10 sm:w-10 mr-3.5"></div>
//                   <div className="flex flex-col flex-grow justify-center">
//                     <div className="bg-gray-100 rounded h-3 w-20 sm:w-25 mb-1.5"></div>
//                     <div className="bg-gray-100 rounded h-3 w-12 sm:w-15"></div>
//                   </div>
//                 </div>
//                 <div className="pt-4"></div>
//                 <div className="block h-12 mx-auto my-3 w-12">
//                   <svg
//                     className="w-12 h-12"
//                     viewBox="0 0 60 60"
//                     version="1.1"
//                     xmlns="https://www.w3.org/2000/svg"
//                     xmlnsXlink="https://www.w3.org/1999/xlink"
//                   >
//                     <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                       <g transform="translate(-511.000000, -20.000000)" fill="#000000">
//                         <g>
//                           <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899"></path>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </blockquote>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
