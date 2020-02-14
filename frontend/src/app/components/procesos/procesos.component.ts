import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalNuevoProcesoComponent } from '../shared/modals/modal-nuevo-proceso/modal-nuevo-proceso.component';
import * as moment from 'moment';

import * as moment1  from 'moment-business-days';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
  displayedColumns: string[] = ['nameProcess', 'namePetitioner', 'dateReceived', 'dateResponse', 'progress', 'actions'];
  //dataSource = ELEMENT_DATA;
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
      //let totalDays = b.diff(a, 'days');
      //let missingDays = b.diff(c, 'days');
      let totalDays = moment1(b, 'DD-MM-YYYY').businessDiff(moment(a,'DD-MM-YYYY'));
      let missingDays = moment1(b, 'DD-MM-YYYY').businessDiff(moment((new Date()),'DD-MM-YYYY'));
      this.processes[i].totalDays = totalDays;
      this.processes[i].missingDays = missingDays;      
    }
    
    //console.log(this.processes);      
  }

}
