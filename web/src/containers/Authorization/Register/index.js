// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as Actions from '../../../store/Actions';
// import withAuth from '../../../hoc/WithAuth';
// import Input from '../../../components/UI/FormBoxes/Input/Input';
// import SingleModuleButton from '../../../components/UI/Buttons/SingleModuleButton';

// import RegisterBox from '../../../components/Authorization/Register';

// class Register extends Component {
//    state = {
//       controls: {
//          firstName: {
//             elementType: 'input',
//             elementConfig: {
//                 type: 'text',
//                 placeholder: 'Enter your first name'
//             },
//             value: '',
//             validation: {
//                 required: true,
//                 minLength: 5,
//                 maxLength: 255
//             },
//             valid: false,
//             touched: false
//         },
//         lastName: {
//             elementType: 'input',
//             elementConfig: {
//                type: 'text',
//                placeholder: 'Enter your last name'
//             },
//             value: '',
//             validation: {
//                required: true,
//                minLength: 5,
//                maxLength: 255
//             },
//             valid: false,
//             touched: false
//          },
//          email: {
//             elementType: 'input',
//             elementConfig: {
//                type: 'email',
//                placeholder: 'Enter your email address'
//             },
//             value: '',
//             validation: {
//                required: true,
//                isEmail: true
//             },
//             valid: false,
//             touched: false
//          },
//          password: {
//             elementType: 'input',
//             elementConfig: {
//                type: 'password',
//                placeholder: 'Enter your password'
//             },
//             value: '',
//             validation: {
//                required: true,
//                minLength: 6
//             },
//             valid: false,
//             touched: false
//          },
//       },
//       loading: false,
//       error: null
//    };


//   checkValidation(value, rules) {
//       let isValid = true;
//       if (rules.required) {
//           isValid = value.trim() !=='' && isValid;
//       }
//       if (rules.minLength) {
//           isValid = value.length >= rules.minLength && isValid
//       }
//       if (rules.maxLength) {
//           isValid = value.length <= rules.maxLength && isValid
//       }
//       if (rules.isEmail) {
//          const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//          isValid = pattern.test(value) && isValid
//       }
//      if (rules.isNumeric) {
//          const pattern = /^\d+$/;
//          isValid = pattern.test(value) && isValid
//       }
//       return isValid;
//   }

//   inputChangedHandler = (event, controlName) => {
//       const updatedControls = {
//          ...this.state.controls,
//          [controlName]: {
//             ...this.state.controls[controlName],
//             value: event.target.value,
//             valid: this.checkValidation(event.target.value, this.state.controls[controlName].validation),
//             touched: true
//          }
//       };
//       this.setState({controls: updatedControls});
//   }

//    render() {
//       const formElementsArray = []
//       for (let key in this.state.controls) {
//           formElementsArray.push({
//               id: key,
//               config: this.state.controls[key]
//           });
//       }

//       const form = formElementsArray.map(formElement => (
//          <Input
//             key={formElement.id}
//             elementType={formElement.config.elementType}
//             elementConfig={formElement.config.elementConfig}
//             value={formElement.config.value} 
//             changed={(event) => this.inputChangedHandler(event, formElement.id)}
//             invalid={!formElement.config.valid}
//             touched={formElement.config.touched}
//          />
//       ));
      
//       return (
//          <div className="row">
//             <div className="col">
//                <RegisterBox
//                   history={this.props.history}
//                   onSubmit={this.onRegisterSubmit}
//                   loading={this.state.loading}
//                   error={this.state.error}
//                > 
//                      {form}
//                      <SingleModuleButton 
//          text="Create your account" 
//          type="submit" 
//       />
//                </RegisterBox>
               
              
//             </div>
//          </div>
//       );
//    }

//    onRegisterSubmit = (event) => {
//       event.preventDefault();
//       this.setState({ loading: true, error: null });

//       // Dispatch auth action
//       // There will be automatic redirect to panel, in HOC
//       this.props
//          .register(this.state.controls.email.value, this.state.controls.password, this.state.controls.firstName.value, this.state.controls.lastName.value)
//          .catch(error => this.setState({ loading: false, error }));
//    };
// }

// const mapDispatchToProps = dispatch => {
//    return {
//       register: (firstName, lastName, email, password, user_type) => dispatch(Actions.register(firstName, lastName, email, password, user_type))
//    };
// };


// export default connect(null, mapDispatchToProps)(Register);
