import { Component } from '@angular/core';
import { Project } from '../../model/Project';
import { ProjectService } from '../../services/project.service.service';
import { CustomerViewComponent } from '../customer-view/customer-view.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CustomerViewComponent
  ],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  project!: Project;
  constructor(private service: ProjectService) { }
  ngOnInit(): void {
    this.project = this.service.getProject();
  }
}
