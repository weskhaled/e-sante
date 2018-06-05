import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    id: string;
    path: string;
    title: string;
    icon: string;
    class: string;
    sub: any;
}
export const ROUTES: RouteInfo[] = [
    { id: "dashboard", path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', sub: [] },
    { id: "profile", path: 'profile', title: 'Informations personnelles',  icon:'pe-7s-user', class: '', sub: [] },

    { 
        id: "infos",
        path: null, 
        title: 'Informations générales',  
        icon:'pe-7s-info',
        class: '',
        sub: [
            { path: 'blood', title: 'Groupe sanguin',  icon:'pe-7s-note', class: '' },
            { path: 'height', title: 'Taille',  icon:'pe-7s-note', class: '' },
            { path: 'weight', title: 'Poids',  icon:'pe-7s-note', class: '' },
        ]
    },
    
    { 
        id: "sante",
        path: null, 
        title: 'Etat de santé',  
        icon:'pe-7s-science',
        class: '',
        sub: [
            { path: 'allergy', title: 'Allergie',  icon:'pe-7s-note', class: '' },
            { path: 'disease', title: 'Maladie',  icon:'pe-7s-note', class: '' },
            { path: 'medicament', title: 'Médicaments',  icon:'pe-7s-note', class: '' },
            { path: 'surgery', title: 'Chirurgie',  icon:'pe-7s-note', class: '' },
            { path: 'vaccination', title: 'Vaccinations',  icon:'pe-7s-note', class: '' },
            { path: 'teeth', title: 'Dents',  icon:'pe-7s-note', class: '' },
        ]
    },
    
    { 
        id: "medical",
        path: null, 
        title: 'Consultations médicales',  
        icon:'pe-7s-note2',
        class: '',
        sub: [
            { path: 'doctor', title: 'Médecins traitants',  icon:'pe-7s-note', class: '' },
            { path: 'consultation', title: 'Consultations',  icon:'pe-7s-note', class: '' },
            { path: 'analysis', title: 'Analyses médicales',  icon:'pe-7s-note', class: '' },
            { path: 'radiology', title: 'Radiologies',  icon:'pe-7s-note', class: '' }
        ]
    }

    /*
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
