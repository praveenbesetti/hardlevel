const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Full Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.topic) {
        errors.topic = 'Survey Topic is required';
    }

    if (values.topic === 'Technology') {
        if (!values.favLanguage) {
            errors.favLanguage = 'Favorite Programming Language is required';
        }
        if (!values.yearsExperience) {
            errors.yearsExperience = 'Years of Experience is required';
        } else if (values.yearsExperience <= 0) {
            errors.yearsExperience = 'Years of Experience must be greater than 0';
        }
    }

    if (values.topic === 'Health') {
        if (!values.exerciseFrequency) {
            errors.exerciseFrequency = 'Exercise Frequency is required';
        }
        if (!values.dietPreference) {
            errors.dietPreference = 'Diet Preference is required';
        }
    }

    if (values.topic === 'Education') {
        if (!values.highestQualification) {
            errors.highestQualification = 'Highest Qualification is required';
        }
        if (!values.fieldOfStudy) {
            errors.fieldOfStudy = 'Field of Study is required';
        }
    }

    if (!values.feedback || values.feedback.length < 5) {
        errors.feedback = 'Feedback is required and must be at least 5 characters';
    }

    return errors;
};

export default validate;