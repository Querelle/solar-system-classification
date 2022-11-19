import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AstroTableComponent } from './components/astro-table/astro-table.component';
import { ConcatPipe } from './pipes/concat.pipe';

const COMPONENTS = [HeaderComponent, AstroTableComponent];
const PIPES = [ConcatPipe];

@NgModule({
    declarations: [AppComponent, ...COMPONENTS, ...PIPES],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
