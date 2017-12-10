import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Player} from '../model/player'

@Injectable()
export class PlayerService {

  private watchedPlayers: Player[] = []

  constructor(private http: HttpClient) { }

  getPlayer(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/players/' + id)
  }

  searchPlayer(name: String): Observable<any> {
    return this.http.get('http://localhost:8080/players?name=' + name)
  }

  watchPlayer(player: Player) {
    this.watchedPlayers.push(player)
    console.log(this.watchedPlayers)
  }

  getWatchedPlayers(): Player[] {
    return this.watchedPlayers
  }
}
