"use client"
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

let photonumber: number = 0;
const testimonials = [
  {
    name: "Djohan",
    username: "@djohan",
    avatarUrl: "https://i.pravatar.cc/150",
    text: "Amazing",
  },
  {
    name: "Aisha",
    username: "@aisha123",
    avatarUrl: "https://i.pravatar.cc/151",
    text: "Loved the experience! #awesome",
  },
  {
    name: "Budi",
    username: "@budi_b",
    avatarUrl: "https://i.pravatar.cc/152",
    text: "Totally worth it.",
  },
  {
    name: "Clara",
    username: "@clara_belle",
    avatarUrl: "https://i.pravatar.cc/153",
    text: "Unbelievable service!",
  },
  {
    name: "Dimas",
    username: "@dimas789",
    avatarUrl: "https://i.pravatar.cc/154",
    text: "Highly recommend to everyone.",
  },
  {
    name: "Eka",
    username: "@eka_the_one",
    avatarUrl: "https://i.pravatar.cc/155",
    text: "Fantastic experience.",
  },
  {
    name: "Farah",
    username: "@farah_f",
    avatarUrl: "https://i.pravatar.cc/156",
    text: "Will definitely come back. #happy",
  },
  {
    name: "Gilang",
    username: "@gilang07",
    avatarUrl: "https://i.pravatar.cc/157",
    text: "Simply the best!",
  },
  {
    name: "Hana",
    username: "@hana_h",
    avatarUrl: "https://i.pravatar.cc/158",
    text: "Can't believe how great it was. #amazing",
  },
  {
    name: "Irfan",
    username: "@irfan_ir",
    avatarUrl: "https://i.pravatar.cc/159",
    text: "Superb service.",
  },
  {
    name: "Joko",
    username: "@joko_j",
    avatarUrl: "https://i.pravatar.cc/160",
    text: "Exceeded my expectations.",
  },
  {
    name: "Kiki",
    username: "@kiki_ki",
    avatarUrl: "https://i.pravatar.cc/161",
    text: "Just wow!",
  },
  {
    name: "Lina",
    username: "@lina_l",
    avatarUrl: "https://i.pravatar.cc/162",
    text: "I'm in love with this. #great",
  },
  {
    name: "Mahmud",
    username: "@mahmud_m",
    avatarUrl: "https://i.pravatar.cc/163",
    text: "The best decision I've made.",
  },
  {
    name: "Nina",
    username: "@nina_n",
    avatarUrl: "https://i.pravatar.cc/164",
    text: "Couldn't be happier. #satisfied",
  },
  {
    name: "Omar",
    username: "@omar_o",
    avatarUrl: "https://i.pravatar.cc/165",
    text: "Absolutely incredible!",
  },
];



export default function AutoScrollingTestimonials() {
  const [length, setLength] = useState(3);
  const [isFollowed, setIsFollowed] = React.useState(false);

  const updateLength = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setLength(3);
    } else if (width >= 768) {
      setLength(2);
    } else {
      setLength(1);
    }
  };

  useEffect(() => {
    updateLength();
    window.addEventListener('resize', updateLength);
    return () => window.removeEventListener('resize', updateLength);
  }, []);
  return (
    <div className="flex justify-center h-screen">
      <div className="relative top-0 bottom-0 mt-20">
        <div className="bg-gradient-to-b from-[#eff9fb] dark:from-slate-900 absolute to-transparent top-0 w-full h-[200px] z-[100]" />
        <div className="bg-gradient-to-t from-[#eff9fb] dark:from-slate-900 absolute to-transparent bottom-0 w-full h-[200px] z-[100]" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 h-full gap-10 overflow-hidden">
          {Array.from({ length }).map((_, i) => (
            <div
              className={cn(
                "marquee-content animate-animatemarquee space-y-8 hidden lg:block",
                i % 2 && "mt-10"
              )}
              key={i}
            >
              {testimonials.map((data, idx) => (
                <Card className="md:w-[340px] w-[350px]" key={idx}>
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar isBordered radius="full" size="md" src={`${data.avatarUrl}?img={${photonumber++}}`} />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{data.name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{data.username}</h5>
                      </div>
                    </div>
                    {/* <Button
                      className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                      color="primary"
                      radius="full"
                      size="sm"
                      variant={isFollowed ? "bordered" : "solid"}
                      onPress={() => setIsFollowed(!isFollowed)}
                    >
                      {isFollowed ? "Unfollow" : "Follow"}
                    </Button> */}
                  </CardHeader>
                  <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden dark:text-white">
                    <p>
                      {data.text}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}