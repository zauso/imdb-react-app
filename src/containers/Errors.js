import React from 'react'
import { connect } from 'react-redux'
import { deleteError } from '../store/actions/errors';
import { makeStyles } from '@material-ui/core/styles'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: '#f44336',
    margin: theme.spacing(1),
  },
  errors: {
    position: 'fixed',
    zIndex: '999',
    left: '0px',
    bottom: '0px'
  },
  close: {
	  color: '#fff',
	  cursor: 'pointer',
	  fontWeight: 'bold'
	}
}));

function Erros(props){
	const classes = useStyles();
	const {errors, deleteError} = props;
	const action = (
	  <span className={classes.close}>Close</span>
	);
	return(
			<div className={classes.errors}>
			    {
			      errors.errors.map((error)=>{
			          return <SnackbarContent
			          			onClick={()=>(deleteError(error.id))}
			                    action={action}
			                    className={classes.snackbar}
			                    message={error.error.message}
			                  />
			      })
			    }
			</div>
	)
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  }
}
const mapDispatchToProps = dispatch => ({
  deleteError: (id) => dispatch(deleteError(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Erros);
