import { useCtx } from '../context/UseContext';

const Product = () => {
    const { handleRedirect } = useCtx();
    return <div>
        <h1>Product Page</h1>
        <button onClick={() => handleRedirect('/')}>Go to home page</button>
    </div>
}

export default Product
