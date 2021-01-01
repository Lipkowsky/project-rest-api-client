import { Component, OnInit } from '@angular/core';
import { ProjektyService } from './projekty.service';

@Component({
  selector: 'app-projekty',
  templateUrl: './projekty.component.html',
  styleUrls: ['./projekty.component.css'],
})
export class ProjektyComponent implements OnInit {
  constructor(private projektService: ProjektyService) {}

  displayedColumns: string[] = ['projekt_id', 'nazwa', 'student_id', 'zadania'];
  dataSource = this.projektService.getAllProjects();

  

  ngOnInit(): void {

  }

  
}

