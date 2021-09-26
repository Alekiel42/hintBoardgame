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
    ('Au dessus des palmiers, le chaos rougeoyant s''effondre', 'batte.png', NULL,1,1),
    ( 'Chaque seconde compte', 'rectangle.png', NULL,2,1),
    (NULL, 'zombieterre.png', NULL,2,1),
    (NULL, 'zombie.png', NULL,3,1),
    (NULL, 'plante.png', 'z1.mp3',3,1),
    ('Que peux-tu faire en si peu de temps ? Fuir !', '3d.png', NULL,4,1),
    ('Dans la boîte de Schrödinger, ils sont à la fois morts et vivants', NULL, NULL, 1,1),
    ('Kallax', NULL, NULL, 2,1),
    ('Au pied du triangle de lumière', NULL,NULL,3,1),
    ('Tu n''y dors pas, tu n''y cuisine pas', NULL, 'z2.mp3', 4,1),
    ('L''avenir de l''humanité est aux mains des enfants', NULL, NULL, 1,1),
    (NULL, 'cthulhu.png', NULL,1,2),
    (NULL, 'jailu.png', NULL,1,2),
    ('Ca se passe toujours mal, toujours', 'robot.png', NULL,2,2),
    (NULL, 'dunwich.png', NULL,2,2),
    ('Ecrit par Amour-Artisanat', 'livre.png', NULL,3,2),
    (NULL, 'velo.png', NULL,3,2),
    (NULL, 'etagere.png', NULL,4,2),
    (NULL, 'poutre.png', 'ct2.mp3',4,2),
    ('Il était une fois une petite ville horrible', NULL, NULL, 1,2),
    ('Tu vois Port Alberni la nuit ? Pareil', NULL, NULL, 2,2),
    ('C''est abominable', NULL, NULL, 3,2),
    ('Son nom est imprononçable en anglais', NULL, NULL, 4,2),
    ('A côté du vélo', NULL, 'ct1.mp3', 1,2),
    ('Froid => deux pas devant => A gauche', NULL, NULL, 2,2),
    (NULL,NULL,'ct3.mp3', 3,2),
    (NULL, 'telephone.png', NULL,1,3),
    (NULL, 'clef.png', NULL,2,3),
    (NULL, 'dring.png', NULL,2,3),
    ('Franchement, on l''utilise peu', 'radiateur.png', NULL,3,3),
    ('Tu as remarqué : on a peu de choses blanches', 'couloir.png', NULL,3,3),
    (NULL, 'plancuisine.png', NULL,4,3),
    ('driiiiiiing', NULL, NULL, 1, 3), 
    ('Tu entres et première à gauche', NULL, NULL, 2, 3),
    ('Tu vois l''ancêtre du smartphone ? Ben ça y ressemble', NULL, NULL, 3,3),
    ('Appuie sur la clé', NULL, NULL, 4,3),
    ('Pendant longtemps on a eu des fils à la place', NULL, NULL, 1,3),
    ('Tu décideras de l''ouvrir ou pas', 'hauteur.png', NULL,4,3);

COMMIT;