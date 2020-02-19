import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalNuevoProcesoComponent } from '../shared/modals/modal-nuevo-proceso/modal-nuevo-proceso.component';
import * as moment from 'moment';

import * as momentBusinessDays  from 'moment-business-days';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
  displayedColumns: string[] = ['nameProcess', 'namePetitioner', 'dateReceived', 'dateResponse', 'progress','status', 'actions'];  
  dataSource: any[] = [];
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
        this.dataSource = this.processes;  
        console.log(this.dataSource);    
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
      let a = moment(this.processes[i].dateReceived);
      let b =  moment(this.processes[i].dateResponse);
      let c = moment(new Date());
      let totalDays1 = b.diff(a, 'days');
      let missingDays1 = b.diff(c, 'days');
      

      let totalDays = momentBusinessDays(b, 'DD-MM-YYYY').businessDiff(moment(a,'DD-MM-YYYY'));
      let missingDays = momentBusinessDays(b, 'DD-MM-YYYY').businessDiff(moment(c,'DD-MM-YYYY'), true);
      this.processes[i].totalDays = totalDays;
      this.processes[i].missingDays = missingDays;   
      console.log(i + ' Dias Faltantes diff '  + missingDays1 + '   => Dias Faltantes businessDiff ' + missingDays);  
      console.log(i + ' Dias total diff '  +  totalDays1 + '   => Dias total businessDiff ' +  totalDays);    
    }
           
  }   



}
