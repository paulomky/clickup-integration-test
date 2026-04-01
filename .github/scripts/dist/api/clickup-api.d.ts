import { ClickUpCommentsResponse, ClickUpCreatedComment } from "../types/task-comments-type.js";
export declare function createClickUpComment(taskId: string, assigneeId: number, commentText: string): Promise<ClickUpCreatedComment>;
export declare function updateClickUpComment(commentId: string, assigneeId: number, commentText: string): Promise<void>;
export declare function getClickupAllTaskComments(taskId: string): Promise<ClickUpCommentsResponse>;
//# sourceMappingURL=clickup-api.d.ts.map