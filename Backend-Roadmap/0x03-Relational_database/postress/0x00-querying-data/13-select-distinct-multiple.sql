-- Select Distinct on multiple columns
SELECT
	DISTINCT bcolour, fcolour
FROM
	colours
ORDER BY
	bcolour,
	fcolour;
