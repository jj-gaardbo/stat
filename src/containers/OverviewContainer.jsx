import React from 'react'
import {withStyles} from "material-ui/styles/index";
import Calendar from "../components/Calendar.jsx";

const styles = theme => ({

});

class OverviewContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={"content"}>

                <Calendar />

            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(OverviewContainer)
