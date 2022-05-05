export const API = {
	ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
	BASE_URL: "http://smart-park.xyz/api/v1",
	MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
	TOKEN:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImFjY291bnRfdHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjQ3NTU3MjM3LCJleHAiOjE2NDc1NjQ0Mzd9.6FEDmVDucC6iiRM4LaYWco5suG8J_QLx9rgqnrVr89E",
};

export const dateFormat = (timeFormat) => {
	const event = new Date(timeFormat);
	const time = event.toString();

	const totalStringLength = time.length;
	const stringToSlice = time.indexOf("G");
	const finalDate = time.slice(0, stringToSlice);
	console.log(totalStringLength)
	return finalDate;
};
