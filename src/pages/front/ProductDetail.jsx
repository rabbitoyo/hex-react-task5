import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';

// Utils
import { getErrorMessage, formatNumber } from '../../utils';

// API
import { getProductDetailApi } from '../../api/front';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProductDetail = async (id) => {
            try {
                const res = await getProductDetailApi(id);
                setProduct(res.data.product);
            } catch (error) {
                alert(`API 錯誤：${getErrorMessage(error)}!`);
            }
        };
        getProductDetail(id);
    }, [id]);

    return (
        <>
            <section className="productDetail">
                <div className="product-img">
                    <div className="d-flex w-100 h-100">
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="d-flex flex-column justify-content-end w-100 h-100 pb-6 z-1">
                            <div className="container">
                                <span className="text-white-50 text-small fw-bold small mb-3">
                                    {product.category}
                                </span>
                                <h2 className="fs-6 fw-bold text-white">{product.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 py-sm-15">
                    <div className="container">
                        <div className="row g-15">
                            <div className="col-8">
                                <div className="d-flex flex-column gap-15">
                                    <div className="d-block">
                                        <h3 className="fs-8 fw-bold border-bottom pb-2 mb-4">行程簡介</h3>
                                        <p className="text-dark">{product.description}</p>
                                    </div>
                                    <div className="d-block">
                                        <h3 className="fs-8 fw-bold border-bottom pb-2 mb-4">行程內容</h3>
                                        <div
                                            className="text-dark" // 這裡加上 DOMPurify.sanitize()
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(product.content),
                                            }}
                                        ></div>
                                    </div>
                                    <div className="d-block">
                                        <h3 className="fs-8 fw-bold border-bottom pb-2 mb-4">行程景點</h3>
                                        <div className="d-flex gap-4">
                                            {product.imagesUrl &&
                                                product.imagesUrl.map((url, index) => (
                                                    <div className="detail-img img-thumbnail" key={index}>
                                                        <img
                                                            src={url}
                                                            alt={`${product.title} ${index + 1}`}
                                                        />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <h3 className="fs-8 fw-bold border-bottom pb-2 mb-4">費用包含</h3>
                                        <ul className="list-unstyled d-flex flex-column gap-4">
                                            <li className="d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-success">
                                                    check
                                                </i>
                                                往返商務艙機票
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-success">
                                                    check
                                                </i>
                                                全程豪華酒店住宿
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-success">
                                                    check
                                                </i>
                                                飯店自助吧
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="material-symbols-outlined me-2 text-success">
                                                    check
                                                </i>
                                                機場私人接送服務
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="sticky-top bg-white w-100 rounded-4 shadow p-8">
                                    <span className="font-montserrat del">
                                        原價 $ {formatNumber(product.origin_price)}
                                    </span>
                                    <p className="fs-6 fw-bold font-montserrat mb-5">
                                        $ {formatNumber(product.price)}{' '}
                                        <span className="text-muted fs-11 fw-semibold">
                                            / 每{product.unit}
                                        </span>
                                    </p>
                                    <button
                                        type="button"
                                        className="btn btn-primary w-100 py-4 fs-10 fw-bold"
                                    >
                                        立即預訂
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default SingleProduct;
