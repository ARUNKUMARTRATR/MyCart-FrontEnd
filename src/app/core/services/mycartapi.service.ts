import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycartapiService {

  constructor(private mycartapi: ApiService) { }

}