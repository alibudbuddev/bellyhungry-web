import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppInitializer {
  private apiUrl: string = '/api';

  constructor(private httpClient: HttpClient ) {}

  init(): () => Promise<boolean> {
    return () => {
      return new Promise<boolean>((resolve, reject) => {
        this.getApplicationEnvVar(() => {
          resolve();
          // this.checUserIfAuthenticated(() => {
          //   const language = this.detectLanguage();
          //   if (this.currentLang === language) {
          //     this.i18nService.currentLang = language;
          //     if (isPlatformBrowser(this.platformId)) {
          //       this.appService.isBrowser = true;
          //       this.socketIOService.enableWebSocket();
          //       this.socketIOService.initSocket(this.websocketUrl);
          //     }
          //   } else {
          //     if (isPlatformBrowser(this.platformId)) {
          //       this.reloadLocale(language);
          //     }
          //   }
          //   resolve();
          // });
        });
      });
    };
  }

  private getApplicationEnvVar(callback: () => void) {
    this.httpClient.get<any>(`${this.apiUrl}/config`)  
      .subscribe(
        response => {
          console.log(response);
          callback();
        },
        error => {
          callback();
        }
      );
  }

  // private checUserIfAuthenticated(callback: () => void) {
  //   this.httpClient.get<any>(`${this.apiUrl}/users/me`)  
  //     .subscribe(
  //       response => {
  //         this.appService.user = response.user;
  //         callback();
  //       },
  //       error => {
  //         this.appService.user = false;
  //         callback();
  //       }
  //     );
  // }

  // detectLanguage(): string {
  //   if (isPlatformBrowser(this.platformId)) {

  //     const urlLanguage = window.location.pathname.split('/')[1];
  //     let requestLanguage;

  //     // Check language from URL first.
  //     if (this.supportedLanguages.indexOf(urlLanguage) >= 0) {
  //       requestLanguage = urlLanguage;
  //     } else {
  //       requestLanguage = this.currentLang;
  //     }

  //     // If language from URL is not english. Save it in local storage.
  //     if (requestLanguage !== 'en') {
  //       localStorage.setItem('currentLang', requestLanguage);
  //       return requestLanguage;
  //     }

  //     // If request language is english.
  //     // Check user if it has selected language in local storage
  //     let storedLanguage = localStorage.getItem('currentLang');
  //     if (this.supportedLanguages.indexOf(storedLanguage) >= 0) {
  //       return storedLanguage;
  //     }

  //     // If there's no language in local storage. Check browser language
  //     let browserLanguage = this.getBrowserLanguage();
  //     if (this.supportedLanguages.indexOf(browserLanguage) >= 0) {
  //       localStorage.setItem('currentLang', browserLanguage);
  //       return browserLanguage;
  //     } else {
  //       return this.currentLang;
  //     }
  //   }
  // }

  // getBrowserLanguage(): string {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const language = navigator.language;
  //     let requestLanguage;
  //     if (language.length >= 2) {
  //       requestLanguage = language.substr(0,2);
  //     }

  //     // Check if browser language is not supported by Winaboo. Then set default to "EN"
  //     if (this.supportedLanguages.indexOf(requestLanguage) < 0) {
  //       requestLanguage = this.currentLang;
  //     }
  //     return requestLanguage;
  //   } else {
  //     return this.currentLang;
  //   }
  // }

  // reloadLocale(requestLanguage: any): void {
  //   const currentUrlLanguage = window.location.pathname.split('/')[1];
  //   const newLanguage = requestLanguage == 'en' ? '' : `${requestLanguage}`;
  //   let fullPath = window.location.pathname;

  //   if (this.supportedLanguages.indexOf(currentUrlLanguage) >= 0) {
  //     fullPath = window.location.pathname.replace(`/${currentUrlLanguage}`,'');
  //   }

  //   if (fullPath == '') {
  //     fullPath = '/';
  //   }

  //   localStorage.setItem('currentLang', requestLanguage);
  //   window.location.href = `${newLanguage}${fullPath}${window.location.hash}`;
  // }
}
