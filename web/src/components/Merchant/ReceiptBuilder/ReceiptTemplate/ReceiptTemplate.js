import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Input from '@material-ui/core/Input';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// import styles from './Invoice.module.scss'

// import LineItems from './LineItems'
import Header from '../../../Home/Header/';

// import uuidv4 from 'uuid/v4'




const ReceiptTemplate = props => {

    const columns = [
        { id: 'name', label: 'Item Number', minWidth: 170 },
        { id: 'code', label: 'Item\u00a0Name', minWidth: 100 },
        {
          id: 'population',
          label: 'Category',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'size',
          label: 'Qty',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'density',
          label: 'Price',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toFixed(2),
        },
        {
            id: 'density',
            label: 'Total',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toFixed(2),
          },
      ];
      
      function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
      }
      
      const rows = [
        createData('1', 'UPUP ADHESIV', 'HEALTH-BEAUTY', 2),
        createData('2', 'SAMSUNG', 'ELECTRONICS', 2),
        createData('3', 'SONY', 'ELECTRONICS', 1),
        createData('4', 'US', 'FURNITURE', 1),
        createData('5', 'CA', "MEN'S APPAREL", 2),
        createData('6', 'DIAPER BAG', 'BABY', 4),
        createData('7', 'RUBBER DUCK', 'BABY', 3),
        createData('8', 'IE', 'OFFICE', 3),
        createData('9', 'MX', 'OFFICE', 2),
        createData('10', 'JP', 'KITCHEN', 1),
        createData('11', 'FR', 'KITCHEN', 1),
        createData('12', 'GB', 'OUTDOORS', 5),
        createData('13', 'RU', 'OUTDOORS', 2),
        createData('14', 'NG', 'OUTDOORS', 1),
        createData('15', 'BR', 'PETS', 1),
      ];

//   locale = 'en-US'
//   currency = 'USD'
  // const [currency, setCurrency] = useState('USD')
  // const [locale, setLocale] = useState('en-US')
  // const [taxRate, setTaxRate] = useState(0.00)
  // const [lineItems, setLineItems] = useState([
  //   {
  //     id: 'initial',      // react-beautiful-dnd unique key
  //     name: '',
  //     description: '',
  //     quantity: 0,
  //     price: 0.00,
  //   },
  // ])

  // useEffect(() => {

  // })
  


  // const handleFocusSelect = (event) => {
  //   event.target.select()
  // }

  // const handlePayButtonClick = () => {
  //   alert('Not implemented')
  // }

  //  const formatCurrency = (amount) => {
  //   return (new Intl.NumberFormat(locale, {
  //     style: 'currency',
  //     currency: currency,
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2
  //   }).format(amount))
  // }

  // const calcTaxAmount = (c) => {
  //   return c * (taxRate / 100)
  // }

  // const calcLineItemsTotal = () => {
  //   return lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
  // }

  // const calcTaxTotal = () => {
  //   return calcLineItemsTotal() * (taxRate / 100)
  // }

  // const calcGrandTotal = () => {
  //   return calcLineItemsTotal() + calcTaxTotal()
  // }


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
     },
     mainPaper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        maxWidth: "50%"
      },
      totalsPaper: {
        padding: theme.spacing(3),
      },
      logo: {
          margin: `0 auto`
      },
      container: {
        maxHeight: 440,
      },
      totals: {
          gridColumn: 6/12
      },
      header: {
          backgroundColor: theme.palette.primary.main
      }
 }))
    const classes = useStyles()
    const theme = useTheme()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
    const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
            current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

//  const handleChangePage = (event, newPage) => {
//    setPage(newPage);
//  };

//  const handleChangeRowsPerPage = (event) => {
//    setRowsPerPage(+event.target.value);
//    setPage(0);
//  };
 


    return (
            <Grid container direction="column">
                <Header className={classes.header} />
                    <Grid item container justify="center">
                        <Paper className={classes.mainPaper} >
                            <Grid item container xs={12} justify="center">
                                {/* <img style={{marginTop: "2em"}}  className={classes.logo} src="https://via.placeholder.com/150x50.png?text=logo" alt="Logo" /> */}
                                <input 
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    ref={imageUploader}
                                    style={{
                                    display: "none"
                                    }}
                                />
                                 <div
                                    style={{
                                    height: "50%",
                                    width: "50%",
                                    border: "1px dashed black",
                                    cursor: "pointer"
                                    }}
                                    onClick={() => imageUploader.current.click()}
                                    >
                                    <img
                                    ref={uploadedImage}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    />
                                </div>
                            </Grid>
                            <Grid item container direction="column" alignItems="center">
                                    <Grid item>
                                        <Typography style={{marginTop: "2em"}} > 1 Mystic View Road</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{marginTop: ".5em"}} >Everett, MA 02149</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{marginTop: ".5em"}} >617-420-0000</Typography>
                                    </Grid>  
                                </Grid>   
                            <Grid item>
                                <Paper className={classes.root} style={{marginTop: "2em"}}>
                                    <TableContainer className={classes.container}>
                                        <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                                >
                                                {column.label}
                                                </TableCell>
                                            ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                    );
                                                })}
                                                </TableRow>
                                            );
                                            })}
                                        </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                            <Grid item container>
                                <Grid item container direction="row" justify="flex-end">
                                    <Paper style={{marginTop: "2em"}} className={classes.totalsPaper}>
                                        <Grid item container direction="row">
                                            <Typography style={{marginTop: "2em"}}>Subtotal:</Typography>
                                            <Typography style={{marginTop: "2em", marginLeft:"3em"}}>Subtotal</Typography>
                                        </Grid>
                                        
                                        <Typography style={{marginTop: "2em"}}>Subtotal</Typography>
                                        <Typography style={{marginTop: "2em"}}>Subtotal</Typography>
                                        <Typography style={{marginTop: "2em"}}>Subtotal</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            </Paper>
                    </Grid>
            </Grid>
    )
   
  

}

export default ReceiptTemplate;

