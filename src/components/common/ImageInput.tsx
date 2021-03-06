import { FC, InputHTMLAttributes } from "react";
import classNames from 'classnames';

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  field: string,
  touched?: boolean | null,
  error?: string | null,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ImageInput: FC<ImageInputProps> = ({label, field, onChange, touched=null, error=null, type="text"}: ImageInputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type="file"
        name={field}
        className={classNames("form-control",
          {"is-invalid": touched && error},
          {"is-valid": touched && !error}
        )}
        id={field}
        onChange={onChange}
      />
      {(touched && error) && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default ImageInput;