import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tab.navigation',
  appName: 'tab-navigation',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
