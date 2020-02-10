import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../../shared/service/list.service";
import {Pokemon} from "../../shared/model/pokemon";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  public idRoute: number;
  public element;
  public formGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private _listService: ListService,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.loadRoute();
  }

  public initForm(){
    const names = this._fb.group({
      en: [this.element.name.english, []],
      fr: [this.element.name.french, []],
      jp: [this.element.name.japanese, []],
      ch: [this.element.name.chinese, []],
    });
    const base = this._fb.group({
      atk: [this.element.base.Attack, []],
      def: [this.element.base.Defense, []],
      spAtk: [this.element.base['Sp. Attack'], []],
      spDef: [this.element.base['Sp. Defense'], []],
      spd: [this.element.base.Speed, []],
      hp: [this.element.base.HP, []],
    });

    this.formGroup = this._fb.group({
      id: [this.element.id, []],
      names: names,
      base: base,
    });
  }
  public loadRoute(){
    this.route.params.subscribe(params => {this.idRoute = +params.id});
    console.log(this.idRoute)
    this.loadListDetail(this.idRoute);

  }

  public loadListDetail(id: number) {
    this._listService.loadDetailList(this.idRoute)
      .subscribe(item => {
        this.element = item;
        this.initForm();
      });
  }
}
