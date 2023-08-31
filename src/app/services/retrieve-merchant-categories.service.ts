import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetrieveMerchantCategoriesService {

  constructor(private http : HttpClient) {}

  getData() {
    return this.http.get('http://azure01.cubicsystems.com:9797/wservice.php/getmerchantcategories');
  }
}


