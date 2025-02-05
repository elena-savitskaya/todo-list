import { motion } from "framer-motion";
import { ParallaxSection } from "../components/parralax-section";
import { SectionCard } from "../components/card";

export const AboutPage = () => {
  return (
    <>
      <div className="container">
        <motion.h3
          className="header col s12 teal-text text-lighten-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is the purpose of a to do list?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          What is the purpose of a to do list? The main purpose of a to do list
          is to provide yourself with a list of your priorities in order to
          ensure that you don't forget anything and are able to effectively plan
          out your tasks so that they are all accomplished in the correct time
          frame.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Todoist gives you the confidence that everything is organized and
          taken into account so that you can succeed in the things that are
          important to you.
        </motion.p>
        <div className="section">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <SectionCard
                icon="flash_on"
                title="Start the day feeling calm and in control of the situation"
              >
                Get a clear picture of everything that needs to be done and
                don't lose sight of important tasks. Quick Add allows you to fix
                and organize tasks in seconds.
              </SectionCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <SectionCard
                icon="group"
                title="Direct energy in the right direction"
              >
                Todoist highlights the right tasks at the right time, and you
                always know what to focus on next. Priority levels highlight the
                most important tasks for the day.
              </SectionCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <SectionCard icon="settings" title="Distribute your workload">
                From business projects to shopping lists, distribute and close
                day-to-day tasks across shared projects. Assign tasks to others
                and release your mental energy.
              </SectionCard>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ParallaxSection />
      </motion.div>
    </>
  );
};
