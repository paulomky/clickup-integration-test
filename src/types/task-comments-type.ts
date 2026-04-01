export interface ClickUpCommentsResponse {
  comments: ClickUpComment[];
}

export interface ClickUpCreatedComment {
    id: string;
    hist_id: string;
    date: number;
}

export interface ClickUpComment {
  id: string;
  comment: ClickUpCommentBlock[];
  comment_text: string;
  user: ClickUpUser;
  resolved?: boolean;
  assignee: ClickUpUser | null;
  group_assignee: string | null;
  assigned_by?: ClickUpUser;
  reactions: unknown[];
  date: string;
  reply_count: number;
}

export interface ClickUpCommentBlock {
  text: string;
  type?: string;
  attributes?: ClickUpCommentBlockAttributes;
  image?: ClickUpImage;
}

export interface ClickUpCommentBlockAttributes {
  'block-id'?: string;
  'code-block'?: { 'code-block': string };
  width?: string;
  'data-id'?: string;
  'data-attachment'?: ClickUpAttachment;
  'data-natural-width'?: string;
  'data-natural-height'?: string;
}

export interface ClickUpImage {
  id: string;
  name: string;
  title: string;
  type: string;
  extension: string;
  thumbnail_large: string;
  thumbnail_medium: string;
  thumbnail_small: string;
  url: string;
  uploaded: boolean;
}

export interface ClickUpAttachment {
  id: string;
  version: string;
  date: number;
  name: string;
  title: string;
  extension: string;
  source: number;
  thumbnail_small: string;
  thumbnail_medium: string;
  thumbnail_large: string;
  width: number;
  height: number;
  url: string;
  url_w_query: string;
  url_w_host: string;
}

export interface ClickUpUser {
  id: number;
  username: string;
  email: string;
  color: string;
  initials: string;
  profilePicture: string | null;
}