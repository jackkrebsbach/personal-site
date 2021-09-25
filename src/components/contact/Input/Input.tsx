import { FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  name: string;
  value: string;
  setValue: (e: any) => any;
  textarea?: boolean;
}

export const Input: FC<Props> = ({ name, value, setValue, textarea }) => {
  if (textarea) {
    return (
      <div className={styles.container}>
        <label htmlFor={name}>{name}</label>
        <textarea
          name={name}
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        id="name"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
