import type { Nullable } from "../shared.js";

interface DepositorStats {
  delivery_rate_recent: number;
  delivery_rate_long: number;
  delivery_time_minutes_recent: number;
  delivery_time_minutes_long: number;
  delivery_rate_status: Nullable<any>;
  steam_level_min_range: number;
  steam_level_max_range: number;
  user_has_trade_notifications_enabled: boolean;
  user_online_status: number;
}

interface Auction {
  auction_ends_at: number;
  auction_highest_bid: number;
  auction_highest_bidder: number;
  auction_number_of_bids: number;
  blue_percentage: Nullable<any>;
  fade_percentage: Nullable<any>;
  icon_url: string;
  is_commodity: boolean;
  market_name: string;
  market_value: number;
  name_color: string;
  preview_id: Nullable<string>;
  price_is_unreliable: boolean;
  stickers: any[];
  suggested_price: number;
  type: Nullable<string>;
  wear: Nullable<string>;
  published_at: string;
  id: number;
  marketplace_privacy_protection_level: string;
  above_recommended_price: number;
  purchase_price: number;
  wear_name: Nullable<string>;
  depositor_stats: DepositorStats;
}

export interface ActiveAuctionsResponse {
  success: boolean;
  active_auctions: Auction[];
}