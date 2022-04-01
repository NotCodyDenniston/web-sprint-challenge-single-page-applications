import React, {useState} from "react";
import {Route} from 'react-router-dom'
import * as yup from 'yup'
import axios from "axios";

import HomePage from "./components/HomePage";
import Form from './components/Form'
import schema from "./components/validation/formSchema";



const initialFormValues = {
  name: '',
  special: ''
}

const initialFormErrors = {
  name: ''
  
}

const initialData = []

const App = () => {
  const [data, setData] = useState(initialData) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)

  const postNewData = newData => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post("https://reqres.in/api/orders", newData)
      .then(res => {
        setData([res.data, ...data]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "cheese", "sausage", "bacon"].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    postNewData(newPizza)
  }
  return (
    <>
      <Route exact={true} path='/'>
      <HomePage/>
      </Route>
      <Route path='/pizza'>
      <Form 
      errors={formErrors}
      submit={formSubmit} 
      values={formValues} 
      change={inputChange}
      />
      </Route>
    </>
  );
};
export default App;