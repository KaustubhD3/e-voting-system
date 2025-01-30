import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evoting',
  templateUrl: './evoting.component.html',
  styleUrls: ['./evoting.component.css'],
})
export class EvotingComponent {
  tab: string = 'register';

  // Form Data Objects
  registerData: any = {
    aadhar: '',
    name: '',
    // surname: '',
    lastname: '',
    dob: '',
    gender: '',
    address: '',
    postalCode: '',
    contactNumber: '',
    password: '',
    image: null,
  };

  signinData: any = {
    aadhar: '',
    password: '',
  };

  adminData: any = {
    username: '',
    password: '',
  };

  webcamImage: WebcamImage | null = null;
  triggerSnapshot: Subject<void> = new Subject<void>();
  triggerObservable: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  setTab(tabName: string) {
    this.tab = tabName;
  }

  onRegister() {
    const formData = { ...this.registerData, image: this.webcamImage?.imageAsBase64 };
    console.log('Register Data:', formData);

    const url = 'http://localhost:8080/api/users/register';
    this.http.post(url, formData).subscribe(
      (result) => {
        console.log('Registration successful:', result);
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }

  onSignIn() {
    console.log('Sign In Data:', this.signinData);
  }

  onAdminLogin() {
    console.log('Admin Login Data:', this.adminData);
  }

  triggerSnapshotHandler() {
    this.triggerSnapshot.next();
    this.triggerObservable.next();
  }

  handleImage(webcamImage: WebcamImage) {
    console.log('Captured image:', webcamImage);
    this.webcamImage = webcamImage;
  }

  handleInitError(error: WebcamInitError): void {
    console.error('Webcam initialization error:', error);
    alert('Webcam initialization failed. Please check your camera permissions.');
  }
}
