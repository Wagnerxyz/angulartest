

import { InjectionToken } from '@angular/core';
export const configToken = 'config';
export const CONFIG = {
    apiUrl: 'http://my.api.com',
    theme: 'suicid-squad',
    title: 'My awesome app'
};
//describe描述字符串可以任意
export const URL_InjectionToken = new InjectionToken<string>('describe any way');
export const SETTINGS_MENU = new InjectionToken<MenuItem>('Settings');

export interface MenuItem {
    label: string;
    route: any[];
}

export const moduleOneMenu: MenuItem = {
    label: 'Module one 来自syntax module',
    route: ['/module-one']
};
export const moduleTwoMenu: MenuItem = {
    label: 'Module two 来自另一个module',
    route: ['/module-two']
};