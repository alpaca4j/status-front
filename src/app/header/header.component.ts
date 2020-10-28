import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScopeService} from "../services/scope.service";
import {Tag} from "../models/Tag";
import {StatusService} from "../services/status.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scopeList:Tag[];

  @Output() scopeSelected= new EventEmitter<string>();

  onScopeSelected(scope: string){
    this.statusService.updateScope(scope)
  }

  constructor(private scopeService:ScopeService, private statusService:StatusService) { }

  ngOnInit(): void {
    this.scopeService.getTags().subscribe(scopeList => {
      this.scopeList=scopeList;
    })
    this.statusService.updateScope(this.scopeList[0].scope);
  }

}
