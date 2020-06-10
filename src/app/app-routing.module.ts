import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import {ForgotPasswordComponent} from './user/forgot-password/forgot-password.component';
import {AdminComponent} from './admin/admin.component';
import {RegularUserComponent} from './regular-user/regular-user.component';
import {UserOperationsComponent} from './user-operations/user-operations.component';
import {DiscountOperationsComponent} from './discount-operations/discount-operations.component';
import {DogOperationsComponent} from './dog-operations/dog-operations.component';
import {FoodOperationsComponent} from './food-operations/food-operations.component';
import {VetOperationsComponent} from './vet-operations/vet-operations.component';
import {SupplierOperationsComponent} from './supplier-operations/supplier-operations.component';
import {ScheduleOperationsComponent} from './schedule-operations/schedule-operations.component';
import {ScheduleCreateComponent} from './schedule-operations/schedule-create/schedule-create.component';
import {ScheduleUpdateComponent} from './schedule-operations/schedule-update/schedule-update.component';
import {UserCreateComponent} from './user-operations/user-create/user-create.component';
import {UserUpdateComponent} from './user-operations/user-update/user-update.component';
import {DogCreateComponent} from './dog-operations/dog-create/dog-create.component';
import {DogUpdateComponent} from './dog-operations/dog-update/dog-update.component';
import {DiscountCreateComponent} from './discount-operations/discount-create/discount-create.component';
import {DiscountUpdateComponent} from './discount-operations/discount-update/discount-update.component';
import {FoodCreateComponent} from './food-operations/food-create/food-create.component';
import {FoodUpdateComponent} from './food-operations/food-update/food-update.component';
import {SupplierCreateComponent} from './supplier-operations/supplier-create/supplier-create.component';
import {SupplierUpdateComponent} from './supplier-operations/supplier-update/supplier-update.component';
import {VetCreateComponent} from './vet-operations/vet-create/vet-create.component';
import {VetUpdateComponent} from './vet-operations/vet-update/vet-update.component';
import {ClientDogComponent} from './regular-user/client-dog/client-dog.component';
import {ClientVetComponent} from './regular-user/client-vet/client-vet.component';
import {ClientFoodComponent} from './regular-user/client-food/client-food.component';
import {ClientScheduleComponent} from './regular-user/client-schedule/client-schedule.component';
import {ShoppingBasketComponent} from './regular-user/shopping-basket/shopping-basket.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: RegularUserComponent},
  {path: 'user-operations', component: UserOperationsComponent},
  {path: 'dog-operations', component: DogOperationsComponent},
  {path: 'food-operations', component: FoodOperationsComponent},
  {path: 'vet-operations', component: VetOperationsComponent},
  {path: 'supplier-operations', component: SupplierOperationsComponent},
  {path: 'discount-operations', component: DiscountOperationsComponent},
  {path: 'schedule-operations', component: ScheduleOperationsComponent},
  {path: 'schedule-create', component: ScheduleCreateComponent},
  {path: 'schedule-update', component: ScheduleUpdateComponent},
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-update', component: UserUpdateComponent},
  {path: 'dog-create', component: DogCreateComponent},
  {path: 'dog-update', component: DogUpdateComponent},
  {path: 'discount-create', component: DiscountCreateComponent},
  {path: 'discount-update', component: DiscountUpdateComponent},
  {path: 'schedule-create', component: ScheduleCreateComponent},
  {path: 'food-create', component: FoodCreateComponent},
  {path: 'food-update', component: FoodUpdateComponent},
  {path: 'supplier-create', component: SupplierCreateComponent},
  {path: 'supplier-update', component: SupplierUpdateComponent},
  {path: 'vet-create', component: VetCreateComponent},
  {path: 'vet-update', component: VetUpdateComponent},
  {path: 'client-dog', component: ClientDogComponent},
  {path: 'client-vet', component: ClientVetComponent},
  {path: 'client-food', component: ClientFoodComponent},
  {path: 'client-schedule', component: ClientScheduleComponent},
  {path: 'shopping-basket', component: ShoppingBasketComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
