import {Component, OnInit} from '@angular/core'
import {PlayerService} from '../services/player.service'
import {Player} from '../model/player'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  watchedPlayers: Player[]

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.watchedPlayers = this.playerService.getWatchedPlayers()
  }

}
