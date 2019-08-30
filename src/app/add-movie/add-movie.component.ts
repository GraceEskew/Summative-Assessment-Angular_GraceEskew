import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService, Movie } from '../movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})

export class AddMovieComponent implements OnInit {

  addMovieForm = this.fb.group({
    title: [''],
    plot: [''],
    cover: [''],
  })

  movies: Movie[] = [];

  constructor(private MoviesService: MoviesService, private fb: FormBuilder,) { 
    console.log(this.addMovieForm)
  }

  ngOnInit() {
    this.getMovies();
  }

  onSubmitMovie() {
    const title = this.addMovieForm.value.title;
    const plot = this.addMovieForm.value.title;
    const cover = this.addMovieForm.value.cover;
  }

  getMovies() {
    setTimeout (() => {
      this.movies = this.MoviesService.getMovies();
    }, 0);
  }

}
