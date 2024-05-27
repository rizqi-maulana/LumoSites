"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  image,
  href
}: {
  setActive: (item: string) => void;
  active: string | null;
  item?: string;
  children?: React.ReactNode;
  image?: any,
  href: any
}) => {
  const pathname = usePathname()

  return (
    <Link href={href} onMouseEnter={() => setActive(item!)} className="relative z-[1000]">
      <motion.p
        transition={{ duration: 0.3 }}
        className={clsx('cursor-pointer text-black hover:opacity-[0.9] text-lg md:text-base dark:text-white', { '!text-[#6C9BFF]': pathname === href })}
      >
        {item}
        {image &&
          <Image src={image} width={25} height={25} alt="en" />
        }
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-slate-950 backdrop-blur-sm rounded-lg absolute lg:relative overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative boder border-transparent shadow-input flex space-x-4 py-0 lg:py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, setMenu, setActive, ...rest }: any) => {
  return (
    <Link
      key={children}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-[#6C9BFF] "
      onClick={() => {
        if (setMenu !== undefined) {
          setMenu(false)
          setActive(null)
        }
      }}
    >
      {children}
    </Link >
  );
};
