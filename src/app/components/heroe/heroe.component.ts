import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute,
  private _heroesService: HeroesService,
  private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
  ngOnInit() {
  }
  regresarHeroes() {
    this.router.navigate(['heroes']);

  }

}
