import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

export interface Hhe {
  id: number;
  name: string;
  age: string;
  date: string;
  gender: string;
}

const HH: Hhe[] = [
  { id: 1, name: 'Dr Nice', age:'20', date:'2020-08-13', gender:'M'},
  { id: 2, name: 'Narco', age:'20', date:'2020-08-13', gender:'M' },
  { id: 3, name: 'Bombasto', age:'20', date:'2020-08-13', gender:'M' },
  { id: 4, name: 'Celeritas', age:'20', date:'2020-08-13', gender:'M' },
  { id: 5, name: 'Magneta', age:'20', date:'2020-08-13', gender:'M' }
];
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  selectedHero: Hero;
  displayedColumns: string[] = ['id', 'name', 'age', 'date', 'gender'];
  dataSource = HH;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onAdd(): void {
    this.heroes.push({id: 16, name: 'Blank', age:'', date:'', gender:'' });
  }

  onDelete(hero: Hero): void {
    const index: number = this.heroes.indexOf(hero);
    this.heroes.splice(index, 1);
  }
}
