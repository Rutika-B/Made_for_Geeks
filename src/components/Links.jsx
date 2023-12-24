import React from "react";
import { Icon } from "@iconify/react";

const SocialLinks = ({...props}) => {
  console.log(props)
  const links = [
    {
      id: 1,
      child: (
        <>
          <Icon icon="simple-icons:leetcode" width={30} height={30} />
          practice

        </>
      ),
      href: props.data.leetcode,
    },
    {
      id: 2,
      child: (
        <>
          <Icon icon="simple-icons:youtube" width={30} height={30} color={"red"}/>
          video
        </>
      ),
      href: props.data.ytLink,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[40%] right-0 fixed z-10">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 px-1 h-14 mr-[-90px]  bg-black duration-300 hover:ml-[-90px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-around items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
