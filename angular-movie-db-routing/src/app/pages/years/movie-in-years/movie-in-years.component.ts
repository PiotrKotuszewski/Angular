import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    const year = this.route.snapshot.paramMap.get('year');
    this.movies = this.http.getMoviesFromYear(year);
  }
}
