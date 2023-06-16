export const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APPID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const cognitoConfig = {
  userPoolId: import.meta.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  clientId: import.meta.env.REACT_APP_AWS_COGNITO_CLIENT_ID
};

export const auth0Config = {
  clientId: import.meta.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: import.meta.env.REACT_APP_AUTH0_DOMAIN
};

export const mapConfig = import.meta.env.REACT_APP_MAP_MAPBOX;

export const googleAnalyticsConfig = import.meta.env.REACT_APP_GA_MEASUREMENT_ID;
