export type TeamId = 0 | 1 | 2 | 3 | 4 | 5;

export const TeamConfig = {
  Team0Color: 0xff3333,
  Team1Color: 0x3399ff,
  Team2Color: 0x33ff66,
  Team3Color: 0xff9900,
  Team4Color: 0xcc33ff,
  Team5Color: 0xffff00,
} as const;

export const TEAM_COLORS: Record<TeamId, number> = {
  0: TeamConfig.Team0Color,
  1: TeamConfig.Team1Color,
  2: TeamConfig.Team2Color,
  3: TeamConfig.Team3Color,
  4: TeamConfig.Team4Color,
  5: TeamConfig.Team5Color,
};
