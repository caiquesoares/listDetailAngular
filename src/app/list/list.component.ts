import {Component, OnInit, ViewChild} from '@angular/core';
import {ListService} from "../shared/service/list.service";
import {Pokemon} from "../shared/model/pokemon";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public data: Pokemon[];
  public dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];

  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _listService: ListService) {
  }

  ngOnInit() {
    this.loadList();
    this.displayedColumns = ['icon', 'id', 'name', 'types', 'actions']
  }

  public loadList() {
    this._listService.loadList().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource<Pokemon>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
