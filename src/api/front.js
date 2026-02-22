import { frontApi } from './auth';

// 取得產品
export const getProductsApi = () => frontApi.get(`products`);

// 取得單一產品
export const getProductDetailApi = (id) => frontApi.get(`product/${id}`);
