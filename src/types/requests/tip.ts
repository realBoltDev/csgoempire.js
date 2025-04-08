interface SteamUser {
  steam_id: string;
  steam_name: string;
  avatar: string;
  avatar_full: string;
  profile_url: string;
  timecreated: number;
  steam_level: number;
}

interface TipBaseResponse {
  success: boolean;
  data: {
    amount: number;
    balance: number;
  };
}

interface TipSteamIdResponse extends TipBaseResponse {
  data: TipBaseResponse['data'] & {
    user: SteamUser;
  }
}

interface TipUserIdResponse extends TipBaseResponse {
  data: TipBaseResponse['data'] & {
    user: {
      id: number;
    }
  }
}

export type TipResponse = TipSteamIdResponse | TipUserIdResponse;