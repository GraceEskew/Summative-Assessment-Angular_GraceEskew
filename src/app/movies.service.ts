import { Injectable } from '@angular/core';

export class Movie {
  title: string;
  description: string;
  image: string;

  constructor(title: string, description: string, image: string) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

@Injectable({
  providedIn: 'root'
})

 
export class MoviesService {
  movies: Movie[] = [
    new Movie("Dr. Strange", "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.", "http://www.gstatic.com/tv/thumb/v22vodart/11214341/p11214341_v_v8_bc.jpg"),
    new Movie("The Equalizer", "Robert McCall (Denzel Washington), a man of mysterious origin who believes he has put the past behind him, dedicates himself to creating a quiet new life. However, when he meets Teri (Chloë Grace Moretz), a teenager who has been manhandled by violent Russian mobsters, he simply cannot walk away. With his set of formidable skills, McCall comes out of self-imposed retirement and emerges as an avenging angel, ready to take down anyone who brutalizes the helpless.", "http://www.gstatic.com/tv/thumb/v22vodart/10549100/p10549100_v_v8_at.jpg"),
    new Movie("Godzilla", "Ford Brody (Aaron Taylor-Johnson), a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe (Bryan Cranston). Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.", "http://www.imfdb.org/images/thumb/3/3e/Godzilla2014.jpg/300px-Godzilla2014.jpg"),
    new Movie("The Lord of the Rings: The Fellowship of The Ring", "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.", "http://www.gstatic.com/tv/thumb/v22vodart/28828/p28828_v_v8_bg.jpg"),
    new Movie("John Wick", " Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.", "http://www.gstatic.com/tv/thumb/v22vodart/11016518/p11016518_v_v8_ag.jpg"),
  ];
  
  constructor() { }

  //Eventually this will be stored in a DB
  addMovie(title: string, description: string, image: string) {
    const newMovie = new Movie(title, description, image);
    this.movies.push(new Movie(title, description, image));
  }

  deleteMovie(i: number) {
    this.movies.splice(i, 1);
  }
 
  getMovies(): Movie[] {
    return this.movies;
  }
}
 