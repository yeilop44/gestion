import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalNuevoProcesoComponent } from '../shared/modals/modal-nuevo-proceso/modal-nuevo-proceso.component';
import * as moment from 'moment';

import * as moment1  from 'moment-business-days';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
  processes: any[] = [];
  isLoading: boolean = false;

  bsModalRef: BsModalRef;

  constructor(private processService: ProcessService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getProcess();
    
  }

  getProcess(){
    this.isLoading = true;
    this.processService.getProcess()
      .subscribe((data: any) => {
        this.processes = data.items; 
        this.isLoading = false;       
        this.calculateDiffDates();           
      });      
  }

  openModalProceso(){    
    this.bsModalRef = this.modalService.show( ModalNuevoProcesoComponent , { class: 'gray modal-lg'} ); 
    this.bsModalRef.content.messageEvent.subscribe(data => {
      console.log('Child component\'s event was triggered:', data); 
      this.getProcess();            
    });   
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  calculateDiffDates(){
    for(let i=0; i<this.processes.length; i++){
      let a = moment(this.processes[i].dateCreate);
      let b =  moment(this.processes[i].dateResponse);
      let c = moment(new Date());
      //let totalDays = b.diff(a, 'days');
      //let missingDays = b.diff(c, 'days');
      let totalDays = moment1(b, 'DD-MM-YYYY').businessDiff(moment(a,'DD-MM-YYYY'));
      let missingDays = moment1(b, 'DD-MM-YYYY').businessDiff(moment((new Date()),'DD-MM-YYYY'));
      this.processes[i].totalDays = totalDays;
      this.processes[i].missingDays = missingDays;
      console.log(this.processes);

    }      
  }





}
