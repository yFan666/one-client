import { Component } from "vue";

export interface MenuList {
  name: string;
  path: string;
  component?: Component;
  meta?: {
    title?: string;
    hidden?: boolean;
    icon?: string;
  }
  children?: MenuList[];
}
