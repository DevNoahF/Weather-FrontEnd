import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  /**
   * Remove acentos de uma string
   */
  removeAccents(text: string): string {
    if (!text) return text;
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Obtém a data mínima (hoje) no formato ISO
   */
  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Obtém a data máxima (30 dias a partir de hoje) no formato ISO
   */
  getMaxDate(): string {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  }

  /**
   * Valida se a data inicial é menor que a data final
   */
  isValidDateRange(initialDate: string, finalDate: string): boolean {
    if (!initialDate || !finalDate) return false;
    return new Date(initialDate) <= new Date(finalDate);
  }

  /**
   * Valida se a data está dentro do intervalo permitido
   */
  isDateInRange(date: string): boolean {
    if (!date) return false;
    const dateObj = new Date(date);
    const today = new Date(this.getMinDate());
    const maxDate = new Date(this.getMaxDate());
    return dateObj >= today && dateObj <= maxDate;
  }
}
