import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

interface Props {
  products: Product[];
}


export const ProductGrid = ( { products }: Props ) => {
  return (
    <div className="ml-3 mr-3 grid grid-cols-2 sm:grid-cols-3 gap-10 mb-7 ">

      {
        products.map( product => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ) )
      }

    </div>
  );
};