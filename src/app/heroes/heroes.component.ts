import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  selectedHero: Hero;

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
