import React, { useEffect, useState, useContext } from 'react';

import useForm from './useForm';
import validate from './validate';
import { SurveyContext } from './SurveyContext';
import questionsData from './questions';
import './file.css';
const SurveyForm = () => {
    const { surveyData, setSurveyData } = useContext(SurveyContext);
    const [extraQuestions, setExtraQuestions] = useState([]);
    
    const initialState = {
        name: '',
        email: '',
        topic: '',
        favLanguage: '',
        yearsExperience: '',
        exerciseFrequency: '',
        dietPreference: '',
        highestQualification: '',
        fieldOfStudy: '',
        feedback: '',
    };
 
    // I cant find any external api for fetch question. if you have you can use this code insted of below code
    // const submit = () => {
        //           alert(
        //     `Form Submitted Successfully!\n\n` +
        //     `Name: ${values.name}\n` +
        //     `Email: ${values.email}\n` +
        //     `Survey Topic: ${values.topic}\n` +
        //     (values.topic === 'Technology' ? `Favorite Programming Language: ${values.favLanguage}\n` : '') +
        //     (values.topic === 'Technology' ? `Years of Experience: ${values.yearsExperience}\n` : '') +
        //     (values.topic === 'Health' ? `Exercise Frequency: ${values.exerciseFrequency}\n` : '') +
        //     (values.topic === 'Health' ? `Diet Preference: ${values.dietPreference}\n` : '') +
        //     (values.topic === 'Education' ? `Highest Qualification: ${values.highestQualification}\n` : '') +
        //     (values.topic === 'Education' ? `Field of Study: ${values.fieldOfStudy}\n` : '') +
        //     `Feedback: ${values.feedback}\n`
        // );
    
    
    //         setSurveyData(values);
             
//         fetchAdditionalQuestions(values.topic);
//     };

//     const fetchAdditionalQuestions = async (topic) => {
//         try {
//             const response = await axios.get(`https://api.example.com/questions?topic=${topic}`);
//             setExtraQuestions(response.data);
//         } catch (error) {
//             console.error('Error fetching additional questions:', error);
//         }
//     };

//     const { values, errors, handleChange, handleSubmit } = useForm(initialState, validate, submit);

//     useEffect(() => {
//         if (values.topic) {
//             fetchAdditionalQuestions(values.topic);
//         }
//     }, [values.topic]);

    const submit = () => {
           alert(
            `Form Submitted Successfully!\n\n` +
            `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Survey Topic: ${values.topic}\n` +
            (values.topic === 'Technology' ? `Favorite Programming Language: ${values.favLanguage}\n` : '') +
            (values.topic === 'Technology' ? `Years of Experience: ${values.yearsExperience}\n` : '') +
            (values.topic === 'Health' ? `Exercise Frequency: ${values.exerciseFrequency}\n` : '') +
            (values.topic === 'Health' ? `Diet Preference: ${values.dietPreference}\n` : '') +
            (values.topic === 'Education' ? `Highest Qualification: ${values.highestQualification}\n` : '') +
            (values.topic === 'Education' ? `Field of Study: ${values.fieldOfStudy}\n` : '') +
            `Feedback: ${values.feedback}\n`
        );
        setSurveyData(values);
    };

    const { values, errors, handleChange, handleSubmit } = useForm(initialState, validate, submit);

    useEffect(() => {
        if (values.topic) {
            const selectedTopic = questionsData.find(topic => topic.name === values.topic);
            if (selectedTopic) {
                setExtraQuestions(selectedTopic.questions);
            }
        }
    }, [values.topic]);
    return (
        <div className="bg-slate-900 min-h-screen flex-row items-center justify-center">
            <h1 className=' lg:text-3xl text-2xl  text-white font-sans font-semibold h-40 lg:h-20 p-10 lg:mx-20  mb-20 text-center'>Advanced Dynamic Form with Complex Conditional Logic, Dynamic
Sections, and Integration with an API
</h1>
            <div className="max-w-lg lg:w-full mx-2 lg:mx-auto md:mx-auto   box p-6  shadow-lg rounded-lg overflow-y-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-400 bg-s text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2">Survey Topic</label>
                        <select
                            name="topic"
                            value={values.topic}
                            onChange={handleChange}
                            className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.topic ? 'border-red-500' : ''}`}
                        >
                            <option value="">Select a topic</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                        </select>
                        {errors.topic && <p className="text-red-500 text-xs italic">{errors.topic}</p>}
                    </div>

                     {extraQuestions.length > 0 && (
                        <div className="mb-4">
                            <h3 className="block text-white text-xl font-bold mb-2">Additional Questions</h3>
                            {extraQuestions.map((question, index) => (
                                <div className="mb-4" key={index}>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">{question.question}</label>
                                    {question.options ? (
                                        <select
                                            name={question.id}
                                            value={values[question.id] || ''}
                                            onChange={handleChange}
                                            className="shadow appearance-none border input rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="">Select an option</option>
                                            {question.options.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            name={question.id}
                                            value={values[question.id] || ''}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded input w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2">Feedback</label>
                        <textarea
                            name="feedback"
                            value={values.feedback}
                            onChange={handleChange}
                            className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.feedback ? 'border-red-500' : ''}`}
                        ></textarea>
                        {errors.feedback && <p className="text-red-500 text-xs italic">{errors.feedback}</p>}
                    </div>

                 

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="gradient w-40 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SurveyForm;
