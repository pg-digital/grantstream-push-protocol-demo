import { TeamMember } from "./types";

export const teamMembers: Readonly<TeamMember[]> = [
  {
    id: 1,
    name: "Pradeep Sekar",
    wallet: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
    available: {
      startTime: { hours: 10, minutes: 30 },
      endTime: { hours: 16, minutes: 30 },
      tz: "Australia/Sydney",
    },
  },
  {
    id: 2,
    name: "Ryan Turner",
    wallet: "0x44940C3C183145195Fb99Ed2300a33Ea4ae0a538",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "America/Los_Angeles",
    },
  },
];
