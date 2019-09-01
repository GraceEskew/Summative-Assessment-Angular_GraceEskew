import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = this.fb.group({
    title: [''],
    cover: [''],
    plot: [''],
  })

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    console.log(this.movieForm);

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.movieForm) //Keeping for testing purposes
    
    const title = this.movieForm.value.title;
    const plot = this.movieForm.value.plot;
    const cover = this.movieForm.value.cover;

    this.moviesService.addMovie(title, plot, cover);

  }

}
