import { Movies } from './../../interfaces/movies.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public moviesCol: Movies[] = [];
  public searchText: string = '';

  constructor(
    private router: Router,
    private transaction: TransactionService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public back(): void {
    //this.router.navigate('..');
  }

  public onSelected(movie: Movies) {
    this.router.navigate(['pages/theaters/' + movie.id]);
  }

  public getMoviesSubscriber() {
    this.transaction.getCollections().pipe().subscribe(res => {
      if (res) {
        res.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 1);

        for (let i = 0; i <= 13; i++) {
          this.moviesCol.push(res[i] || res[i - 10])
        }
        console.log(this.moviesCol);
      }
    });
  }

  public getMovies() {
    this.moviesCol = [];
    this.getMoviesSubscriber();
    return this.moviesCol;
  }

  public search() {
    if (this.searchText !== '') {
      let searchValue = this.searchText.toLocaleLowerCase();

      this.moviesCol = this.moviesCol.filter(res => {
        return res.title.toLocaleLowerCase().match(searchValue);
      });
    } else {
      this.ngOnInit();
    }
  }

}
