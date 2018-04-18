import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EZCodeAdalService } from './ezcode-adal.service';

@Component({
    template: '<div>Please wait...</div>'
})
export class IdTokenCallbackComponent implements OnInit {
    constructor(private router: Router, private adalService: EZCodeAdalService) {

    }

    ngOnInit() {
        if (this.adalService.userInfo) {
            this.router.navigate(['']);
        }
    }
}