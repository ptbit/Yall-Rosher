import { useState } from 'react';
import styles from './CartSubmit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, useMakeOrderMutation } from '../state/item';
import Modal from '../utils/Modal';

export default function CartSubmitForm() {
  const [formData, setFormData] = useState({});
  const { cartItems, cartPrice } = useSelector((state) => state.itemSlice);
  const [makeOrder] = useMakeOrderMutation();
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpened(true);
  };

  const onProceed = async () => {
    const obj = {
      ...formData,
      items: cartItems.map((item) => ({
        variant_of_item: item.item.id,
        quantity: 1,
      })),
    };

    makeOrder(obj)
      .unwrap()
      .then(() => {
        setFormData({});
        dispatch(clearCart());
      })
      .catch(console.log);
  };

  return (
    <>
      {modalOpened && (
        <Modal
          title="Complete a purchase?"
          body={`Total price is: ${cartItems.reduce(
            (acc, item) => acc + +item.price,
            0,
          )} UAH. This action is irreversable`}
          onProceed={onProceed}
          onClose={() => setModalOpened(false)}
        />
      )}
      <form onSubmit={handleSubmit} className={styles['cart-submit']}>
        <div>
          <label htmlFor="address">Адреса проживання: </label>
          <input
            onChange={handleInputChange}
            required
            id="address"
            name="address"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="postal_code">Поштовий індекс: </label>
          <input
            onChange={handleInputChange}
            required
            id="postal_code"
            name="postal_code"
            type="number"
            step="1"
          />
        </div>
        <div>
          <label htmlFor="city">Місто: </label>
          <input
            onChange={handleInputChange}
            required
            id="city"
            name="city"
            type="text"
          />
        </div>
        <div>
          <button>Оформити замовлення</button>
        </div>
      </form>
    </>
  );
}
