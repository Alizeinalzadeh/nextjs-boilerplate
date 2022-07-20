import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const handleErrors = (error: AxiosError) => {
	const ERROR_ARRAY: string[] = [];
	if (error.response) {
		if (error.message) {
			ERROR_ARRAY.push(error.message);
			toast.error(error.message);
		}
	} else {
		ERROR_ARRAY.push('خطای غیر منتظره');
		toast.error('خطای غیر منتظره');
	}

	return ERROR_ARRAY;
};
