import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';


@Injectable({
  providedIn: 'root'
})


export class PropertiesService {

  constructor() { }


  propertiesSubject = new Subject< Property[]>();

  
  emitsProperties(){
    this.propertiesSubject.next(this.tabLogement);
  }

  // getProperties(){
  //   return new Promise(
  //     (resolve, reject) => {
  //       if(this.tabLogement && this.tabLogement.length >0){
  //         resolve(this.tabLogement);
  //       }
  //       else{
  //         const error = new Error('tabLogement does not exist or is empty')
  //         reject(error);
  //       }
  //     }
  //   )
  // }

  createProperty(property:Property){
    this.tabLogement.push(property);
  }

  tabLogement:Property[] = [
    {
      title:'Ma super maison', 
      category:'Maison',
      surfaces:'30',
      rooms:'2',
      description:'',
      price:'12',
      solde:true,
      
    },
    {
      title:'Mon appartement',
      category:'Appartement',
      solde: false
    },
    {
      title: 'Ma super villa',
      category:'Maison',
      solde:false
    }

  ];


  deleteProperty(index){
      this.tabLogement.splice(index, 1);
  }

  updateProperty(property:Property, index){
    this.tabLogement[index] = property;
    this.emitsProperties();
  }
}
