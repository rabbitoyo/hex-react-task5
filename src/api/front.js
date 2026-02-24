import { frontApi } from './auth';

// 取得產品
export const getProductsApi = (page = '') => {
    // 如果有 page 則帶入 query，沒有則空字串
    const url = page ? `products?page=${page}` : `products`;
    return frontApi.get(url);
};

// 取得單一產品
export const getProductDetailApi = (id) => frontApi.get(`product/${id}`);
