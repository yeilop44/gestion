
export class Proceso {
 
    constructor (_id = '', nameProcess= '', namePetitioner='', identification='', phone='', dateCreate='') {
      this._id = _id;
      this.nameProcess = nameProcess;
      this.namePetitioner = namePetitioner;
      this.identification= identification;
      this.phone = phone;      
      this.dateCreate = dateCreate;    
  }
  
    _id: string;
    nameProcess: string;
    namePetitioner: string;
    identification: string;
    phone: string;
    dateCreate: string;
  
  }
  