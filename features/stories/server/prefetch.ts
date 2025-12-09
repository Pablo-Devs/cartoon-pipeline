import type { inferInput } from "@trpc/tanstack-react-query";
import { prefetch, trpc } from "@/trpc/server";

type Input = inferInput<typeof trpc.story.getUserStories>;

// Prefetch all user stories
export const prefetchStories = (params: Input) => {
  return prefetch(trpc.story.getUserStories.queryOptions(params));
};

// Prefetch a single user story
export const prefetchStory = (id: string) => {
  return prefetch(trpc.story.getOneUserStory.queryOptions({ id }));
};
