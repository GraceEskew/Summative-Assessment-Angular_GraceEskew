import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MoviesService, Movie } from '../movies.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
  movies: (Movie)[] = [];
  displayList: boolean = true;
  newMovieText = ""; 
  movieIdsBeingEdited = {};
  movieBeingDisplayed: Movie;

  //parameter: moviesService, Type: MoviesService
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  onDeleteMovie(i: number) {
    this.moviesService.deleteMovie(i)
    this.getMovies();
  }

  onCreateNewMovie(newMovie: string) {
    this.moviesService.addMovie(newMovie, "", "");
    this.newMovieText = "";
    this.getMovies();
  }

  ngAfterViewInit() {
    console.log("After ViewInit")
  }

  ngOnDestroy() {
    console.log("on Destroy")
  } 

  onStartEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = true;
  }

  onSaveEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = false;
  }

  getMovies() {
    setTimeout(() => {
    this.movies = this.moviesService.getMovies();
    }, 0);
  }

  onViewMovieDetails(movie: Movie) {
    this.movieBeingDisplayed = movie;
  }

  

}
