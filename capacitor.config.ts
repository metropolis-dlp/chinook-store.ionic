import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chinookdemoapp',
  appName: 'Chinook Demo App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
