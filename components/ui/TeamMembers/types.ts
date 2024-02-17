export interface TeamMember {
  id: number;
  name: string;
  email: string;
  wallet: string;
  available: {
    tz: string;
    endTime: number;
    startTime: number;
  };
}
