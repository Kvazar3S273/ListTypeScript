import Navbar from "../Navbar";
import { useDispatch } from 'react-redux';
import { GetProdlist } from '../../actions/getproducts';
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ProductList: React.FC = () => {
    var dispatch = useDispatch();
    dispatch(GetProdlist());
    const { products } = useTypedSelector(state => state.prod);
    return (
        <>
            <Navbar />
            <div className="col-md-10 mx-auto">
                <table className="table table-primary table-striped mt-3">
                    <thead className="table-secondary">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Назва</th>
                            <th scope="col">Опис</th>
                            <th scope="col">Ціна</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return <tr>
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>{product.description}</td>                  
                              <td>{product.price}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default ProductList;