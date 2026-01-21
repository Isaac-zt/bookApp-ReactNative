import { Client, Account, Databases, Avatars } from 'appwrite';
import 'react-native-url-polyfill/auto';

// Appwrite configuration
const appwriteConfig = {
    endpoint:  'https://fra.cloud.appwrite.io/v1',
    platform: 'dev.destiny.booknest', // Your app identifier
    projectId:  '696c0738000680ff346b', // Add your project ID here
};

// Initialize Appwrite Client
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// If you're running against a self-signed Appwrite instance (local/dev),
// you can enable self-signed certificates. Leave commented for Appwrite Cloud.
// client.setSelfSigned(true);

// Initialize Appwrite Services
const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

export { client, account, databases, avatars, appwriteConfig };


export async function checkAppwriteConnection(timeout = 5000) {
    try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);


        const res = await fetch(appwriteConfig.endpoint, { method: 'GET', signal: controller.signal });
        clearTimeout(id);

        return { ok: res.ok, status: res.status };
    } catch (err) {
        return { error: err.message || String(err), raw: err };
    }
}