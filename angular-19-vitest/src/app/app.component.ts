import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-19';

  constructor() {
    const animal1 = AnimalFactory.createAnimal('perro');
    animal1.hablar();

    const animal2 = AnimalFactory.createAnimal('gato');
    animal2.hablar();
  }
}

interface Animal {
  hablar(): void;
}

class Perro implements Animal {
  hablar(): void {
    console.log('Guau');
  }
}

class Gato implements Animal {
  hablar(): void {
    console.log('Miau');
  }
}

class AnimalFactory {
  static createAnimal(tipo: string): Animal {
    if (tipo == 'perro') return new Perro();

    if (tipo == 'gato') return new Gato();

    throw new Error('No se conoce el tipo de animal');
  }
}
