import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-evoting',
  templateUrl: './evoting.component.html',
  styleUrls: ['./evoting.component.css'],
})
export class EvotingComponent {
  tab: string = 'register';
  registerForm: FormGroup;
  signinForm: FormGroup;
  adminForm: FormGroup;
  webcamImage: WebcamImage | null = null;
  triggerSnapshot: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      aadhar: [''],
      name: [''],
      surname: [''],
      lastname: [''],
      dob: [''],
      gender: [''],
      address: [''],
      postalCode: [''],
      contactNumber: [''],
      password: [''],
      image: [null],
    });

    this.signinForm = this.fb.group({
      aadhar: [''],
      password: [''],
    });

    this.adminForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  setTab(tabName: string) {
    this.tab = tabName;
  }

  onRegister() {
    const formData = { ...this.registerForm.value, image: this.webcamImage?.imageAsBase64 };
    console.log('Register Data:', formData);
  }

  onSignIn() {
    console.log('Sign In Data:', this.signinForm.value);
  }

  onAdminLogin() {
    console.log('Admin Login Data:', this.adminForm.value);
  }

  triggerSnapshotHandler() {
    this.triggerSnapshot.next();
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  handleInitError(error: WebcamInitError): void {
    console.error('Webcam initialization error:', error);
    alert('Webcam initialization failed. Please check your camera permissions.');
  }
}
