import { useState, useEffect } from 'react';
import { Link } from 'react-router';

// Components
import Header from '../../components/layout/Header';

// Utils
import { getErrorMessage } from '../../utils';

// API
import { getProductsApi } from '../../api/front';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [flightNumber] = useState(() => `ZV${Math.floor(Math.random() * 900) + 100}`);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await getProductsApi();
                setProducts(res.data.products);
            } catch (error) {
                alert(`API 錯誤：${getErrorMessage(error)}!`);
            }
        };
        getProducts();
    }, []);
    return (
        <>
            <Header />
            <section className="popularProducts py-10 py-sm-15">
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-end mb-12">
                        <div className="d-flex flex-column align-items-center align-items-lg-start mb-4 mb-lg-0">
                            <span className="text-primary text-small fw-bold small mb-3">熱門預訂</span>
                            <h3 className="fs-6 fs-lg-4 fw-bold text-dark">行程推薦</h3>
                        </div>
                        <p className="text-description ps-lg-4 py-1 text-center text-lg-start">
                            無數旅人最熱門的選擇。探索旅途誌精選的人氣套票，啟程前往你的下一段故事。
                        </p>
                    </div>

                    <div className="products">
                        <div className="row row-gap-6">
                            {products.map((product) => (
                                <div className="col-3" key={product.id}>
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="card rounded-3 shadow-sm overflow-hidden"
                                    >
                                        {/* Image */}
                                        <img className="card-img-top" src={product.imageUrl} />

                                        {/* Perforated Divider */}
                                        <div className="ticket-divider px-4 py-2 bg-white">
                                            <div className="ticket-hole-l"></div>
                                            <div className="w-100 border-top border-dashed border-1"></div>
                                            <div className="ticket-hole-r"></div>
                                        </div>

                                        {/* Bottom Part: Content */}
                                        <div className="card-body d-flex flex-column gap-3 p-4 pt-1">
                                            <div className="d-flex flex-column justify-content-center align-items-start gap-4 h-100">
                                                <div>
                                                    <p className="text-primary text-small small fw-bold">
                                                        {product.category}
                                                    </p>
                                                    <h3 className="fs-9 fw-bold text-dark">
                                                        {product.title}
                                                    </h3>
                                                </div>
                                                <p className="card-text text-muted small text-truncate-2">
                                                    {product.description}
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center font-montserrat mt-auto w-100">
                                                    <p className="fs-13 text-muted mb-0">
                                                        航班 #ZV{flightNumber}
                                                    </p>
                                                    <p className="fs-10 fw-bold text-dark mb-0">
                                                        ${product.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex" style={{ marginLeft: '10px' }}>
                                                        {[1, 2, 3].map((i) => (
                                                            <div
                                                                key={i}
                                                                className="rounded-circle border border-white overflow-hidden shadow-sm"
                                                                style={{
                                                                    width: '24px',
                                                                    height: '24px',
                                                                    marginLeft: '-10px',
                                                                }}
                                                            >
                                                                <img
                                                                    src={`https://i.pravatar.cc/100?u=${name + i}`}
                                                                    alt="user"
                                                                    className="w-100 h-100"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <span className="small text-muted ms-2">
                                                        已有 12 人預訂
                                                    </span>
                                                </div>
                                                <div
                                                    className="opacity-25"
                                                    style={{ width: '32px', height: '32px' }}
                                                >
                                                    <svg viewBox="0 0 100 100" className="w-100 h-100">
                                                        <rect
                                                            x="0"
                                                            y="0"
                                                            width="10"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                        <rect
                                                            x="15"
                                                            y="0"
                                                            width="5"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                        <rect
                                                            x="25"
                                                            y="0"
                                                            width="15"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                        <rect
                                                            x="45"
                                                            y="0"
                                                            width="10"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                        <rect
                                                            x="60"
                                                            y="0"
                                                            width="20"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                        <rect
                                                            x="85"
                                                            y="0"
                                                            width="15"
                                                            height="100"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;
