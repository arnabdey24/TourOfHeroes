import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

  selectedHero?:Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id).subscribe((hero)=>this.selectedHero=hero);
  }

  goBack() {
    this.location.back();
  }
}
