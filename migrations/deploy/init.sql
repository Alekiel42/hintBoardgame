-- Deploy hintBoardgame:init to pg

BEGIN;

CREATE TABLE category (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE 
);

CREATE TABLE hint (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content VARCHAR(102), 
    picture TEXT, 
    sound TEXT, 
    hint_given BOOLEAN NOT NULL DEFAULT false,
    category_id INT NOT NULL REFERENCES category(id)
);

COMMIT;
