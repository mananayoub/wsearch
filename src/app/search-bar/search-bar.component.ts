import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();  // child to parent comunication
  term = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
      this.term = value;
  }

  onFormSubmit(event: any) {
    event.preventDefault(); // for hading default enter submit in the input search 
    this.submitted.emit(this.term); // child parent comunication
  }

}
