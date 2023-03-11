import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    guests: new FormControl(1, [Validators.required, Validators.min(1)]),
    time: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminComponent,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      guests: [1, [Validators.required, Validators.min(1)]],
      time: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.dialogRef.close(this.reservationForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
