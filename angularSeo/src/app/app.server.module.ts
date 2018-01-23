import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {ServerTransferStateModule} from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
imports: [
	ServerModule,
	ModuleMapLoaderModule,

    AppModule
],
bootstrap: [AppComponent]
})
export class AppServerModule { }