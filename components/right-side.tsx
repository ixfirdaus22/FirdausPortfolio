"use client";
import { useEffect } from "react";
import { siteConfig } from "@/config/site-config";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import Mentor from "./grid-items/mentorship-box.";
import Project from "./grid-items/project-box";
import Equipments from "./grid-items/equipments-box";
import { stagger, useAnimate } from "framer-motion";

const staggerDelay = stagger(0.02);

const RightSide = () => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) {
            animate("div", {
                opacity: 1,
                y: 0,
                scale: 1,
            }, {
                duration: 0.15,
                type: "spring",
                stiffness: 330,
                damping: 35,
                delay: staggerDelay,                
            });
        }
    },[scope])
    return (
        <div className="flex-1 md:h-full">
      {/*Grid Container*/}
      <div ref={scope}
      className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
        {/*Grid items*/}
        {siteConfig.items.map((item, index) => {
          return (
          <GridItem key={ item.title + index} size={item.layout} >
            {item.type === 'social' ? (
              <SocialBox item={item} /> 
              )  : item.type === 'mentor' ? (
              <Mentor item={item} />
              ) : item.type === "project" ? (
                <Project item={item} />
              ) : item.type === "equipment" ? (
                <Equipments item={item} />
              ) : (
                <div>Not Implemented Yet</div>
              )}
          </GridItem>
          );
        })}
      </div>
      </div>
    );
}

export default RightSide;