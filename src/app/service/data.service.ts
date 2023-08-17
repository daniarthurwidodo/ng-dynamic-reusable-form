import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    { name: "user", type: "text", label: "username" },
    { name: "age", type: "number", label: "pick age" },
    {
      name: "job", type: "select",label: "job select", data: [
        { value: "driver" },
        { value: "barista" }
      ]
    }
  ]

  constructor() { }
}
