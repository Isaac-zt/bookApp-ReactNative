/**
 * Example usage of Appwrite in your React Native app
 * 
 * This file shows how to use the Appwrite client, account, and databases services
 * that are exported from lib/appwrite.js
 */

import { client, account, databases } from './appwrite';

// Example: User Authentication
export const loginUser = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const registerUser = async (email, password, name) => {
    try {
        const user = await account.create('unique()', email, password, name);
        return user;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        return user;
    } catch (error) {
        console.error('Get user error:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};

// Example: Database Operations
export const createDocument = async (databaseId, collectionId, documentId, data) => {
    try {
        const document = await databases.createDocument(
            databaseId,
            collectionId,
            documentId,
            data
        );
        return document;
    } catch (error) {
        console.error('Create document error:', error);
        throw error;
    }
};

export const listDocuments = async (databaseId, collectionId) => {
    try {
        const response = await databases.listDocuments(databaseId, collectionId);
        return response.documents;
    } catch (error) {
        console.error('List documents error:', error);
        throw error;
    }
};

export const getDocument = async (databaseId, collectionId, documentId) => {
    try {
        const document = await databases.getDocument(databaseId, collectionId, documentId);
        return document;
    } catch (error) {
        console.error('Get document error:', error);
        throw error;
    }
};

export const updateDocument = async (databaseId, collectionId, documentId, data) => {
    try {
        const document = await databases.updateDocument(
            databaseId,
            collectionId,
            documentId,
            data
        );
        return document;
    } catch (error) {
        console.error('Update document error:', error);
        throw error;
    }
};

export const deleteDocument = async (databaseId, collectionId, documentId) => {
    try {
        await databases.deleteDocument(databaseId, collectionId, documentId);
    } catch (error) {
        console.error('Delete document error:', error);
        throw error;
    }
};
