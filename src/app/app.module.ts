import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { UserModule } from './user/user.module';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { UsersChildComponent } from './users-child/users-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { ValueAppendPipe } from './pipes/value-append.pipe';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    Comp1Component,
    Comp2Component,
    AllUsersComponent,
    UserDetailComponent,
    ComponentStylesComponent,
    UsersChildComponent,
    FirstChildComponent,
    SecondChildComponent,
    UserParentComponent,
    PipesComponent,
    CustomPipesComponent,
    ValueAppendPipe,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
