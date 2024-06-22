import React, { createContext, useState } from 'react';

const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
    const [surveyData, setSurveyData] = useState({});

    return (
        <SurveyContext.Provider value={{ surveyData, setSurveyData }}>
            {children}
        </SurveyContext.Provider>
    );
};

export { SurveyContext, SurveyProvider };
