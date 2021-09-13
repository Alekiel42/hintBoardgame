BEGIN;

INSERT INTO category(label) VALUES
    ('Pose de bombes'),
    ('Retrait éboulements'),
    ('Annihiler Horreur'),
    ('Sortie de spéléo');

INSERT INTO picto(label, icon8_url) VALUES
    ('map', 'https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-map-maps-and-locations-those-icons-fill-those-icons-1.png'),
    ('pelle', 'https://img.icons8.com/dotty/80/000000/spade.png'),
    ('dragon ball', 'https://img.icons8.com/windows/32/000000/son-goku.png');

INSERT INTO hint(content, picture, sound, category_id, picto_id) VALUES
    (NULL, 'prisme.png', NULL, 1,1),
    (NULL, 'batte.png', NULL,1,1),
    (NULL, 'rectangle.png', NULL,2,1),
    (NULL, 'zombieterre.png', NULL,2,1),
    (NULL, 'zombie.png', NULL,3,1),
    (NULL, 'plante.png', NULL,3,1),
    (NULL, '3d.png', NULL,4,1),
    (NULL, 'cthulhu.png', NULL,1,2),
    (NULL, 'jailu.png', NULL,1,2),
    (NULL, 'robot.png', NULL,2,2),
    (NULL, 'dunwich.png', NULL,2,2),
    (NULL, 'livre.png', NULL,3,2),
    (NULL, 'velo.png', NULL,3,2),
    (NULL, 'etagere.png', NULL,4,2),
    (NULL, 'poutre.png', NULL,4,2),
    (NULL, 'telephone.png', NULL,1,3),
    (NULL, 'clef.png', NULL,2,3),
    (NULL, 'dring.png', NULL,2,3),
    (NULL, 'radiateur.png', NULL,3,3),
    (NULL, 'couloir.png', NULL,3,3),
    (NULL, 'plancuisine.png', NULL,4,3),
    (NULL, 'hauteur.png', NULL,4,3);

COMMIT;