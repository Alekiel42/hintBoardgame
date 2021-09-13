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
    ('laremp jdhdq jdqshdukshdukh', NULL, NULL, 1, 1),
    ('jdqhkdhskjdhjq dqlhdsqhdh', 'pic1.jpg', NULL, 1, 2),
    ('encore un indice de dingue', 'pic2.jpg', 'son1.mp4', 1, 1),
    ('tu sais pas quoi?', NULL, 'son2.mp4', 2, 1),
    ('ca va ten boucher un coin', NULL, NULL, 2, 3),
    ('coucou toi ca va?', 'pic3.jpg', NULL, 2, 3),
    ('nouvel indice c est fou', NULL, 'son3.mp4', 3, 2),
    ('trop forte cette info', 'pic4.jpg', 'son4.mp4', 3, 1),
    ('ben c est caché', NULL, NULL, 3, 1),
    ('toujours en gris', 'pic5.jpg', NULL, 4, 3),
    ('voila c est bien ici', NULL, 'son5.mp4', 4, 3);

COMMIT;