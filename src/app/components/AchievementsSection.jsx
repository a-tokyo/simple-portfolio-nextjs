"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedNumbers with SSR disabled
const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1000",
  },
  {
    metric: "Awards",
    value: "3",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  // Add state to handle client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {isMounted ? (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tension: 140 * (index + 1),
                      };
                    }}
                  />
                ) : (
                  achievement.value
                )}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
