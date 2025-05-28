SELECT
	payment_id,
	amount
FROM
	payment
WHERE
	payment_id BETWEEN 17503 AND 17505
ORDER BY
	payment_id;
