-- Deploy hintBoardgame:picto to pg

BEGIN;

CREATE TABLE picto (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE,
    picto TEXT NOT NULL UNIQUE
);


ALTER TABLE hint
    ADD COLUMN picto_id INT NOT NULL REFERENCES picto(id);


COMMIT;

