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
import { FixtureDetectChangeComponent } from './fixture-detect-change/fixture-detect-change.component';
import { AutoDetectChangeComponent } from './auto-detect-change/auto-detect-change.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { TestingPipesDirectiveRouteComponent } from './testing-pipes-directive-route/testing-pipes-directive-route.component';
import { HttpPipe } from './http.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TestingRouteComponent } from './testing-route/testing-route.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TestingDirectiveComponent } from './testing-directive/testing-directive.component';
import { HoverFocusDirective } from './hover-focus.directive';

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
    FixtureDetectChangeComponent,
    AutoDetectChangeComponent,
    HandleEventComponent,
    FillFormComponent,
    InputOutputComponent,
    TestingPipesDirectiveRouteComponent,
    HttpPipe,
    DashboardComponent,
    LoginComponent,
    TestingRouteComponent,
    ExtratoComponent,
    TestingDirectiveComponent,
    HoverFocusDirective
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
