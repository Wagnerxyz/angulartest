import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';


//还有resolve guard这里没弄 https://www.cnblogs.com/starof/p/9012193.html

//指component实现这个方法，返回这三种可能
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
//https://www.concretepage.com/angular-2/angular-candeactivate-guard-example
@Injectable({
    providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        state: RouterStateSnapshot) {

        let url: string = state.url;
        console.log('Url: ' + url);
        //若组件定义了canDeactivate方法，则执行，否则返回true
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
// 处理导航到某路由的情况。
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    // 路由守卫
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.checkLogin();
    }

    checkLogin(): boolean {

        // 判断本地有没有token
        const token = sessionStorage.getItem('access_token');

        // 如果token有值，表示登录成功，继续跳转，否则跳转到首页
        if (token) { return true; }

        this.router.navigate(['/login']);
        return false;
    }
}

