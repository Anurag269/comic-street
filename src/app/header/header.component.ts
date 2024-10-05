import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {FlexLayoutModule, FlexModule, MediaChange, MediaObserver} from "@angular/flex-layout";
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SponsershipComponent } from '../sponsership/sponsership.component';
import { CollaberationComponent } from '../collaberation/collaberation.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTabsModule ,MatToolbarModule,MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CollaberationComponent,
    FooterComponent,
    MatSidenavModule,
    AboutComponent ,
    SponsershipComponent,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
  HomeComponent,
  CommonModule,
  FlexLayoutModule, FlexModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', route: 'home', showOnDesktop: true, showOnTablet: true, showOnMobile: false },
    { label: 'About', route: 'about', showOnDesktop: true, showOnTablet: true, showOnMobile: false },
    { label: 'Press', route: '', showOnDesktop: true, showOnTablet: false, showOnMobile: false },
    { label: 'Rules & Regulations', route: '', showOnDesktop: true, showOnTablet: false, showOnMobile: false },
    { label: 'Winners', route: '', showOnDesktop: true, showOnTablet: false, showOnMobile: false },
    { label: 'Login', route: 'login', showOnDesktop: true, showOnTablet: false, showOnMobile: false },
  ];
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

  constructor(private mediaObserver: MediaObserver) {
    this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      const current = changes[0].mqAlias;
      this.isMobile = current === 'xs';
      this.isTablet = current === 'sm' || current === 'md';
      this.isDesktop = current === 'lg' || current === 'xl';
    });
  }
}
