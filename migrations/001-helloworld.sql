-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    price TEXT
);

CREATE TABLE Animal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size TEXT
);

INSERT INTO Person (name, email, password) values ('Royal', 'royal@gmail.com', '111');
INSERT INTO Person (name, email, password) values ('Bob', 'bob@gmail.com', '222');

INSERT INTO Vehicle (brand, price) values ('Toyota', '55555');
INSERT INTO Vehicle (brand, price) values ('Benz', '99999');

INSERT INTO Animal (name, size) values ('Cat', 'small');
INSERT INTO Animal (name, size) values ('Elephant', 'big');

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;
DROP TABLE Animal;