"use client"
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function AutoScrollingTestimonials() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div className="flex justify-center">
      <div className="relative top-0 bottom-0 mt-20">
        <div className="bg-gradient-to-b from-[#eff9fb] dark:from-slate-900 absolute to-transparent top-0 w-full h-[200px] z-[100]" />
        <div className="bg-gradient-to-t from-[#eff9fb] dark:from-slate-900 absolute to-transparent bottom-0 w-full h-[200px] z-[100]" />

        <div className="grid grid-cols-3 h-full gap-10 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className={cn(
                "marquee-content animate-animatemarquee space-y-8 hidden lg:block",
                i % 2 && "mt-10"
              )}
              key={i}
            >
              {testimonials.map((v, idx) => (
                <Card className="max-w-[340px]" key={idx}>
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                      </div>
                    </div>
                    <Button
                      className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                      color="primary"
                      radius="full"
                      size="sm"
                      variant={isFollowed ? "bordered" : "solid"}
                      onPress={() => setIsFollowed(!isFollowed)}
                    >
                      {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                  </CardHeader>
                  <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
                    <p>
                      Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                    </p>
                    <span className="pt-2">
                      #FrontendWithZoey
                      <span className="py-2" aria-label="computer" role="img">
                        💻
                      </span>
                    </span>
                  </CardBody>
                  <CardFooter className="gap-3">
                    <div className="flex gap-1">
                      <p className="font-semibold text-default-400 text-small">4</p>
                      <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                      <p className="font-semibold text-default-400 text-small">97.1K</p>
                      <p className="text-default-400 text-small">Followers</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}