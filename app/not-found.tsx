import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Book } from "reicon-react";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col gap-lg items-center justify-center">
      <h1 className="text-9xl font-bold shiny-text">404</h1>
      <div className="flex flex-col gap-xxs items-center text-text-secondary">
        <span>
          {
            "This page doesn't exist, or it wandered off somewhere into the void."
          }
        </span>
        <span>{"Let's get you back on track."}</span>
      </div>
      <div className="flex items-center gap-md">
        <Link href="/">
          <Button variant="primary" icon={ArrowLeft}>
            Back to home
          </Button>
        </Link>
        <Link href="/pages">
          <Button icon={Book}>Browse pages</Button>
        </Link>
      </div>
    </div>
  );
}
