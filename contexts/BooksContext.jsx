import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "6970e661002132964979"
const COLLECTION_ID = "books"

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
            setBooks(response.documents || []);
            return response.documents || [];
        } catch (error) {
            console.error('Fetch books error', error);
            throw error;
        }
    }

    async function fetchBookById(id) {
        try {
            const book = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
            return book;
        } catch (error) {
            console.error('Fetch book error', error);
            throw error;
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
             DATABASE_ID,
             COLLECTION_ID,
             ID.unique(),
             {...data, userId: user.$id},
             [
                Permission.read(Role.user(user.$id)),
                Permission.update(Role.user(user.$id)),
                Permission.delete(Role.user(user.$id)),
             ]   
            )
            setBooks(prev => [newBook, ...prev]);
            return newBook;
        } catch (error) {
            console.error('Create book error', error);
            throw error;
        }
    }

    async function deleteBook(id) {
        try {
            await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
            setBooks(prev => prev.filter(b => b.$id !== id));
        } catch (error) {
            console.error('Delete book error', error);
            throw error;
        }
    }

    useEffect(() => {
        
        if (user) {
            fetchBooks()
        } else {
            setBooks([])
        }

    }, [user])

    return (
        <BooksContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}