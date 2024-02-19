import { TeamMember } from "./types";

export const teamMembers: Readonly<TeamMember[]> = [
  {
    id: 1,
    name: "Pradeep Sekar",
    address: "0xCAEFe6BA5ceB891C1ba0838aA5F5cc2B70ef91D0",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "Australia/Sydney",
    },
  },
  {
    id: 2,
    name: "Ryan Turner",
    address: "0xe563E61293274d15683Ca31363f17C7A2E3B1F6e",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "America/Los_Angeles",
    },
  },
  {
    id: 3,
    name: "Tome Couceiro",
    address: "0xED3b5B9dFC5238Df12CcE090Db314fe1Ca4a189F",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "Europe/Lisbon",
    },
  },
  {
    id: 4,
    name: "Maciej Szafarczyk",
    address: "0xE0Aa29E5708ef4077bCde133b27E8046Bb99ca80",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
      tz: "Europe/Lisbon",
    },
  },
];
