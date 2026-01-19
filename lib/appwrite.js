import { Client, Account, Databases } from 'appwrite';
import 'react-native-url-polyfill/auto';

// Appwrite configuration
const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1',
    platform: 'dev.destiny.booknest', // Your app identifier
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '696c0738000680ff346b', // Add your project ID here
    projectname: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME = "BookNest",
};

// Initialize Appwrite Client
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// Initialize Appwrite Services
const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases, appwriteConfig };
