SELECT
	film_id,
	title
FROM
	film
WHERE
	film_id IN (1, 2, 3)i;

-- The above query is equivalent to the following
SELECT
	film_id,
	title
FROM
	film
WHERE
	film_id = 1
	OR film_id = 2
	OR film_id = 3;
