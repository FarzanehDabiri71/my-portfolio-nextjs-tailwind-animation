import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWarpperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWarpperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image: linear-gradient(to_right,_tranparent,_black_10%,_black_90%,_transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWarpperClassName
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex  items-center gap-4 py-2 px-3  outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
