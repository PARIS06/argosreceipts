import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



// getReceipts() {
//     axios.get('')
// }


const ReceiptsList= props => {  
  // const [receipts, setReceipts] = useState([]);
    
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Default Receipt</Title>
      <Typography component="p" variant="h4">
        10% Conversion
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} style={{marginTop: "2em"}}>
        Feedback Score: 4.7
      </Typography>
      <div>
        <Button component={Link} to="/merchants/create-receipt" color="primary">
          Edit Receipt
        </Button>
      </div>
    </React.Fragment>
  );
}

export default ReceiptsList;