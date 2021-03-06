import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';

const styles = theme => ({

    formControl: {
        margin: theme.spacing.unit,
    }
});

const DatePicker = props => {
    const { classes } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{props.title}</InputLabel>
            <Input name={props.name} value={props.value}
                   onChange={props.handleChange} type={props.type} />
        </FormControl>
    );
}

DatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);
