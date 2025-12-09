"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export function RegisterForm() {
  const router = useRouter();

  const signUpGithub = async () => {
    await authClient.signIn.social(
      {
        provider: "github",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      }
    );
  };

  const signUpGoogle = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create account</CardTitle>
          <CardDescription>Join Toon Stories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <Button onClick={signUpGithub} variant="outline" className="w-full">
              <Image
                src="/logos/github.svg"
                alt="Github"
                width={20}
                height={20}
              />
              Continue with GitHub
            </Button>

            <Button onClick={signUpGoogle} variant="outline" className="w-full">
              <Image
                src="/logos/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Continue with Google
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
