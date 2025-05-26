SELECT
	title,
	length,
	rental_rate
FROM
	film
WHERE
	length > 180
	AND rental_rate < 1;
