import type { Nullable } from "../shared.js";

interface TransactionData {
  id: number;
  processor_id: number;
  processor_name: string;
  status: number;
  status_name: string;
  metadata: {
    deposit_id: number;
    payment_method: string;
    depositor_id: number;
    penalty: boolean;
    id: number;
    above_recommended_price: number;
    auction_highest_bid: number;
    auction_highest_bidder: number;
    auction_number_of_bids: number;
    auction_ends_at: number
  }
}

interface Transaction {
  id: number;
  key: string;
  type: string;
  balance: number;
  balance_before_coins: string;
  delta: number;
  delta_coins: string;
  balance_after: number;
  balance_after_coins: string;
  timestamp: number;
  timestamp_raw: number;
  date: string;
  invoice_id: Nullable<any>;
  user_id: number;
  data: TransactionData;
}

interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface TransactionHistoryResponse {
  success: boolean;
  current_page: number;
  data: Transaction[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: Nullable<string>;
  to: number;
  total: number;
}