-- Main
CREATE TABLE IF NOT EXISTS colours(
	id SERIAL PRIMARY KEY,
	bcolour VARCHAR,
	fcolour VARCHAR
);

INSERT INTO
	colours (bcolour, fcolour)
VALUES
	('red', 'red'),
	('red', 'red'),
	('red', NULL),
	(NULL, 'red'),
	(NULL, NULL),
	('green', 'green'),
	('blue', 'blue'),
	('blue', 'blue');
