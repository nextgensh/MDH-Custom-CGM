import React from 'react'
import MyDataHelps from '@careevolution/mydatahelps-js'
import { Card, NavigationBar, Action, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'

export default function() {
    function homeworkAction() {
        MyDataHelps.startSurvey("Glucose Tracking Homework")
    }

    return (
        <Layout>
            <StatusBarBackground />
            <ProjectHeader />
            <Card>
                <div
                    style={{
                        margin: '16px'
                    }}>
                    Your glucose tracking homework will be avaliable from December, 20th to December 30th.
                    You can fill this up multiple times during this period.
                </div>
            </Card>
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
