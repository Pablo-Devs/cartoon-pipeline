import { useTRPC } from "@/trpc/client";
import { useStoriesParams } from "./use-stories-params";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";

// Hook to fetch stories with suspense
export const useSuspenseStories = () => {
  const trpc = useTRPC();
  const [params] = useStoriesParams();

  return useSuspenseQuery(trpc.story.getUserStories.queryOptions(params));
};

// Hook to create a new story
export const useCreateStory = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.story.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Story "${data.title}" created`);
        queryClient.invalidateQueries(trpc.story.getUserStories.queryOptions({}));
      },
      onError: (error) => {
        toast.error(`Failed to create story: ${error.message}`);
      },
    })
  );
};

// Hook to remove a story
export const useRemoveStory = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.story.remove.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Story "${data.title}" removed`);
        queryClient.invalidateQueries(trpc.story.getUserStories.queryOptions({}));
        queryClient.invalidateQueries(
          trpc.story.getOneUserStory.queryFilter({ id: data.id })
        );
      },
    })
  );
};

// Hook to fetch a single story using suspense
export const useSuspenseStory = (id: string) => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.story.getOneUserStory.queryOptions({ id }));
};

// Hook to update a story's title
export const useUpdateStoryName = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.story.updateTitle.mutationOptions({
      onSuccess: (data) => {
        toast.success(`Story "${data.title}" updated`);
        queryClient.invalidateQueries(trpc.story.getUserStories.queryOptions({}));
        queryClient.invalidateQueries(trpc.story.getOneUserStory.queryOptions({ id: data.id }));
      },
      onError: (error) => {
        toast.error(`Failed to update story: ${error.message}`);
      },
    })
  );
};