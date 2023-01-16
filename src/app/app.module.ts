import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { MatchersComponent } from './matchers/matchers.component';
import { StubComponent } from './stub/stub.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { RequestComponent } from './request/request.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    FixProblemsComponent,
    DebuggerTestsComponent,
    MatchersComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    RequestComponent,
    MockServiceComponent,
    AsynchronousComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
