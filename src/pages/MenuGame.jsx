import React, {useState} from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {
  Redirect
} from "react-router-dom";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <input className = "form__input" {...field} {...props} type="text"/>
        {meta.touched && meta.error ? (
          <div className="form__error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  // And now we can use these
  const MenuGame = () => {

    const [length, setLength] = useState(2);
    const [values, setValues] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validationObj = {};
    const initVal = {};
    for (let i = 0; i < length; ++i) {
      validationObj[`userName${i + 1}`] = Yup.string()
             .max(15, 'Максимальное число символов 15 или меньше')
             .required('Обязательное поле для заполнения!');
      initVal[`userName${i + 1}`] = "";
    }

    const inputElems = new Array(length).fill(null).map((item, index) => {
      return (<TextInput key={index}
        placeholder={`user ${index + 1}`}
        name={`userName${index + 1}`}
        type="text"
        autoComplete="off"
      />);
    }); 

    if (values) {
      return <Redirect push to={{
        pathname: '/game/1',
        state: {userNames: values}
      }}
      />
    }  

    return (
      <>
        <Formik
          initialValues = {initVal}
          validationSchema={ Yup.object(validationObj) }
          onSubmit={(values, action) => {
            setValues(values);
          }
        }
        >
          <div className="form">
            <div className="form__wrapper">
              <Form className="form__form">

                {inputElems}

                <div className = "form__btns">
                    <button type="button" onClick={() => {
                      if (length === 5) return;
                      const newLength = length + 1;
                      setLength(newLength);
                      }
                    }>+</button>
                    <button type="button" onClick={() => {
                      if (length === 2) return;
                      const newLength = length - 1;
                      setLength(newLength);
                      }
                    }>-</button>
                </div>

                <button className = "form__btn-submit" type="submit">Войти в игру</button>
                </Form>
            </div>
          </div>
        </Formik>
      </>
    );
  };

export default MenuGame
