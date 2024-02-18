import { TeamMember } from "./types";

export const teamMembers: Readonly<TeamMember[]> = [
  {
    id: 1,
    name: "Pradeep Sekar",
    wallet: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "Australia/Sydney",
    },
  },
  {
    id: 2,
    name: "Ryan Turner",
    wallet: "0xe563E61293274d15683Ca31363f17C7A2E3B1F6e",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "America/Los_Angeles",
    },
  },
];
