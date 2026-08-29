"use client";

import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import Skeleton from "@/components/ui/Skeleton";
import { getRepos, RepoType } from "@/lib/github";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRightCircle,
  BookOpen,
  ChatDots,
  CircleHalfDottedCheck,
  Code2,
  ForkKnife,
  MaskHappy,
  Palette,
  People,
  PlusCircle2,
  QuoteUp,
  Rocket,
  Star,
  Tag3,
} from "reicon-react";

export default function Home() {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getRepos();
      setRepos(data);
      setTimeout(() => setLoading(false), 1375);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center gap-40">
      {/* hero section */}
      <div className="h-[70vh] flex flex-col items-center gap-lg lg:gap-lg mt-[10vh] relative">
        {/* lil badge */}
        <div className="border border-accent-muted p-xs rounded-md flex gap-sm">
          <Code2 />
          <span className="text-sm flex items-center">
            Join {staticData.memberCount}+ Developers
          </span>
        </div>

        {/* hero Heading */}
        <h1 className="text-gradient whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold flex flex-col items-center gap-xs">
          <span>
            Where <ShinyText>Developers</ShinyText>
          </span>
          <span>Build, Experiment,</span>
          <span>and Connect</span>
        </h1>

        {/* description */}
        <div className="flex flex-col items-center gap-xss whitespace-nowrap text-text-secondary text-sm md:text-md lg:text-lg">
          <span>
            DevHub is a Discord community for developers and creators, a
          </span>
          <span>
            place to share projects, get help, exchange feedback, and meet
          </span>
          <span>people who enjoy building things</span>
        </div>

        {/* action row */}
        <div className="flex flex-col sm:flex-row gap-md">
          <Link
            href={staticData.invite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button icon={PlusCircle2} variant="primary">
              Join DevHub
            </Button>
          </Link>
          <Link href="/pages">
            <Button icon={BookOpen}>Learn more</Button>
          </Link>
        </div>
      </div>

      {/* community pillars section */}
      <div className="flex flex-col gap-md items-center justify-center min-h-screen">
        <h1 className="text-gradient flex items-center flex-col font-bold text-4xl lg:text-5xl">
          <span>
            Everything <ShinyText>you</ShinyText>
          </span>
          <span>need to level up</span>
        </h1>
        <span className="text-text-secondary text-sm md:text-md lg:text-lg">
          Six pillars that make DevHub the best community for builders
        </span>
        {/* cards (bento grid) */}
        <div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-md max-w-280">
          {[
            {
              icon: Rocket,
              label: "Build Projects",
              description:
                "Launch your side projects with a supportive group of builders behind you. Get real feedback, find teammates, and ship your ideas way faster.",
              span: "md:col-span-2",
            },
            {
              icon: MaskHappy,
              label: "Get Help",
              description:
                "Stuck on a tricky bug? Ask around and get quick answers from devs who have been there.",
              span: "md:col-span-1",
            },
            {
              icon: ChatDots,
              label: "Share Feedback",
              description:
                "Trade honest, helpful advice on designs, code, and project ideas to make your work better.",
              span: "md:col-span-1",
            },
            {
              icon: Palette,
              label: "Creative Space",
              description:
                "A chill spot made just for designers, engineers, and digital artists. Show off your work, get inspired, and see what others are making.",
              span: "md:col-span-2",
            },
            {
              icon: BookOpen,
              label: "Learn & Teach",
              description:
                "Swap your favorite tutorials, helpful tools, and quick tips with everyone. Learn new skills together and help others level up along the way.",
              span: "md:col-span-2",
            },
            {
              icon: People,
              label: "Find Collaborators",
              description:
                "Team up with talented creators who share your passion and want to build cool things.",
              span: "md:col-span-1",
            },
          ].map(({ label, description, span, icon: Icon }) => (
            <div
              key={label}
              className={`${span} flex flex-col bg-bg-secondary gap-sm p-md rounded-md`}
            >
              <div className="p-xs">
                <Icon size={42} />
              </div>
              <h2 className="text-2xl">{label}</h2>
              <span className="text-text-secondary text-md">{description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* projects section */}
      <div className="min-h-screen flex flex-col gap-md items-center justify-center">
        <h1 className="text-gradient items-center flex flex-col font-bold text-4xl lg:text-5xl">
          <span>Built by the</span>
          <ShinyText>community</ShinyText>
        </h1>
        <span className="text-text-secondary text-sm md:text-md lg:text-lg">
          Open source tools built by builders, for builders
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md p-lg max-w-7xl mx-auto">
          {/* repo cards */}
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between h-64 w-86 bg-bg-secondary"
                >
                  <Skeleton />
                </div>
              ))
            : repos.map((repo) => (
                <div
                  key={repo.repo}
                  className="group relative flex flex-col justify-between h-68 p-md rounded-xl bg-bg-secondary"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-sm">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/r/${repo.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3 className="text-lg">{repo.repo}</h3>
                        </Link>
                        <div className="flex items-center gap-md text-text-secondary">
                          <div className="flex items-center gap-xxs">
                            <Star size={15} />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-xxs">
                            <ForkKnife size={15} />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {repo.description || "No description available."}
                      </p>
                    </div>
                    <div className="flex items-center gap-xs">
                      {repo.tags?.slice(0, 3).map((tag) => (
                        <div
                          key={tag}
                          className="text-xs p-xxs rounded-md flex items-center gap-xxs"
                        >
                          <Tag3 size={14} />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm font-medium text-text-secondary mt-xs">
                    <div className="flex items-center gap-xs">
                      <Code2 size={16} className="text-accent" />
                      {repo.language ? (
                        <>
                          <span>{repo.language}</span>
                        </>
                      ) : (
                        <span>Plain Text</span>
                      )}
                    </div>

                    {/* contributors list (avatars, github.com/{username} on click */}
                    <div className="flex w-fit items-center gap-xxs bg-bg-tertiary py-xxs px-xs rounded-md">
                      {repo.contributors?.map((contributor) => (
                        <Link
                          key={contributor.login}
                          href={`https://github.com/${contributor.login}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="undecorated"
                        >
                          <Image
                            src={contributor.avatar}
                            // not to destroy the ui if image is not available
                            alt=""
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <Link
          href={`${staticData.githubFull}/repositories?q=sort%3Astars`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={ArrowUpRightCircle}>View all projects</Button>
        </Link>
      </div>
      {/* testimonial section */}
      <div className="min-h-screen flex flex-col gap-md items-center justify-center">
        <h1 className="text-gradient flex flex-col items-center font-bold text-4xl lg:text-5xl">
          <span>
            What our <ShinyText>members</ShinyText>
          </span>

          <span>Say about us</span>
        </h1>
        <span className="text-text-secondary text-sm md:text-md lg:text-lg">
          Unfiltered thoughts from the devs inside
        </span>

        {/* testimonial cards (bento grid) */}
        <div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-md max-w-280">
          {[
            {
              member: "Li Productions",
              avatar:
                "https://cdn.discordapp.com/avatars/1064125371366264862/4e84e439ce0d3dfd00c61675262479fa.png",
              review:
                "i enjoy hanging out in this server its so nice and welcoming and chill here",
              stars: 5,
              span: "md:col-span-1",
            },
            {
              member: "Youngcoder45",
              avatar:
                "https://cdn.discordapp.com/avatars/955695820999639120/cf296ec1b2af5b10746bb89dbd24fc38.png",
              review:
                "NGL I just love this server its tooo cool. the owner is too cool and the server feels very welcoming",
              stars: 5,
              span: "md:col-span-2",
            },
            {
              member: "joshdegr8",
              avatar:
                "https://cdn.discordapp.com/avatars/1429159029392802067/5e81d6b698bfd90c6c01b622b4e2f2c2.webp?size=2048",
              review:
                "It’s the first server where I actually enjoyed coding and building + hanging out and chatting. it's so good it keeps pulling me back",
              stars: 5,
              span: "md:col-span-2",
            },
            {
              member: "t1_xfaker",
              avatar:
                "https://cdn.discordapp.com/emojis/1475033238748659722.webp?size=96",
              review:
                "a pretty great community for devs to hangout and share ideas , dont trust me ? join it then",
              stars: 4,
              span: "md:col-span-1",
            },
            {
              member: "bocoz",
              avatar:
                "https://cdn.discordapp.com/avatars/1436589429564244080/b7e35f0bbb081a14c649bcead9372312.png",
              review:
                "It's a pretty great community to hangout, share and talk about different things, especially to get help when you're stuck on something, It's just amazinggggg",
              stars: 5,
              span: "md:col-span-3",
            },
          ].map((tm) => (
            <div
              key={tm.member}
              className={`${tm.span} flex flex-col bg-bg-secondary gap-sm p-md rounded-md`}
            >
              <div className="p-xs flex items-center justify-between">
                <Image
                  src={tm.avatar}
                  alt={tm.member}
                  width="36"
                  height="36"
                  className="rounded-full"
                />
                <div className="flex items-center gap-xxs">
                  {Array.from({ length: tm.stars }).map((_, i) => (
                    <span key={i} className="text-accent-muted text-sm">
                      <Star size={12} weight="Filled" />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <QuoteUp size={20} weight="Filled" className="text-accent" />{" "}
                <h2 className="text-2xl">{tm.member}</h2>
              </div>
              <span className="text-text-secondary text-md">{tm.review}</span>
            </div>
          ))}
        </div>
        <Link
          href="https://top.gg/discord/servers/787361847361966080"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">View sources</Button>
        </Link>
      </div>

      {/* CTA  section */}
      <div className="min-h-[50vh] flex flex-col gap-md items-center justify-center">
        <h1 className="text-gradient flex flex-col items-center font-bold text-4xl lg:text-5xl">
          <span className="text-nowrap">Ready to ship something</span>
          <ShinyText>great?</ShinyText>
        </h1>
        <span className="text-text-secondary text-sm md:text-md lg:text-lg">
          Join {staticData.memberCount}+ developers who build together, learn
          together, and ship together
        </span>

        <Button variant="primary" icon={ArrowRight} className="m-lg">
          Join Discord
        </Button>

        <div className="flex flex-col sm:flex-row gap-md">
          {[
            "No application required",
            "All skill levels welcome",
            "Active 24/7",
          ].map((item, i) => (
            <div
              className="flex items-center gap-xxs border-b border-accent-muted border-dashed p-sm"
              key={i}
            >
              <CircleHalfDottedCheck />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
