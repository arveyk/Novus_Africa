-- Selecting Distinct items
SELECT
	id,
	bcolour,
	fcolour
FROM
	colours;

SELECT
	DISTINCT bcolour
FROM
	colours
ORDER BY
	bcolour;
