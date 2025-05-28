import { useEffect, useRef, useState } from "react";
import html from "../assets/images/icons/Html.png";
import react from "../assets/images/icons/react.png";
import css from "../assets/images/icons/Css.png";
import js from "../assets/images/icons/Javascript.png";
import node from "../assets/images/icons/NodeJS.png";
import firebase from "../assets/images/icons/Firebase.png";
import tailwind from "../assets/images/icons/TailwindCSS.png";
import mongo from "../assets/images/icons/MongoDB.png";
import sql from "../assets/images/icons/SQL.png";
import illustrator from "../assets/images/icons/Illustrator.png";
import xd from "../assets/images/icons/AdobeXD.png";

const items = [
  html,
  css,
  js,
  react,
  tailwind,
  node,
  firebase,
  mongo,
  sql,
  illustrator,
  xd,
];

export default function InfiniteSlider() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    let animationFrame;
    const speed = .5;

    const animate = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.offsetWidth / 2;
        setX((prevX) => {
          const nextX = prevX - speed;
          return Math.abs(nextX) >= contentWidth ? 0 : nextX;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[50rem] overflow-hidden py-6 bg-white"
    >
      <div
        ref={contentRef}
        className="flex gap-4 w-max"
        style={{
          transform: `translateX(${x}px)`,
          transition: "transform 0.01s linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="min-w-max flex items-center justify-center"
          >
            <img
              src={item}
              alt=""
              className="h-16 w-auto object-contain"
              draggable={false}
              style={{ pointerEvents: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
