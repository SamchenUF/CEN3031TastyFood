const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./recipes.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        userid TEXT,
        recipe TEXT,
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created items table.");

      db.run(`DELETE FROM items`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from items");
        const insertSql = `INSERT INTO items(userid, recipe) VALUES(?, ?)`;

        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});