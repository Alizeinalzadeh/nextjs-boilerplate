import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export const handleSuccess = (success: AxiosResponse) => {
	const SUCCESS_ARRAY = [];
	if (success.data.message) {
		SUCCESS_ARRAY.push(success.data.message);
		toast.success(success.data.message);
	} else {
		SUCCESS_ARRAY.push('عملیات موفقیت آمیز!');
		toast.success('عملیات موفقیت آمیز!');
	}
};
