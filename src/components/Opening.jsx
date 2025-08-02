import React, { useEffect } from "react";
import CountUp from "./assets/CountUp";
import { motion, useAnimation } from "motion/react";
import ShinyText from "./assets/ShinyText";

const Opening = () => {
  const controls = useAnimation();
  const controlsIS = useAnimation();
  const controlsMAW = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      // First animation
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 5.5, duration: 0.7 },
      });

      await controls.start({
        y: 0,
        transition: { duration: 1.4 },
      });

      // Second animation after the first completes
      await controls.start({
        y: -200,
        opacity: 0,
        rotateX: 90,
        transition: { duration: 1 },
      });
    };

    sequence();
  }, [controls]);

  useEffect(() => {
    const sequence = async () => {
      // First animation
      await controlsIS.start({
        opacity: 1,
        y: 0,
        transition: { delay: 6.6, duration: 0.7 },
      });

      await controlsIS.start({
        y: 0,
        transition: { duration: 1.4 },
      });

      // Second animation after the first completes
      await controlsIS.start({
        y: -200,
        opacity: 0,
        rotateX: 90,
        transition: { duration: 1 },
      });
    };

    sequence();
  }, [controlsIS]);

  useEffect(() => {
    const sequence = async () => {
      // First animation
      await controlsMAW.start({
        opacity: 1,
        y: 0,
        transition: { delay: 7.6, duration: 0.7 },
      });

      // Second animation after the first completes
      await controlsMAW.start({
        y: -200,
        opacity: 0,
        rotateX: 90,
        transition: { duration: 1, delay: 7.6 },
      });
    };

    sequence();
  }, [controlsMAW]);
  return (
    <motion.div
      animate={{ y: -900, transition: {ease: "easeOut", delay: 10, duration: 1.6} }}
      
      style={{ fontFamily: "Sora Variable" }}
      className="fixed bg-black h-screen w-screen flex flex-col items-center justify-center z-500"
    >
      <motion.div
        animate={{
          y: -200,
          opacity: 0,
          rotateX: 90,
        }}
        transition={{ delay: 5, duration: 0.7 }}
      >
        <CountUp
          from={0}
          to={1000}
          separator=","
          direction="up"
          duration={1}
          className="text-white font-extrabold text-6xl absolute -translate-x-1/2"
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={controls}>
        <h1 className="text-white font-extrabold text-6xl absolute -translate-x-1/2">
          THIS
        </h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={controlsIS}>
        <h1 className="text-white font-extrabold text-6xl absolute -translate-x-1/2">
          IS
        </h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={controlsMAW}>
        <ShinyText
          text="MAW"
          disabled={false}
          speed={2}
          className="custom-class text-white font-extrabold text-6xl absolute -translate-x-1/2"
        />
      </motion.div>
    </motion.div>
  );
};

export default Opening;
