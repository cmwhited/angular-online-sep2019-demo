
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface CommentInput {
    id?: number;
    userId: number;
    comment: string;
}

export interface UserInput {
    id?: number;
    email: string;
    name: string;
    role: UserRole;
    age: number;
    profilePicUrl?: string;
}

export interface ApiResponse {
    message: string;
}

export interface Comment {
    id: number;
    userId: number;
    comment: string;
}

export interface IMutation {
    createUser(user: UserInput): User | Promise<User>;
    updateUser(user: UserInput): ApiResponse | Promise<ApiResponse>;
    deleteUser(id: number): ApiResponse | Promise<ApiResponse>;
    addComment(comment: CommentInput): Comment | Promise<Comment>;
    removeComment(id: number): ApiResponse | Promise<ApiResponse>;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(id: number): User | Promise<User>;
}

export interface ISubscription {
    commentAdded(userId: number): Comment | Promise<Comment>;
}

export interface User {
    id: number;
    email: string;
    name: string;
    role: UserRole;
    age: number;
    profilePicUrl?: string;
    comments?: Comment[];
}
