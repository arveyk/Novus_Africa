SELECT
	first_name,
	LENGTH(first_name) name_length
FROM
	customer
WHERE
	first_name LIKE 'A%'
	AND LENGTH(first_name) BETWEEN 3 AND 5
ORDER BY
	name_length;

