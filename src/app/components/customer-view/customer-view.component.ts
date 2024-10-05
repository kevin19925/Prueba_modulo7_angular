import { Component, Input } from '@angular/core';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'customer-view',
  standalone: true,
  imports: [],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css',
})
export class CustomerViewComponent {
  @Input() customer!: Customer;
}
