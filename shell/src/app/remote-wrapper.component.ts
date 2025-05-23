import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-remote-wrapper',
  template: `<ng-container #vc></ng-container>`,
  standalone: true,
  imports: [],
})
export class RemoteWrapperComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  vc!: ViewContainerRef;

  async ngAfterViewInit() {
    const module = await loadRemoteModule({
      remoteName: 'mfe1',
      exposedModule: './FlightsComponent',
    });

    const component = module.FlightsComponent;

    // Limpia el contenedor y crea el componente dinámicamente
    this.vc.clear();
    this.vc.createComponent(component);
  }
}
