import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/Actions';
import styles from './Register.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
