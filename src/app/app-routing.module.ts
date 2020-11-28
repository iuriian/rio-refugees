import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./presentation/pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'about-you',
        loadChildren: () => import('./presentation/pages/about-you/about-you.module').then(m => m.AboutYouPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => import('./presentation/pages/menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: 'documents',
        loadChildren: () => import('./presentation/pages/documents/documents.module').then(m => m.DocumentsPageModule)
    },
    {
        path: 'jobs',
        loadChildren: () => import('./presentation/pages/jobs/jobs.module').then(m => m.JobsPageModule)
    },
    {
        path: 'emergency',
        loadChildren: () => import('./presentation/pages/emergency/emergency.module').then(m => m.EmergencyPageModule)
    },
    {
        path: 'communities',
        loadChildren: () => import('./presentation/pages/communities/communities.module').then(m => m.CommunitiesPageModule)
    },
    {
        path: 'legal-assistance',
        loadChildren: () => import('./presentation/pages/legal-assistance/legal-assistance.module').then(m => m.LegalAssistancePageModule)
    },
    {
        path: 'education',
        loadChildren: () => import('./presentation/pages/education/education.module').then(m => m.EducationPageModule)
    },
    {
        path: 'restaurants',
        loadChildren: () => import('./presentation/pages/restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
    },
    {
        path: 'shelter',
        loadChildren: () => import('./presentation/pages/shelter/shelter.module').then(m => m.ShelterPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
