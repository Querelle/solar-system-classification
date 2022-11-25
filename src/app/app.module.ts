import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AstroTableComponent } from './components/astro-table/astro-table.component';
import { ConcatPipe } from './pipes/concat.pipe';
import { AstroFormComponent } from './components/astro-form/astro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeasurementRenderPipe } from './pipes/measurementRender.pipe';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { BasicLinkComponent } from './components/basic-link/basic-link.component';

const PIPES = [ConcatPipe, MeasurementRenderPipe];
const PAGES = [TablePageComponent, FormPageComponent];
const COMPONENTS = [HeaderComponent, AstroTableComponent, AstroFormComponent, BaseButtonComponent, BasicLinkComponent];

@NgModule({
    declarations: [AppComponent, ...PAGES, ...COMPONENTS, ...PIPES],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
