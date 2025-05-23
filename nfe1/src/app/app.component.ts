import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mfe1';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const nombre = this.route.snapshot.data['nombre'];
    const email = this.route.snapshot.data['email'];

    console.log('Parametros pasados por el shell:');
    console.log('nombre:', nombre);
    console.log('email:', email);
  }
}
