import { redirect } from "next/navigation";

export default function Pages() {
  // redirect to /pages/getting-started (1st page)
  redirect("/pages/getting-started");
}
