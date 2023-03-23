export const validateNumber = e => {
	const reg = /^[0-9\b-]+$/;
  let preval = e.target.value;
  if (e.target.value === "" || reg.test(e.target.value)) return true;
  else e.target.value = preval.substring(0, preval.length - 1);
};

export const allLetter = e => {
	const reg = /^[A-Za-z ]+$/;
	let preval = e.target.value;
	if (e.target.value === '' || reg.test(e.target.value)) return true;
	else e.target.value = preval.substring(0, preval.length - 1);
};