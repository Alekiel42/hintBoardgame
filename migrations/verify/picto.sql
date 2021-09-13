-- Verify hintBoardgame:picto on pg

BEGIN;

SELECT id FROM picto WHERE false;

ROLLBACK;
