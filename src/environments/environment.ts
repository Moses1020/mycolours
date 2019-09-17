// import * as moment from 'moment';
// import * as firebase from 'firebase/app';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDlVk4yyfvfM8Z19BYDt3Zt_LO_I21td7g',
    authDomain: 'colors-a07e8.firebaseapp.com',
    databaseURL: 'https://colors-a07e8.firebaseio.com',
    projectId: 'colors-a07e8',
    storageBucket: 'colors-a07e8.appspot.com',
    messagingSenderId: '848651061453',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar',
    clientId: '848651061453-66vlp4g7aim4q85nrvgskovneaglqq19.apps.googleusercontent.com',
  }
};

export const storage = {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  // storage: firebase.storage(),

  // Create a storage reference from our storage service
  // var storageRef = storage.ref();
}