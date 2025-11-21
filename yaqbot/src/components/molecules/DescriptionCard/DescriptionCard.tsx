import React from 'react';
import styles from './DescriptionCard.module.css';

interface DescriptionCardProp {
  label: string;
  value: string;
  isblocked?: boolean;
  submitChange?: (value: string) => void;
}

const DescriptionCard: React.FC<DescriptionCardProp> = ({
  label,
  value,
  isblocked = false,
  submitChange,
}) => {
  const [fieldValue, setFieldValue] = React.useState<string>(value);
  const [isEdited, setIsEdited] = React.useState<boolean>(false);
  const toggleEdit = () => {
    setIsEdited(!isEdited);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value.toUpperCase());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('there you go!');
      if (submitChange) {
        submitChange(fieldValue);
      }
      toggleEdit();
    }
  };

  return (
    <div className={styles.description}>
      <h1>{label}</h1>
      {isblocked ? (
        <p>{fieldValue}</p>
      ) : (
        <div className={styles.value_field}>
          {isEdited === true ? (
            <input
              type="text"
              className={styles.edit_input}
              defaultValue={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p>{fieldValue}</p>
          )}

          <span
            className={`material-symbols-outlined ${isEdited ? styles.icon_edited : styles.icon}`}
            onClick={() => {
              toggleEdit();
            }}
          >
            edit
          </span>
        </div>
      )}
    </div>
  );
};

export default DescriptionCard;
