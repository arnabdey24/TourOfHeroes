import {Component, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes=[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHero().subscribe((heroes)=>this.heroes=heroes);
  }


}
