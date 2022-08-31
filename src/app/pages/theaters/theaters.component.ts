import { TheaterRooms } from './../../interfaces/theaters.interface';
import { Movies } from './../../interfaces/movies.interface';
import { Theaters } from 'src/app/interfaces/theaters.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {

  public movieId: number = 0;
  public movies: Movies[] = [];
  public selectedMovie?: Movies;
  public theaters: Theaters[] = [];
  public type = '';
  public sessions = [];
  public time = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transaction: TransactionService,
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.movieId = id;
    this.getTheaters(this.movieId);
    this.getMovieById();
  }

  public navigateTo(route: string) {
    this.router.navigate([route]);
  }

  public getTheaters(id: any) {
    this.transaction.getTheaters(id).pipe().subscribe(res => {
      if (res) {
        this.theaters.push(...res);
        this.theaters.map(t => t.rooms[0].types.map(el => this.type = el[1]));
        console.log(this.theaters.map(t => t.rooms[0].sessions.map(el => el.time)));
      }
    });
  }

  public getMovieById() {
    this.transaction.getCollections().pipe().subscribe(res => {
      if (res) {
        this.movies.push(...res)
        this.selectedMovie = this.movies.find(t => t.id == this.movieId.toString())
      }
    });
  }

}
