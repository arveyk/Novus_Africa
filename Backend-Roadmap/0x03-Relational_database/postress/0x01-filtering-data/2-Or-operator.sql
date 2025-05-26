-- OR Operator

SELECT false OR false AS result;

SELECT false OR null AS result;

SELECT
	title,
	rental_rate
FROM
	film
WHERE
	rental_rate = 0.99 OR
	rental_rate = 2.99;
