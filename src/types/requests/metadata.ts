import type { Nullable } from "../shared.js";

interface LevelsData {
  user_id: number;
  level: number;
  rust_keys: number;
  bronze_keys: number;
  silver_keys: number;
  gold_keys: number;
  diamond_keys: number;
  uranium_keys: number;
  unbreakable_keys: number;
  gift_keys: number;
  created_at: string;
  updated_at:string;
  last_used_key_at: string;
  last_used_key: string;
  xp: number;
  xp_synced_at: string;
}

interface Balance {
  user_id: number;
  balance_type: number;
  balance: string;
  uncashoutable_balance: string;
  balance_coins: string;
  balance_type_name: string;
  balance_coins_value: string;
  cashoutable_balance: string;
}

export interface MetadataResponse {
  user: {
    id: number;
    username: Nullable<string>;
    steam_name: string;
    avatar: string;
    default_balance_type: number;
    registration_timestamp: string;
    registration_ip: string;
    last_login: string;
    toal_profit: number;
    total_bet: number;
    betback_total: number;
    bet_threshold: number;
    total_trades: number;
    total_deposit: number;
    total_withdraw: number;
    withdraw_limit: number;
    ref_id: number;
    ref_earnings: number;
    total_ref_earnings: number;
    referral_code: Nullable<string>;
    muted_until: number;
    mute_reason: Nullable<string>;
    utm_campaign: Nullable<any>;
    country: string;
    whitelisted: number;
    total_tips_received: number;
    total_tips_sent: number;
    withdrawl_fee_owed: string;
    flags: number;
    tos_version: string;
    balance: number;
    ban: Nullable<any>;
    levels_data: LevelsData;
    balances: Balance[];
    cashoutable_balance: number;
    steam_id: string;
    steam_level: number;
    last_steam_level_cache: string;
    trade_offer_token: string;
    trade_url: string;
    level: number;
    xp: number;
    user_hash: string;
    roles: any[];
    eligible_for_free_case: boolean;
    extra_security_type: 'base' | 'strict';
    p2p_telegram_notifications_allowed: boolean;
    p2p_telegram_notifications_enabled: boolean;
    p2p_last_failed_trade_feedback: any;
    p2p_filter_delivery_time_enabled: boolean;
    steam_inventory_url: string;
    steam_api_key: Nullable<string>;
    unread_notifications: any[];
    password_updated_at: Nullable<string>;
    has_password: boolean;
    third_party_auth_provider_count: 0;
    has_crypto_deposit: boolean;
    actualBan: Nullable<any>;
    deposits_blocked: boolean;
    oauth_services: any[];
    session: Nullable<any>;
    require_2fa: boolean;
    api_token: string;
  };
  socket_token: string;
  socket_signature: string;
}