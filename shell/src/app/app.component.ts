import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoteWrapperComponent } from './remote-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RemoteWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shell';
}
