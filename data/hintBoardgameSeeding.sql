BEGIN;

INSERT INTO category(label) VALUES
    ('Pose de bombes'),
    ('Retrait éboulements'),
    ('Annihiler Horreur'),
    ('Sortie de spéléo');

INSERT INTO hint(content, picture, sound, category_id) VALUES
    ('laremp jdhdq jdqshdukshdukh', NULL, NULL, 1),
    ('jdqhkdhskjdhjq dqlhdsqhdh', 'pic1.jpg', NULL, 1),
    ('encore un indice de dingue', 'pic2.jpg', 'son1.mp4', 1),
    ('tu sais pas quoi?', NULL, 'son2.mp4', 2),
    ('ca va ten boucher un coin', NULL, NULL, 2),
    ('coucou toi ca va?', 'pic3.jpg', NULL, 2),
    ('nouvel indice c est fou', NULL, 'son3.mp4', 3 ),
    ('trop forte cette info', 'pic4.jpg', 'son4.mp4', 3),
    ('ben c est caché', NULL, NULL, 3),
    ('toujours en gris', 'pic5.jpg', NULL, 4),
    ('voila c est bien ici', NULL, 'son5.mp4', 4);

COMMIT;