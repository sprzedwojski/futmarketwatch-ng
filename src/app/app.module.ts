import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {PlayerService} from './services/player.service'
import {ReactiveFormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {NavbarComponent} from './navbar/navbar.component'
import {WatchlistComponent} from './watchlist/watchlist.component'
import {RouterModule, Routes} from '@angular/router'
import {SearchComponent} from './search/search.component'

const appRoutes: Routes = [
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WatchlistComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
