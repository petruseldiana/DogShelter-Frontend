import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { RegularUserComponent } from './regular-user/regular-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserOperationsComponent } from './user-operations/user-operations.component';
import {MatTableModule} from '@angular/material/table';
import { DogOperationsComponent } from './dog-operations/dog-operations.component';
import { VetOperationsComponent } from './vet-operations/vet-operations.component';
import { FoodOperationsComponent } from './food-operations/food-operations.component';
import { SupplierOperationsComponent } from './supplier-operations/supplier-operations.component';
import { DiscountOperationsComponent } from './discount-operations/discount-operations.component';
import { ScheduleOperationsComponent } from './schedule-operations/schedule-operations.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ScheduleCreateComponent } from './schedule-operations/schedule-create/schedule-create.component';
import { UserCreateComponent } from './user-operations/user-create/user-create.component';
import { UserUpdateComponent } from './user-operations/user-update/user-update.component';
import { ScheduleUpdateComponent } from './schedule-operations/schedule-update/schedule-update.component';
import { DiscountUpdateComponent } from './discount-operations/discount-update/discount-update.component';
import { DiscountCreateComponent } from './discount-operations/discount-create/discount-create.component';
import { DogCreateComponent } from './dog-operations/dog-create/dog-create.component';
import { DogUpdateComponent } from './dog-operations/dog-update/dog-update.component';
import { FoodUpdateComponent } from './food-operations/food-update/food-update.component';
import { FoodCreateComponent } from './food-operations/food-create/food-create.component';
import { SupplierCreateComponent } from './supplier-operations/supplier-create/supplier-create.component';
import { SupplierUpdateComponent } from './supplier-operations/supplier-update/supplier-update.component';
import { VetUpdateComponent } from './vet-operations/vet-update/vet-update.component';
import { VetCreateComponent } from './vet-operations/vet-create/vet-create.component';
import {MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule} from '@angular/material/checkbox';
import { ClientDogComponent } from './regular-user/client-dog/client-dog.component';
import { ClientVetComponent } from './regular-user/client-vet/client-vet.component';
import { ClientFoodComponent } from './regular-user/client-food/client-food.component';
import { ClientScheduleComponent } from './regular-user/client-schedule/client-schedule.component';
import { ShoppingBasketComponent } from './regular-user/shopping-basket/shopping-basket.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    AdminComponent,
    RegularUserComponent,
    UserOperationsComponent,
    DogOperationsComponent,
    VetOperationsComponent,
    FoodOperationsComponent,
    SupplierOperationsComponent,
    DiscountOperationsComponent,
    ScheduleOperationsComponent,
    ScheduleCreateComponent,
    UserCreateComponent,
    UserUpdateComponent,
    ScheduleUpdateComponent,
    DiscountUpdateComponent,
    DiscountCreateComponent,
    DogCreateComponent,
    DogUpdateComponent,
    FoodUpdateComponent,
    FoodCreateComponent,
    SupplierCreateComponent,
    SupplierUpdateComponent,
    VetUpdateComponent,
    VetCreateComponent,
    ClientDogComponent,
    ClientVetComponent,
    ClientFoodComponent,
    ClientScheduleComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
