"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Cartoon Character */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Character Body */}
            <motion.ellipse
              cx="70"
              cy="85"
              rx="28"
              ry="32"
              className="fill-primary"
              animate={{
                ry: [32, 34, 32],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Character Head */}
            <motion.circle
              cx="70"
              cy="50"
              r="24"
              className="fill-accent"
              animate={{
                r: [24, 25, 24],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Hair/Top decoration */}
            <motion.path
              d="M 60 32 Q 70 25 80 32"
              className="stroke-primary"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M 60 32 Q 70 25 80 32",
                  "M 60 32 Q 70 23 80 32",
                  "M 60 32 Q 70 25 80 32",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            {/* Big round eyes - Peppa style */}
            <motion.g
              animate={{
                scaleY: [1, 0.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.05, 0.1],
              }}
            >
              <circle cx="62" cy="48" r="5" className="fill-foreground" />
              <circle cx="78" cy="48" r="5" className="fill-foreground" />
              <circle cx="63" cy="46" r="2" className="fill-background" />
              <circle cx="79" cy="46" r="2" className="fill-background" />
            </motion.g>

            {/* Rosy cheeks - cartoon style */}
            <ellipse
              cx="52"
              cy="55"
              rx="6"
              ry="4"
              className="fill-destructive opacity-30"
            />
            <ellipse
              cx="88"
              cy="55"
              rx="6"
              ry="4"
              className="fill-destructive opacity-30"
            />

            {/* Big smile */}
            <motion.path
              d="M 58 58 Q 70 68 82 58"
              className="stroke-foreground"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M 58 58 Q 70 68 82 58",
                  "M 58 58 Q 70 70 82 58",
                  "M 58 58 Q 70 68 82 58",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Arms - waving */}
            <motion.ellipse
              cx="42"
              cy="85"
              rx="8"
              ry="22"
              className="fill-primary"
              animate={{
                rotate: [-25, -35, -25],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              style={{ originX: "42px", originY: "75px" }}
            />
            <motion.ellipse
              cx="98"
              cy="85"
              rx="8"
              ry="22"
              className="fill-primary"
              animate={{
                rotate: [25, 35, 25],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              style={{ originX: "98px", originY: "75px" }}
            />

            {/* Hands - rounded */}
            <motion.circle
              cx="38"
              cy="98"
              r="6"
              className="fill-accent"
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />
            <motion.circle
              cx="102"
              cy="98"
              r="6"
              className="fill-accent"
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />

            {/* Legs - simple rounded style */}
            <ellipse cx="60" cy="115" rx="7" ry="18" className="fill-chart-2" />
            <ellipse cx="80" cy="115" rx="7" ry="18" className="fill-chart-2" />

            {/* Shoes - cute rounded */}
            <ellipse
              cx="60"
              cy="128"
              rx="9"
              ry="5"
              className="fill-foreground"
            />
            <ellipse
              cx="80"
              cy="128"
              rx="9"
              ry="5"
              className="fill-foreground"
            />
          </svg>

          {/* Floating stars/sparkles - cartoon style */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${15 + i * 25}%`,
                left: i % 2 === 0 ? "-20%" : "110%",
              }}
              animate={{
                y: [-8, 8, -8],
                rotate: [0, 180, 360],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="fill-primary"
              >
                <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <motion.h2
            className="text-3xl font-bold text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.h2>

          {/* Progress Bar - rounded cartoon style */}
          <div className="w-64 h-3 bg-muted rounded-full overflow-hidden border-2 border-border">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
