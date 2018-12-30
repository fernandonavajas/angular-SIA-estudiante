import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RamosService {

  private serviceUrl = 'https://api.sebastian.cl/academia/api/v1/courses/students/19.751.970-3';

  constructor(private htttp: HttpClient) { }
}
