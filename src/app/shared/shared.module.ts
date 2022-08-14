import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatChipsModule,
  ],
  declarations: [NavbarComponent],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    NavbarComponent,
    MatFormFieldModule,
    MatTabsModule,
    MatChipsModule,
  ],
  providers: [],
})
export class SharedModule {}
