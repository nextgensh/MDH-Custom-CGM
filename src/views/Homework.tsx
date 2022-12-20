import React from 'react'
import {useState} from 'react'
import MyDataHelps from '@careevolution/mydatahelps-js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Card, NavigationBar, Action, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'
import Greetings from '../components/Greetings'
import SurveyShortStats from '../components/SurveyShortStats'

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
                    <Greetings />
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
                <div style={{
                    margin: '0 0 16px 16px'
                }}>
                    <SurveyShortStats surveyName='Glucose Tracking Homework'/>
                </div>
            </Card>
        </Layout>
    )
}
