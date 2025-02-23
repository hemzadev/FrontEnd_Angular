import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public properties: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8021/properties")
      .subscribe({
        next: (data: Object) => {
          this.properties = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}