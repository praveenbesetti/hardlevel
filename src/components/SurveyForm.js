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
            <h1 className=' text-3xl  text-gray-400 font-sans font-semibold h-40 lg:h-20 p-10 lg:mx-20  mb-20 text-center'>Advanced Dynamic Form with Complex Conditional Logic, Dynamic
Sections, and Integration with an API
</h1>
            <div className="max-w-lg w-full box p-6 mx-auto shadow-lg rounded-lg overflow-y-auto">
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

                    {values.topic === 'Technology' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Favorite Programming Language</label>
                                <select
                                    name="favLanguage"
                                    value={values.favLanguage}
                                    onChange={handleChange}
                                    className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.favLanguage ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select a language</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="Python">Python</option>
                                    <option value="Java">Java</option>
                                    <option value="C#">C#</option>
                                </select>
                                {errors.favLanguage && <p className="text-red-500 text-xs italic">{errors.favLanguage}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Years of Experience</label>
                                <input
                                    type="number"
                                    name="yearsExperience"
                                    value={values.yearsExperience}
                                    onChange={handleChange}
                                    className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.yearsExperience ? 'border-red-500' : ''}`}
                                />
                                {errors.yearsExperience && <p className="text-red-500 text-xs italic">{errors.yearsExperience}</p>}
                            </div>
                        </>
                    )}

                    {values.topic === 'Health' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Exercise Frequency</label>
                                <select
                                    name="exerciseFrequency"
                                    value={values.exerciseFrequency}
                                    onChange={handleChange}
                                    className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.exerciseFrequency ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select frequency</option>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Rarely">Rarely</option>
                                </select>
                                {errors.exerciseFrequency && <p className="text-red-500 text-xs italic">{errors.exerciseFrequency}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2">Diet Preference</label>
                                <select
                                    name="dietPreference"
                                    value={values.dietPreference}
                                    onChange={handleChange}
                                    className={`shadow appearance-none  input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.dietPreference ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select preference</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                                </select>
                                {errors.dietPreference && <p className="text-red-500 text-xs italic">{errors.dietPreference}</p>}
                            </div>
                        </>
                    )}

                    {values.topic === 'Education' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Highest Qualification</label>
                                <select
                                    name="highestQualification"
                                    value={values.highestQualification}
                                    onChange={handleChange}
                                    className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.highestQualification ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select qualification</option>
                                    <option value="High School">High School</option>
                                    <option value="Bachelor's">Bachelor's</option>
                                    <option value="Master's">Master's</option>
                                    <option value="PhD">PhD</option>
                                </select>
                                {errors.highestQualification && <p className="text-red-500 text-xs italic">{errors.highestQualification}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Field of Study</label>
                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={values.fieldOfStudy}
                                    onChange={handleChange}
                                    className={`shadow appearance-none input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fieldOfStudy ? 'border-red-500' : ''}`}
                                />
                                {errors.fieldOfStudy && <p className="text-red-500 text-xs italic">{errors.fieldOfStudy}</p>}
                            </div>
                        </>
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
