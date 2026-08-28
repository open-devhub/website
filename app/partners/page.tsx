import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import { partners } from "@/content/site/partners";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart2 } from "reicon-react";

export default function Partners() {
  return (
    <div className="flex flex-col gap-md items-center py-lg">
      <h1 className="text-gradient font-bold text-4xl lg:text-5xl">
        DevHub <ShinyText>Partners</ShinyText>
      </h1>
      <div className="text-text-secondary text-sm md:text-md lg:text-lg flex flex-col gap-xxs items-center">
        <span>Discover the servers, communities, and tech platforms</span>
        <span>officially partnered with DevHub</span>
      </div>

      <Link href={`mailto:${staticData.email}`}>
        <Button icon={Heart2}>Be a partner</Button>
      </Link>

      <div className="flex flex-col gap-sm max-w-240 p-md">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className={`flex gap-md bg-bg-secondary p-md rounded-md border-2 border-transparent ${partner.featured && "spin-border"}`}
          >
            {partner.banner && (
              <div className="flex">
                <Image
                  src={partner.banner}
                  alt={partner.name}
                  height={24}
                  width={400}
                  className="max-w-240 max-h-67 object-cover rounded-md"
                />
              </div>
            )}

            <div className="flex flex-col gap-md">
              <h1 className="text-2xl">{partner.name}</h1>
              <span className="text-text-secondary">{partner.description}</span>
              <Link
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button icon={ArrowRight} className="text-sm px-sm py-xs">
                  See more
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
