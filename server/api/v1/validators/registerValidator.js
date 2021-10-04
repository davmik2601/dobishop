import { check } from "express-validator";
import User from "../models/User.js";

const registerValidator = [

  check('firstName')
    .exists().bail()
    .matches(/^\p{L}+$/u)
      .withMessage('First Name Must be only letters').bail()
    .isLength({min:2, max:25})
      .withMessage('First Name Must be 2-25 characters').bail(),

  check('lastName')
    .exists().bail()
    .matches(/^\p{L}+$/u)
      .withMessage('Last Name Must be only letters').bail()
    .isLength({min:2, max:25})
      .withMessage('Last Name Must be 2-25 characters').bail(),
  
  check('dob')
    .exists().bail()
    .notEmpty()
      .withMessage('Date of Birth cannot be empty').bail()
    .isISO8601('yyyy/mm/dd')
    // .matches('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
      .withMessage('Date of Birth must be in correct format yyyy/mm/dd'),

  check('gender', "InCorrect Gender")
    .exists().bail()
    .isIn(['male', 'female', 'other'])
      .withMessage('UnCorrect gender'),

  check('email')
    .exists().bail()
    .notEmpty()
      .withMessage('Email cannot be empty').bail()
    .isEmail()
      .withMessage('Email is not valid').bail()
    .custom(async val => {
      try {
        const data = await User.findOne({email: val});
        if(data) {
          return Promise.reject('This email is also exist');
        }
      } catch (err) {
        console.log(err);
      }
    }),

  check('password', 'Password must be minimum 6 characters (minimum 1 number)')
    .exists().bail()
    .matches("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{6,})"),
  
  check('confirmPassword', 'Confirm password is not match with password')
    .custom((val, { req }) => val === req.body.password)
];

export default registerValidator;