import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { projectData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private project: Project = projectData; //definida e inicializada la clase

  getProject():Project{
    return this.project;
  }
  constructor() { }
}
