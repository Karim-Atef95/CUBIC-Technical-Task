import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader,TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: 'registration-form',component: RegistrationFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxFileDropModule,
    HttpClientModule,
    // ngx-translate and the loader module
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader: {
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient], 
      }
    }),    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//  required for AOT compilation
export function HttpLoaderFactory(http:HttpClient) : TranslateHttpLoader {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}