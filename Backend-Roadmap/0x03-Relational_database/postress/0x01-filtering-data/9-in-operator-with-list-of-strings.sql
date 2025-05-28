SELECT
	first_name,
	last_name
FROM
	actor
WHERE
	last_name IN ('Allen', 'Chase', 'Davis')
ORDER BY
	last_name;
