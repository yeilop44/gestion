
export class Proceso {
 
    constructor (_id = '', nameProcess= '', namePetitioner='', identification='', phone='', dateCreate= new Date(),
      dateReceived= new Date(), dateResponse= new Date(), status=[], files=[]) {

      this._id = _id;
      this.nameProcess = nameProcess;
      this.namePetitioner = namePetitioner;
      this.identification= identification;
      this.phone = phone;      
      this.dateCreate = dateCreate;
      this.dateReceived = dateReceived;
      this.dateResponse = dateResponse;
      this.status = status;
      this.files = files;

  }
  
    _id: string;
    nameProcess: string;
    namePetitioner: string;
    identification: string;
    phone: string;
    dateCreate: Date;
    dateReceived: Date;
    dateResponse: Date;
    status: Array<[]>;  
    files: Array<[]>;  

  
  }
  