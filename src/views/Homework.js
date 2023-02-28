import React from 'react'
import {useState} from 'react'
import MyDataHelps from '@careevolution/mydatahelps-js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLock, faTasks } from '@fortawesome/free-solid-svg-icons'
import { Card, NavigationBar, Action, Layout, StatusBarBackground, ProjectHeader } from '@careevolution/mydatahelps-ui'
import Greetings from '../components/Greetings'
import SurveyShortStats from '../components/SurveyShortStats'

class Homework extends React.Component {

    constructor(props : any) {
        super(props)
        const today = new Date()
        const opendate = new Date(2022, 2, 2)
        const closedate = new Date(2023, 2, 13)

        // Create the set of strings that will change based on the dates.
        this.state = {}

        if(today < closedate && today >= opendate) {
            this.state = {
                taskHead : 'Open till March 12th',
                taskIcon : faTasks,
                heading : '',
                homeworkOpen : true,
                style : {color:'#000000'}
            }
        }
        else {
            this.state = {
                taskHead : 'Locked, opens on March 2nd',
                taskIcon : faLock,
                heading : ' Your Glucose Tracking Homework will be avaliable from March 2nd to March 12th.',
                homeworkOpen : false,
                style : {color:'#757575'}
            }
        }
    }

    homeworkAction() {
        const today = new Date()
        const opendate = new Date(2022, 2, 2)
        const closedate = new Date(2023, 2, 13)

        if(today < closedate && today >= opendate) {
            MyDataHelps.startSurvey("Glucose Tracking Homework")
        }
    }

    render() {
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
                        {this.state.heading}
                    </div>
                </Card>
            <div style={this.state.style}>
                    <Card>
                        <div style={{
                        margin: '10px 0px 0px 16px'
                        }}><FontAwesomeIcon icon={this.state.taskIcon} /> {this.state.taskHead}</div>
                        <Action
                            title='Glucose Tracking Homework'
                            subtitle='Tap here to start your homework'
                            onClick={this.homeworkAction}
                        />
                        <div style={{
                            margin: '0 0 16px 16px'
                        }}>
                            <SurveyShortStats surveyName='Glucose Tracking Homework'/>
                        </div>
                    </Card>
                </div>
            </Layout>
        )
    }
}

export default Homework
