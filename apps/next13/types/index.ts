export interface OptionPack {
  id: number;
  label: string;
  values: number[];
}

export interface MemberInfo {
  clientId: number;
  name: string;
  voted?: boolean;
}

export interface Room {
  id: string;
  hash: string;
  owner: string;
  options: OptionPack;
  selectedOptions: {
    id: string;
    value: number;
  }[];
  members: string[];
  membersInfo: MemberInfo[];
  revealed: boolean;
  createdAt: Date;
}
