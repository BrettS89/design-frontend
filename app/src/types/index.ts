import { Paginated } from '@feathersjs/feathers';
import Resource from './resource';

export interface Account extends Resource {
  name: string;
}

export interface Role extends Resource {
  name: string;
}

export interface Team extends Resource {
  name: string;
  accountId: string;
}

export interface User extends Resource {
  email: string;
  password: string;
  accountId: string;
  roleId: string;
  teamId: string;
  account?: Account;
  role?: Role;
}

export interface DesignSystem extends Resource {
  accountId: string;
  name: string;
}

export interface Palette extends Resource {
  accountId: string;
  designSystemId: string;
  colors: {
    key: string;
    value: string;
  }[];
}

export interface Variable extends Resource {
  accountId: string;
  key: string;
  value: string;
  designSystemId?: string;
}

export interface Role extends Resource {
  name: string;
}

export type Users = Paginated<User>;
export type Roles = Paginated<Role>;
export type Accounts = Paginated<Account>;
export type DesignSystems = Paginated<DesignSystem>;
export type Variables = Paginated<Variable>;
export type Palettes = Paginated<Palette>;
export type Teams = Paginated<Teams>;
