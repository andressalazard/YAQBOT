import React from 'react';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import styles from './ProductPreview.module.css';
import Icon from '../../atoms/Icon';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../features/product/productSlice';
import { useToast } from '../../context/ToastContext';
import { useNavigate } from 'react-router-dom';

export interface ProductPreviewProps {
  information: {
    id: string;
    category: string;
    name: string;
    price: number;
    rate?: number;
    image: string[];
  };
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ information }) => {
  // Leer del estado
  //  const cartItems = useSelector((state: any) => state.productCart.products);
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const navigate = useNavigate();

  return (
    <div className={styles.product_preview}>
      <section className={styles.product_pic}>
        <Image className={styles.pic} src={information.image[0]} alt={'product image'} />
        <span className={styles.product_tag}>{information.category}</span>
      </section>

      <section className={styles.product_description}>
        <h1 className={styles.title}>{information.name}</h1>
        <div className={styles.details}>
          <div className={styles.product_rate}>
            <Icon className={`material-icons ${styles.star}`} feature="star" />
            <span className={styles.rate}>{information.rate} (1.2K Reviews)</span>
          </div>
          <span className={styles.price}>${information.price}</span>
        </div>
      </section>
      <section className={styles.product_buttons}>
        <Button
          onClick={() => {
            //console.log('ADD PRODUCT');
            //console.log(information);
            // Agregar producto
            dispatch(addProduct(information));
            addToast('Producto agregado al carrito', 'success');
          }}
          className={`${styles.button} ${styles.add_cart}`}
          label="Agregar"
        />
        <Button
          onClick={() => {
            dispatch(addProduct(information));
            addToast('Producto agregado al carrito', 'success');
            navigate('/cart');
          }}
          className={`${styles.button} ${styles.buy_now}`}
          label="Comprar ahora"
        />
      </section>
    </div>
  );
};

export default ProductPreview;
