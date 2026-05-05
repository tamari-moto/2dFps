export type TeamId = 0 | 1 | 2;

export const TeamConfig = {
  Team0Color: 0xff3333,
  Team1Color: 0x3399ff,
  Team2Color: 0x33ff66,
} as const;

export const TEAM_COLORS: Record<TeamId, number> = {
  0: TeamConfig.Team0Color,
  1: TeamConfig.Team1Color,
  2: TeamConfig.Team2Color,
};
