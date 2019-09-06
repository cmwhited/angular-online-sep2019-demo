
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
}

export interface Comment {
    id: number;
    userId: number;
    comment: string;
}

export interface IMutation {
    createUser(user: UserInput): User | Promise<User>;
    updateUser(user: UserInput): string | Promise<string>;
    deleteUser(id: number): string | Promise<string>;
    addComment(comment: CommentInput): Comment | Promise<Comment>;
    removeComment(id: number): string | Promise<string>;
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
    comments?: Comment[];
}
