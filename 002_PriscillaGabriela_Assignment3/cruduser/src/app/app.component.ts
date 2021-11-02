import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent { 
    public constructor(private titleService: Title, private router:Router) {}
    
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle)
    }

    isHomeRoute() {
        return this.router.url === '/';
      }
}