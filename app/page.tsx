import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  await requireAuth();
  return <h1 className="text-lg text-primary text-center font-semibold">Cartoon Pipeline</h1>;
}
