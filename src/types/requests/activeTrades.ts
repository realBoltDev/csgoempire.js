import type { Nullable } from "../shared.js";
import type { TRADE_STATUS } from "../enums.js";

interface Item {
  asset_id: number;
  blue_percentage: Nullable<any>;
  fade_percentage:  Nullable<any>;
  icon_url: string;
  id: number;
  is_commodity: boolean;
  market_name: string;
  market_value: number;
  name_color: string;
  preview_id: Nullable<any>;
  price_is_unreliable: boolean;
  stickers: any[];
  suggested_price: number;
  type: string;
  wear: Nullable<any>;
  marketplace_privacy_protection_level: string;
}

interface ItemValidation {
  numWrongItemDetections: number;
  validItemDetected: boolean;
  validatedAt: number;
}

interface Partner {
  steam_id: string;
  steam_name: string;
  avatar: string;
  avatar_full: string;
  profile_url: string;
  timecreated: number;
  steam_level: number;
}

interface Metadata {
  item_validation: ItemValidation;
  expires_at: number;
  partner: Partner;
  auction_highest_bid: number;
  auction_ends_at: number;
  auction_highest_bidder: number;
  auction_number_of_bids: number;
}

interface Trade {
  id: number;
  total_value: number;
  item_id: number;
  item: Item;
  status: TRADE_STATUS;
  status_message: keyof typeof TRADE_STATUS;
  tradeoffer_id: number;
  metadata: Metadata;
  created_at: string;
  updated_at: string;
}

export interface ActiveTradesResponse {
  success: boolean;
  data: {
    deposits: Trade[],
    withdrawals: Trade[]
  };
}