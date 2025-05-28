SELECT
	film_id,
	title
FROM
	film
WHERE
	film_id NOT IN (1, 2, 3)
ORDER BY
	film_id;

-- Equivalent to:
SELECT
	film_id,
	title
FROM
	film
WHERE
	film_id <> 1
	AND film_id <> 2
	AND film_id <> 3
ORDER BY
	film_id;
