import axios from 'axios';
import _ from 'lodash';

const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
});

export { http };
