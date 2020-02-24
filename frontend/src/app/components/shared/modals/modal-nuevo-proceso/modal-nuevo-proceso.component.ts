import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  ProcessService } from '../../../../services/process.service';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { Proceso } from "../../../../models/proceso";


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
   
   
  proceso;
    

  @Input() procesoM: Proceso;
  @Output() messageEvent = new EventEmitter<object>();

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, private processService: ProcessService) { 
    this.proceso = new Proceso ();
  }

  ngOnInit() {
    
   
    if(this.procesoM){
      this.proceso = this.procesoM;
      this.proceso.dateReceived = new Date( this.proceso.dateReceived);
      this.proceso.dateResponse = new Date( this.proceso.dateResponse);
      this.status = this.proceso.status
    
      console.log(this.proceso);
      console.log(this.status);
    }
  }


  save(proceso){
    console.log(this.proceso)
   
    
    if(proceso._id){
     this.processService.editProcess(proceso)
       .subscribe(res => { console.log(res)});     
    }else{
 
        for(let i=0; i<this.status.length; i++){
          this.proceso.status.push(this.status[i]);

        } 
   
       
      this.processService.postProcess(proceso)
      .subscribe(data => {
        console.log(data);
    });

    }
   

    this.messageEvent.emit(proceso);
    this.bsModalRef.hide();
  } 

  addField(){
    this.status.push({
     nameStatus: "",
     dateStatus: new Date()
    });
  }

  deleteField(i){
    this.status.splice(i,1);    
   }

}
