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
    address: "0x44940C3C183145195Fb99Ed2300a33Ea4ae0a538",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 14, minutes: 0 },
      tz: "America/Los_Angeles",
    },
  },
  {
    id: 3,
    name: "James Boyle",
    address: "0x4db4Ab89a29c31a9081E0ecA72f3f89a8E44F8d5",
    available: {
      startTime: { hours: 14, minutes: 0 },
      endTime: { hours: 19, minutes: 0 },
      tz: "America/Los_Angeles",
    },
  },
  {
    id: 4,
    name: "Maciej Szafarczyk",
    address: "0xE0Aa29E5708ef4077bCde133b27E8046Bb99ca80",
    available: {
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 14, minutes: 0 },
      tz: "Europe/Lisbon",
    },
  },
  {
    id: 5,
    name: "Tomé Couceiro",
    address: "0x86EcD9AA8643f29e98b267f8E0aC2B1a2d839CB7",
    available: {
      startTime: { hours: 14, minutes: 0 },
      endTime: { hours: 19, minutes: 0 },
      tz: "Europe/Lisbon",
    },
  },
];
