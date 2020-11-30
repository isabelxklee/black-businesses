import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
// import Button from './Button.jsx'

const formSchema = Yup.object().shape({
  title: Yup.string()
    .required('* Please enter the name of the business.')
    .max(250, "* Sorry, that's too long.")
})

const handleSubmit = (props, values) => {
  fetch('https://black-businesses-json.herokuapp.com/places', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: values.title,
      category: values.category,
      address: values.address,
      city: values.city,
      state: values.state,
      zipcode: values.zipcode,
      description: values.description,
      image: values.image,
      link: values.link
    }),
  })
    .then((response) => response.json())
    .then(console.log)
}

const AddBusinessForm = (props) => {
  return (
    <section>
      <Formik
        initialValues={{
          title: '',
          category: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          description: '',
          image: '',
          link: ''
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          handleSubmit(props, values)
        }}
      >
        {/* this is a render method, which expects a react component */}
        {({errors, touched}) => (
          <Form>
            <h3>Add a Black-owned business to the showcase</h3>

            <label htmlFor="title">Business name</label>
            {touched.title && errors.title && <section className="error">{errors.title}</section>}
            <Field name="title" type="text" autoComplete="off" />

            <label htmlFor="category">Category</label>
            {touched.category && errors.category && <section className="error">{errors.category}</section>}
            <Field name="category" type="text" autoComplete="off" />

            <label htmlFor="address">Street address</label>
            {touched.address && errors.address && <section className="error">{errors.address}</section>}
            <Field name="address" type="text" autoComplete="off" />

            <label htmlFor="city">City</label>
            {touched.city && errors.city && <section className="error">{errors.city}</section>}
            <Field name="city" type="text" autoComplete="off" />

            <label htmlFor="state">State</label>
            {touched.state && errors.state && <section className="error">{errors.state}</section>}
            <Field name="state" type="text" autoComplete="off" />

            <label htmlFor="zipcode">Zipcode</label>
            {touched.zipcode && errors.zipcode && <section className="error">{errors.zipcode}</section>}
            <Field name="zipcode" type="text" autoComplete="off" />

            <label htmlFor="description">Description</label>
            {touched.description && errors.description && <section className="error">{errors.description}</section>}
            <Field name="description" type="text" autoComplete="off" />

            <label htmlFor="image">Image URL</label>
            {touched.image && errors.image && <section className="error">{errors.image}</section>}
            <Field name="image" type="text" autoComplete="off" />

            <label htmlFor="link">Website</label>
            {touched.link && errors.link && <section className="error">{errors.link}</section>}
            <Field name="link" type="text" autoComplete="off" />

            <button type="submit">Add business</button>

            {/* <section className="button-group">
              <Button type="submit" id={errors.thought || errors.emoji ? 'error' : ''}>
                Create
              </Button>

              <Button variant="inverted" onClick={props.toggleFormDisplay} type="button">
                Cancel
              </Button>
            </section> */}
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default AddBusinessForm
