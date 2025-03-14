import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterServiceService } from '../services/counter-service.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  counter :number = 0;
  counterService = inject(CounterServiceService);

  ngOnInit(){
    this.counterService.getCounter().subscribe((response) => (this.counter = response));
  }
}
