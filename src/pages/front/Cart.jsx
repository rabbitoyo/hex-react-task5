import { Link } from 'react-router';

const Cart = () => {
    return (
        <>
            <section className="cart py-10 py-sm-15">
                <div className="container">
                    <h2 className="fs-6 fs-lg-4 fw-bold text-dark text-center text-lg-start mt-12 mt-sm-17 mb-6 mb-sm-12">
                        您的購物清單
                    </h2>
                    <div className="bg-white rounded-4 border py-15 text-center">
                        <h3 className="text-muted fs-6 fw-semibold mb-2">購物清單目前是空的</h3>
                        <p className="text-muted mb-6">去探索我們的精選系列，找尋您的下一段旅程。</p>
                        <Link to="/product" className="btn btn-primary px-10 py-3">
                            立即預訂
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Cart;
