import {AiFillDelete} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'
import { useProducts } from '../../contexts/ProductsContext';
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {timeStyle:'medium', dateStyle:'short'});
const ProductTable = () => {
  const {products} = useProducts();
  console.log(products);
  return (
     <table className="my-4 mx-12">
      <thead>
        <tr >
        <th className='text-start px-2 py-1 border border-gray-400 bg-gray-100 '>Nome</th>
        <th className='text-start px-2 py-1 border border-gray-400 bg-gray-100'>Categoria</th>
        <th className='border border-gray-400 bg-gray-100'>Preço</th>
        <th className='border border-gray-400 bg-gray-100'>Data de Criação</th>
        <th className='border border-gray-400 bg-gray-100'>Ações</th>
      </tr>
      </thead>
      <tbody>
        {products.map((product)=>(
          <tr key={product.product_id}>
            <td className='border border-gray-400 px-2 py-1'>{product.product_name}</td>
            <td className='border border-gray-400 px-2 py-1'>{product.product_category}</td>
            <td className='border border-gray-400 px-2 py-1'>{product.product_price}</td>
            <td className='border border-gray-400 px-2 py-1'>{dateFormatter.format(new Date(product.created_at))}</td>
              <td className='flex justify-evenly border border-gray-400 px-2 py-1'>
                <button>
                  <AiFillDelete size={25}/>
                </button>
                <button>
                  <HiPencil size={25}/>
                </button>
              </td>
          </tr>
        ))}
      </tbody>
     </table>
    );
}
 
export default ProductTable;