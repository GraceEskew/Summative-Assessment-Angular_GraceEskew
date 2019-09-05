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
    image: [''],
    description: [''],
  })

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    console.log(this.movieForm);

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.movieForm) //Keeping for testing purposes
    
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const image = this.movieForm.value.image;

    this.moviesService.addMovie(title, description, image);

  }

}
