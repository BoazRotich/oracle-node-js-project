const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    // Create a connection to the database
    connection = await oracledb.getConnection({
      user: 'system',
      password: '1234',
      connectString: 'localhost:1521/XE' // e.g., 'localhost/XEPDB1'
    });

    console.log('Connection was successful!');

    // Execute a simple query
    const result = await connection.execute(`SELECT * FROM customers`);
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
