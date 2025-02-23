import { Client, Account } from 'appwrite';

const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',  
  projectId: 'device', 
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);

export { client, account };
