-- NOT BETWEEN statement
SELECT
	customer_id,
	payment_id,
	amount,
	payment_date
FROM
	payment
WHERE
	payment_date BETWEEN '2007-02-15' AND '2007-02-20'
	AND amount > 10
ORDER BY
	payment_date;
