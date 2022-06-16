import axios, { AxiosInstance } from 'axios';
import { environment } from '../environments/environment';

export abstract class BaseAxiosService {
	protected _http: AxiosInstance = axios.create();
	protected defaultOptions = {};

	constructor() {
		this._initHttp();
	}

	protected _initHttp() {
		this.defaultOptions = {
			headers: {
				Authorization: this._getToken(),
			},
		};
		const baseURL: String = environment.api.www.baseUrl;
		const baseEndpoint: String = environment.api.www.baseEndpoint;
		this._http = axios.create({
			baseURL: `${baseURL}/${baseEndpoint}/`,
		});
	}

	protected _setAuthorization() {
		this.defaultOptions = {
			headers: {
				Authorization: this._getToken(),
			},
		};
	}

	protected _getToken(): string {
		return `${
			typeof localStorage !== 'undefined' &&
			typeof localStorage !== null &&
			localStorage.getItem('token')
				? localStorage.getItem('token')
				: null
		}`;
	}

	protected _get(path: string, options = {}) {
		this._setAuthorization();
		return this._http.get(path, { ...this.defaultOptions, ...options });
	}

	protected _post(url: string, data: any, options = {}) {
		this._setAuthorization();
		return this._http.post(url, data, {
			...this.defaultOptions,
			...options,
		});
	}

	protected _delete(url: string, options = {}) {
		this._setAuthorization();
		return this._http.delete(url, { ...this.defaultOptions, ...options });
	}

	protected _put(url: string, data: any, options = {}) {
		this._setAuthorization();
		return this._http.put(url, data, {
			...this.defaultOptions,
			...options,
		});
	}

	protected _patch(url: string, data: any, options = {}) {
		this._setAuthorization();
		return this._http.patch(url, data, {
			...this.defaultOptions,
			...options,
		});
	}
}
