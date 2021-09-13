-- Revert hintBoardgame:picto from pg

BEGIN;

ALTER TABLE hint
    DROP COLUMN picto_id;

DROP TABLE picto;

DROP DOMAIN icon8_url_format;

COMMIT;
