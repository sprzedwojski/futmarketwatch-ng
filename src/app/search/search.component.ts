import {Component} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {Player} from '../model/player'
import {PlayerService} from '../services/player.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  playerForm: FormGroup
  players: Player[]

  constructor(private playerService: PlayerService, private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.playerForm = this.fb.group({
      playerName: ''
    })
  }

  onSubmit() {
    const player = this.playerService.searchPlayer(this.playerForm.get('playerName').value)
    player.subscribe(data => this.players = data)
  }

  onAddPlayer(player: Player) {
    console.log('onAddPlayer')
    this.playerService.watchPlayer(player)
  }

}
