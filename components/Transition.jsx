
import {motion as anim, AnimatePresence} from "framer-motion"
const Transition = ({ children }) => {
  return (
    <AnimatePresence>
      <anim.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1]}}
        exit={{ opacity: 0}}
        transition={{
          duration: 1,
          times: [0, 0.5, 1],
          // delay: 0.001,
          ease: "easeInOut"
          // type: "spring", 
          // stiffness: 200
        }}
        className="overflow-hidden ml-auto mr-auto app__width"
      >
        {children}
      </anim.div>
    </AnimatePresence>
  )
}

export default Transition;
