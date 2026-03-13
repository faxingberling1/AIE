const { Client } = require('pg');
const client = new Client({
  connectionString: "postgresql://postgres:AlexMurphy%40313@localhost:5432/AIE"
});

async function test() {
  try {
    await client.connect();
    console.log("Connected successfully to AIE database");
    const res = await client.query('SELECT NOW()');
    console.log("Query result:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection failed:", err.message);
    if (err.message.includes("database \"AIE\" does not exist")) {
        console.log("Trying to connect to default 'postgres' database...");
        const client2 = new Client({
            connectionString: "postgresql://postgres:AlexMurphy%40313@localhost:5432/postgres"
        });
        try {
            await client2.connect();
            console.log("Connected successfully to default 'postgres' database");
            await client2.end();
        } catch (err2) {
            console.error("Failed to connect to default database:", err2.message);
        }
    }
  }
}

test();
