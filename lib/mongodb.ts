import { MongoClient, Db, MongoClientOptions } from "mongodb";
const uri: string | undefined = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!uri) {
    throw new Error("Please add your Mongo URI to .env");
}

// For local development with Atlas on some macOS / OpenSSL setups, enabling TLS
// and allowing invalid certificates can avoid handshake issues.
const options: MongoClientOptions = {
    tls: true,
    tlsAllowInvalidCertificates: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options);
clientPromise = client.connect();

export async function getDatabase(): Promise<Db> {
    const client = await clientPromise;
    return client.db(process.env.NEXT_PUBLIC_MONGODB_DB_NAME || "devlixir_projects");
}

export default clientPromise;

