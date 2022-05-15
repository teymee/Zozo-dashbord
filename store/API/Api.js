const ISSERVER = typeof window === "undefined";
let token;
if (!ISSERVER) {
	// Access localStorage
	token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
}

export const API = {
	ADMIN_BASE_URL: "https://smart-park.xyz/api/v1/admin",
	BASE_URL: "https://smart-park.xyz/api/v1",
	MERCHANT_ADMIN_BASE_URL: "https://smart-park.xyz/api/v1/merchant",
	TOKEN: token,
};

export const dateFormat = (timeFormat) => {
	const event = new Date(timeFormat);
	const time = event.toString();

	const totalStringLength = time.length;
	const stringToSlice = time.indexOf("G");
	const finalDate = time.slice(0, stringToSlice);

	return finalDate;
};
