import React from 'react'
import MyDataHelps from '@careevolution/mydatahelps-js'
import { Card, NavigationBar, Action, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'

export default function() {
    function homeworkAction() {
        /*
        MyDataHelps.getParticipantInfo().then((result) => {
            let linkIdentifier = result.linkIdentifier
            let surveyURL = 'https://mydatahelps.org/mydatahelps/'+linkIdentifier+'/surveylink/?surveyName=Food%20Survey'

            window.location.href = surveyURL
        })
        */

        // Open a particulat survey.
        MyDataHelps.startSurvey("Mealinfo")
    }

    return (
        <Layout>
            <StatusBarBackground />
            <ProjectHeader />
            <Card>
                <Action 
                    title='Glucose Tracking Homework'
                    subtitle='Tap here to start your homework'
                    onClick={homeworkAction}
                />
            </Card>
        </Layout>
    )
}
