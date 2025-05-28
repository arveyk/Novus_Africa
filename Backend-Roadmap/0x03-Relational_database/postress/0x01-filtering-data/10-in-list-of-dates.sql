SELECT
	payment_id,
	amount,
	payment_date
FROM
	payment
WHERE
	payment_date::date IN ('2007-02-15', '2007-02-16');
