// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(request) {
    try {
        const data = await request.json();

        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        await client.connect();
        const db = client.db('test');
        const collection = db.collection('contacts');

        await collection.insertOne({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            message: data.message,
            createdAt: new Date(),
        });

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    } finally {
        await client.close();
    }
}
