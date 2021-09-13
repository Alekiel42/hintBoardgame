-- Deploy hintBoardgame:picto to pg

BEGIN;

CREATE DOMAIN icon8_url_format AS TEXT CHECK(
    VALUE ~ '^https:\/\/img.icons8.com'
    AND VALUE !~ '[ <>#%{}|''"^,~\[\]`!$()*+]'
);

CREATE TABLE picto (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE,
    icon8_url TEXT NOT NULL UNIQUE
);

ALTER TABLE picto 
    ALTER COLUMN icon8_url TYPE icon8_url_format;

ALTER TABLE hint
    ADD COLUMN picto_id INT NOT NULL REFERENCES picto(id);


COMMIT;

