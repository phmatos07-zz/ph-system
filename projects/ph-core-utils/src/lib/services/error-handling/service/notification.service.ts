import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly BUTTON_TEXT = 'x';
  private readonly PANEL_CLASS = ['error'];

  constructor(
    public snackBar: MatSnackBar
  ) { }

  showSuccess(message: string): void {
    this.snackBar.open(message);
  }

  showError(message: string): void {
    this.snackBar.open(
      message,
      this.BUTTON_TEXT,
      { panelClass: this.PANEL_CLASS }
    );
  }
}
