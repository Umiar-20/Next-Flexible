import { graph, auth, config } from "@grafbase/sdk";

const g = graph.Standalone();

const user = g.type("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  gitHubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.type("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  gitHubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => user),
});

export default config({
  graph: g,
});
