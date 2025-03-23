"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useTransition, animated } from "@react-spring/web";
import { useTheme } from "next-themes";
import useMeasure from "react-use-measure";
import shuffle from "lodash.shuffle";

// ✅ Tech items for animated list
const techItems = [
  "Web Development",
  "Cloud Computing",
  "UI/UX Design",
  "DevOps & Automation",
  "Mobile Apps",
  "Software Engineering",
  "IoT",
  "Tech Consulting",
  "AR/VR Development",
  "Full Stack Development",
  "Database Management",
];
https://github.com/Adarsh-sharma06/techtrio-website.git
const getRandomSubset = () => {
  const shuffled = [...techItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.floor(Math.random() * 5) + 2);
};

const getRandomColor = () => {
  const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#5f27cd", "#54a0ff", "#ff9ff3"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomTransform = () => {
  const animations = [
    "perspective(600px) rotateX(180deg)",
    "perspective(600px) rotateY(180deg)",
    "scale(1.1)",
    "translateY(-10px)",
    "rotate(-5deg)",
  ];
  return animations[Math.floor(Math.random() * animations.length)];
};

// ✅ Data for Masonry Grid
const data = [
  { css: "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg", height: 150 },
  { css: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg", height: 200 },
  { css: "https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg", height: 300 },
  { css: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", height: 200 },
  { css: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg", height: 400 },
  { css: "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg", height: 400 },
  { css: "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg", height: 200 },
];

// ✅ Masonry Grid Component
function Masonry() {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width, height }] = useMeasure();
  const [items, setItems] = useState(generateRandomizedData());

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(generateRandomizedData());
    }, 3500); // ✅ Faster updates every 3.5s (was 4s)
    return () => clearInterval(interval);
  }, []);

  function generateRandomizedData() {
    return data.map((item) => ({
      ...item,
      height: Math.floor(Math.random() * 250) + 100, // ✅ More varied height (100px - 450px)
      widthFactor: Math.random() * 0.6 + 0.7, // ✅ More random width (70% - 130%)
      gap: Math.floor(Math.random() * 20) + 5, // ✅ More random gap (5px - 25px)
    }));
  }

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let arrangedItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = heights[column];
      const gap = child.gap;
      const itemWidth = (width / columns) * child.widthFactor;
      heights[column] += child.height + gap;
      return { ...child, x, y, width: itemWidth - gap, height: child.height };
    });

    // ✅ Adjust heights to make sure it fills the **bottom area**
    const maxHeight = Math.max(...heights);
    if (maxHeight < height) {
      const extraHeightNeeded = height - maxHeight;
      arrangedItems[arrangedItems.length - 1].height += extraHeightNeeded;
    }

    return [heights, arrangedItems];
  }, [columns, items, width, height]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
      scale: 0.85, // ✅ More dynamic scale-in effect
    }),
    enter: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
      scale: 1,
    }),
    update: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
      scale: 1,
    }),
    leave: { opacity: 0, height: 0, scale: 0.6 },
    config: { mass: 5, tension: 450, friction: 45 }, // ✅ Faster animation (higher tension, lower friction)
    trail: 80, // ✅ Faster staggered effect
  });

  // ✅ Utility Hook for Responsive Media Queries
  function useMedia(queries: string[], values: number[], defaultValue: number) {
    const match = () => {
      if (typeof window === "undefined") return defaultValue;
      return values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
    };
    const [value, set] = useState(match);

    useEffect(() => {
      const handler = () => set(match);
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }, []);

    return value;
  }

  return (
    <div ref={ref} className="relative w-full h-full flex flex-wrap items-start justify-start overflow-hidden">
      {transitions((style, item) => (
        <animated.div
          style={{
            ...style,
            position: "absolute",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 6px 14px rgba(0,0,0,0.25)",
            transformOrigin: "center center",
          }}
          className="bg-cover bg-center"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
            }}
          />
        </animated.div>
      ))}
    </div>
  );
}

// Animated List Component
const AnimatedList: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, setItems] = useState<{ text: string; color: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme || theme;

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, transform: "perspective(600px) rotateX(0deg)" },
    enter: (item) => [
      { opacity: 1, height: 40 },
      { transform: getRandomTransform(), color: item.color },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [{ opacity: 0, height: 0 }],
    update: { color: getRandomColor() },
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const cycleItems = () => {
      ref.current.forEach(clearTimeout);
      ref.current = [];

      const updateList = () => {
        setItems(getRandomSubset().map((text) => ({ text, color: getRandomColor() })));
        ref.current.push(setTimeout(updateList, 4000)); // Updates every 4 seconds
      };

      updateList();
    };

    cycleItems();
    return () => ref.current.forEach(clearTimeout);
  }, [currentTheme]);

  if (!mounted) return null;

  return (
    <div className={`flex h-screen transition-all duration-500 gap-8 ${currentTheme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      {/* Left Side - Animated List */}
      <div className="w-1/2 flex mt-40 justify-center p-8">
        <div className="w-full max-w-md">
          {transitions((style, item) => (
            <animated.div
              className="text-white text-2xl md:text-4xl font-bold uppercase"
              style={{
                ...style,
                color: item.color,
                marginBottom: "10px",
                whiteSpace: "nowrap",
                width: "100%",
                textAlign: "left",
              }}
            >
              {item.text}
            </animated.div>
          ))}
        </div>
      </div>

      {/* Right Side - React Spring Masonry Grid */}
      <div className="w-1/2 flex items-center justify-center p-6">
        <Masonry />
      </div>
    </div>
  );
};

export default AnimatedList;
