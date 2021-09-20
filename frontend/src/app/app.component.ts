import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ServicesService} from '../app/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  details :any = []
  movieList :any = []
  options = []
  filteredOptions = []
  searchForm : FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private Service : ServicesService,
    ) {}

  ngOnInit(){
    this.initForm();
    this.getNames();
    this.getMovie();
  }

  initForm(){
    this.searchForm = this.fb.group({
      'name' : ['']
  })
    this.searchForm.get('name').valueChanges.subscribe(response => {
      if(response && response.length){
        this.filterData(response);
        this.getDetails(response);
      }else{
        this.filteredOptions = []
      }
    })
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.Service.getMovieNames().subscribe(response => {
      this.options = response;
      //this.filteredOptions = response;
    })
  }

  getDetails(value){
    const data={
      name:value
    }
    
    this.Service.getMovieDetails(JSON.stringify(data)).subscribe(response => {
      this.details=response
      //console.log(this.details)
    })
  }

  getMovie(){
    this.Service.getMovies().subscribe(response => {
      this.details=response
    })
  }
}

