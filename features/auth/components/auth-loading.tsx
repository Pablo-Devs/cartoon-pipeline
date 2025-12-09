"use client";

import { motion } from "framer-motion";

const AuthLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Lock/Key Icon */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Lock Body */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lock shackle */}
            <motion.path
              d="M 25 35 L 25 25 Q 25 15 40 15 Q 55 15 55 25 L 55 35"
              className="stroke-primary"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              animate={{
                strokeDasharray: ["0, 100", "100, 100"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Lock body */}
            <motion.rect
              x="20"
              y="35"
              width="40"
              height="30"
              rx="6"
              className="fill-primary"
              animate={{
                y: [35, 33, 35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Keyhole */}
            <motion.g
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{ originX: "40px", originY: "50px" }}
            >
              <circle cx="40" cy="48" r="4" className="fill-background" />
              <rect x="38" y="48" width="4" height="8" rx="1" className="fill-background" />
            </motion.g>

            {/* Sparkle effects around lock */}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                cx={30 + i * 10}
                cy={25 - i * 3}
                r="2"
                className="fill-chart-2"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>

          {/* Rotating circles around the lock */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/40"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 60}deg) translateY(-45px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Loading text with dots */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground">
            Please wait
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </h3>
          <p className="text-sm text-muted-foreground">Preparing your experience</p>
        </motion.div>

        {/* Minimal progress indicator */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLoading;