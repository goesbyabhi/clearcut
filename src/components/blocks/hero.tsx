"use client";
import { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { ImageCompare } from "@/components/ui/image-compare";
import { ChevronRightIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Star = () => (
  <svg viewBox="0 0 512 512">
    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
  </svg>
);

export function Hero() {
  useEffect(() => {
    // Thank you Hyperplexed
    let index = 0;
    const interval = 1000;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      star.offsetHeight;
      star.style.animation = "";
    };

    const stars = document.getElementsByClassName(
      "sparkly-stars",
    ) as HTMLCollectionOf<HTMLElement>;
    for (const star of Array.from(stars)) {
      setTimeout(
        () => {
          animate(star);
          setInterval(() => animate(star), 1000);
        },
        index++ * (interval / 3),
      );
    }
  }, []);

  return (
    <div className="h-[50rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-violet-400/[0.4] relative overflow-hidden animate-gridbg">
      <Spotlight
        className="-top-40 md:right-10 md:-top-20 z-10"
        fill="rgb(180, 180, 180)"
      />
      <div className="absolute pointer-events-none inset-0 flex items-end justify-center  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_70%_100%_at_72%_49%,transparent_10%,black_35%)]"></div>
      <div className="p-4 md:max-w-[69%] mx-5 relative flex items-center justify-between w-full pt-40 md:pt-0">
        <div className="flex flex-col gap-y-2">
          <Link target="_blank" href="https://x.com/x4bhi">
            <button className="relative bg-transparent inline-flex mb-3 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <TwitterLogoIcon className="mr-2" />
                Reach me on Twitter
              </span>
            </button>
          </Link>
          <h1 className="text-3xl pb-1 md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 whitespace-nowrap z-10">
            Remove Background
            <br />
            <span>Using Power of AI</span>
          </h1>
          <div className="absolute left-64 mt-20 w-48 h-16 bg-violet-500 filter blur-3xl"></div>
          <div className="absolute right-72 mt-20 w-48 h-60 bg-violet-600/30 filter blur-3xl"></div>
          <p className="mt-4 font-bold text-neutral-300 max-w-lg text-left ">
            Transform your photos with just one click. Remove the background
            from any image with our AI-powered tool. Say goodbye to complex
            editing and hello to{" "}
            <span className="inline-block relative">
              <span className="sparkly-stars star-purple">
                <Star />
              </span>
              <span className="sparkly-stars star-pink">
                <Star />
              </span>
              <span className="sparkly-stars star-violet">
                <Star />
              </span>
              <span className="sparkly-text">seamless experience</span>
            </span>
          </p>
          <div className="mt-6 inline-flex items-center gap-x-4">
            <div className="relative group">
              <div className="transition-shadow duration-500 ease-in-out group-hover:shadow-[0_0px_30px_0px_rgba(103,58,183,0.6)]">
                <Link href="/Upload">
                  <button className="inline-flex animate-shimmer h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#393BB2,45%,#E2CBFF,55%,#393BB2)] bg-[length:200%_100%] px-6 font-bold text-white focus:outline-none">
                    {/*<Image src="/Logo.png" alt="Icon" width={25} height={25} /> */}
                    Try ClearCut Now
                  </button>
                </Link>
              </div>
            </div>
            <Button
              asChild
              size={"lg"}
              variant={"invisible"}
              className=" transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Link
                href="https://github.com/goesbyabhi/clearcut"
                className="inline-flex h-12 items-center gap-x-2 "
                target="_blank"
              >
                <p className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-200%">
                  GitHub
                </p>
                <ChevronRightIcon color="#ebd9fe" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden xl:block">
          <ImageCompare />
        </div>
      </div>
    </div>
  );
}
