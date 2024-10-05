import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: ' tr [invoice-item]',
  standalone: true,
  imports: [],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css',
})
export class InvoiceItemComponent {
  @Input() item!: InvoiceItem;
}
