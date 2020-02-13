import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  ProcessService } from '../../../../services/process.service';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-nuevo-proceso',
  templateUrl: './modal-nuevo-proceso.component.html',
  styleUrls: ['./modal-nuevo-proceso.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ModalNuevoProcesoComponent implements OnInit {    
  model;
  status: any = [{
    nameStatus: "",
    dateStatus: new Date()
   }];
  
  proceso: {
    nameProcess: string;
    namePetitioner: string;
    identification: string;
    phone: string;
    dateCreate: Date;
    dateResponse: Date;
    status: Array<{nameStatus: string}>;  
  }

  @Output() messageEvent = new EventEmitter<object>();

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, private processService: ProcessService) { }

  ngOnInit() {
    this.proceso = {
      nameProcess: '',
      namePetitioner: '',
      identification: '',
      phone:  '',
      dateCreate: new Date(),
      dateResponse: new Date(),
      status: []
    }
  }


  save(proceso){
    console.log(this.status)
    for(let i=0; i<this.status.length; i++){
      this.proceso.status.push(this.status[i]);
    }
    
    this.processService.postProcess(proceso)
      .subscribe(data => {
        console.log(data);
    });
    this.messageEvent.emit(proceso);
    this.bsModalRef.hide();
  } 

  addField(){
    this.status.push({
     nameStatus: this.status[this.status.length-1].nameStatus,
     dateStatus: new Date()
    });
  }

  deleteField(i){
    this.status.splice(i,1);
    
   }


}
