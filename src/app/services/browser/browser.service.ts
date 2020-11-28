import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Injectable({
    providedIn: 'root'
})
export class BrowserService {

    options: InAppBrowserOptions = {
        location: 'yes',
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no',
        closebuttoncaption: 'Close',
        disallowoverscroll: 'no',
        toolbar: 'yes',
        enableViewportScale: 'no',
        allowInlineMediaPlayback: 'no',
        presentationstyle: 'pagesheet',
        fullscreen: 'yes'
    };

    constructor(
        private theInAppBrowser: InAppBrowser
    ) { }

    public openWithSystemBrowser(url: string) {
        const target = '_system';
        return this.theInAppBrowser.create(url, target, this.options);
    }

    public openWithInAppBrowser(url: string) {
        const target = '_blank';
        return this.theInAppBrowser.create(url, target, this.options);
    }

    public openWithCordovaBrowser(url: string) {
        const target = '_self';
        return this.theInAppBrowser.create(url, target, this.options);
    }

}
