-- Revert hintBoardgame:init from pg

BEGIN;


DROP TABLE hint, category;


COMMIT;
