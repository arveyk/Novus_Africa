-- Display null first

SELECT
	num
FROM
	sort_demo
ORDER BY
	num NULLS FIRST;

-- Display null last

SELECT
	num
FROM
	sort_demo
ORDER BY
	num NULLS LAST;

-- 	
SELECT
	num
FROM
	sort_demo
ORDER BY
	num DESC NULLS LAST;
