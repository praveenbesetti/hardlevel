import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, submit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            submit();
            setValues(initialValues);
        }

        setIsSubmitting(false);
    }, [errors]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;