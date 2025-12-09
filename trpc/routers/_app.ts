import { storyRouter } from "@/features/stories/server/routers";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
    story: storyRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
