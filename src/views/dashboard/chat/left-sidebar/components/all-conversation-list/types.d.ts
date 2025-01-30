export interface GenericChatInterface {
    id: string;
    name: string;
    avatar?: string;
    lastMessage?: string;
    lastMessageTime?: string;
    isOnline?: boolean
  }

export interface RecentChat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  isOnline?: boolean
}

export interface OtherConversation {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  isOnline?: boolean
}

export interface ConversationInterface {
  recentChats: RecentChat[];
  otherConversation: OtherConversation[];
}

export type ConversationSource = 'recent' | 'others';