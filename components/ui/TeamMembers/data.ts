import { TeamMember } from "./types";

export const teamMembers: Readonly<TeamMember[]> = [
  {
    id: 1,
    name: "Pradeep Sekar",
    email: "pradeep.sekar@pgdigital.com.au",
    wallet: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
    available: {
      tz: "Australia/Sydney",
      startTime: 9,
      endTime: 17,
    },
  },
  {
    id: 2,
    name: "Ryan Turner",
    email: "ryan.turner@pgdigital.com.au",
    wallet: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
    available: {
      tz: "America/Los_Angeles",
      startTime: 9,
      endTime: 17,
    },
  },
];
