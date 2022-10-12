import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import api from "../api/api";

export interface IProducts {
  product_id: string;
  product_name: string;
  product_category: string;
  product_price: string;
  created_at: string
}

interface IProductProviderProps{
  children: ReactNode;
}

interface IProductContext{
  products: IProducts[]
  addProduct: (newProduct: INewProduct)=>Promise<void>
}

interface INewProduct {
  product_name: string;
  product_category: string;
  product_price: string;
}

const ProductsContext = createContext<IProductContext | null>(null);

export function ProductsProvider({ children }: IProductProviderProps){
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = useCallback(async () => {
    try{
      const {data} = await api.get("/");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, [])

  const addProduct = useCallback(async (newProduct: INewProduct) => {
    try{
      await api.post("/products", newProduct);
      await getProducts();
    } catch (error){
      console.log(error);
    }
  }, [getProducts])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('Sem o provider')
  }

  return context
}