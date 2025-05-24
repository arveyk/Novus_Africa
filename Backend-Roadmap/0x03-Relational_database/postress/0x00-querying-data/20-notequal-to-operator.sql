SELECT
	first_name,
	last_name
FROM
	customer
WHERE
	first_name LIKE 'Bra%'
	AND last_name <> 'Motley';
