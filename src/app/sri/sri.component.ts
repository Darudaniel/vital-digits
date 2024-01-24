import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sri',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sri.component.html',
  styleUrl: './sri.component.css'
})
export class SriComponent {
  dosisFentanilo = 0
  dosisKetamina = 0
  dosisSuccinil = 0
  peso = 0

  submitForm(form: any) {
    // Lógica para manejar la presentación del formulario aquí
    this.peso = form.value.peso
    this.dosisFentanilo = this.peso * 1
    this.dosisKetamina = this.peso * 1
    this.dosisSuccinil = this.peso * 1.5
  }
}