import type { User } from "../models/user.js";

interface TipBaseResponse {
  success: boolean;
  data: {
    amount: number;
    balance: number;
  };
}

interface TipSteamIdResponse extends TipBaseResponse {
  data: TipBaseResponse['data'] & {
    user: User;
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