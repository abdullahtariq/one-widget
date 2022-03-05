const BASEURL = "https://snspk-server.herokuapp.com";  // TODO: Update to process env before pushing


// get api
export const getData = (URL, authKey) => {
	return new Promise((resolve, reject) => {
		fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: authKey,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("error in post api", error);
				reject(error);
			});
	});
};

// add items in inventory
export const postData = (URL, data, authkey) => {
	return new Promise((resolve, reject) => {
		const authKey =
			authkey && sessionStorage.getItem("accessToken")
				? "Bearer " + sessionStorage.getItem("accessToken")
				: "";
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: authKey,
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
};

export var uploadFileService = (file, URL) => {
	return new Promise((resolve, reject) => {
		try {
			const req = new XMLHttpRequest();

			const formData = new FormData();
			//formData.append("uploadfile", data.uploadfile, data.fileName);

			formData.append("file", file);
			//formData.append("uploadfile", data.uploadfile, data.fileName);
			req.onreadystatechange = function () {
				if (this.readyState === 4 && this.status === 200) {
					let response = JSON.parse(this.responseText);
					console.log("----------created ------", response);
					resolve(response);
				}
			};
			req.open("POST", `${URL}`);
			req.send(formData);
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};
