import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset(); // Reset form fields
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {isSubmitted && <p className="success-message">Thank you! Your response has been submitted.</p>}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          className={`form-input ${errors.name ? 'error' : ''}`}
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && <span className="error-message">This field is required and must be less than 20 characters</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="text"
          id="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })}
        />
        {errors.email && <span className="error-message">Please enter a valid email.</span>}
      </div>
      <div className="form-group">
        <input type="submit" value="Submit" className="form-submit-btn" />
      </div>
    </form>
  );
}

export default FormComponent;
