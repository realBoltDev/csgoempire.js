interface User {
    id: number;
    blocker_user_id: number;
    blocked_user_id: number;
    created_at: string;
    updated_at: string;
}

export type BlockedUserResponse = User[];