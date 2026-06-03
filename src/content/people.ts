export type Leader = {
  name: string;
  role: string;
  bio: string;
};

export const leaders: Leader[] = [
  {
    name: "Leadership Name",
    role: "Chief Executive Officer",
    bio: "Replace with Outpro.India leadership bios once approved for publication.",
  },
  {
    name: "Leadership Name",
    role: "Chief Operating Officer",
    bio: "Operational rigor across delivery, partnerships, and client success.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  { name: "Team Member", role: "Strategy" },
  { name: "Team Member", role: "Design" },
  { name: "Team Member", role: "Engineering" },
  { name: "Team Member", role: "Client Success" },
];
