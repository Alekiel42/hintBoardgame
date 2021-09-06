-- Verify hintBoardgame:init on pg

BEGIN;

SELECT id FROM hint WHERE false;
SELECT id FROM category WHERE false;

ROLLBACK;
