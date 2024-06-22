import React from 'react';
import SurveyForm from './components/SurveyForm';
import { SurveyProvider } from './components//SurveyContext';

function App() {
    return (
        <SurveyProvider>
            <SurveyForm />
        </SurveyProvider>
    );
}

export default App;
