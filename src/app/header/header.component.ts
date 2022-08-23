import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // standardmäßig beeinflusst die CSS-Formatierung in einer Komponente nicht die übergeordneten
  // durch Setzen 'VewEncapsulation.None' wird das CSS-File decapsuliert, wodurch darin zB im Footer-CSS das Styling des Bodys definiert werden kann
  encapsulation: ViewEncapsulation.None     
})
export class HeaderComponent implements OnInit {

  @Input() username: string;
  constructor() { }

  ngOnInit() {
  }

}