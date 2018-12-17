
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';


const appRoutes: Routes = [
  	{
      path:'',
      component:LandingComponent
  	},
    {
      path:'contact',
      component:ContactComponent
  	},
    {
      path:'about-us',
      component:AboutComponent
  	},
    {
      path:'portfolio',
      component:PortfolioComponent
  	}
]

export const AppRouting = RouterModule.forRoot(appRoutes, {
useHash: false
});
