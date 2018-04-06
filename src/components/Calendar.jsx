import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

export default class Calendar extends React.Component {
    render() {
        return(<h1>Horse</h1>);
    }
}