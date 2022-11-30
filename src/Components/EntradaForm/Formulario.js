import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const Formulario = ({ funSubmit, defaultValue }) => { 
  
  const FormSchema = Yup.object().shape({
    titulo: Yup.string().required('Titulo Requerido'),
    contenido: Yup.string().required('Contenido Requerido'),
    fechaPub: Yup.number().required('Fecha Requerida'),
  })

  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={FormSchema}
      onSubmit={funSubmit}
    >
      {({ errors, touched }) => (
        <Form className="">
          <div>
            <label>Titulo</label>
            <Field
              type="text"
              id="titulo"
              name="titulo"
            />
            {errors.titulo && touched.titulo ? <div className='text-danger' >{errors.titulo}</div> : null}
          </div>
          <div>
            <label>Contenido</label>
            <Field
              type="textarea"
              id="contenido"
              name="contenido"
            />
            {errors.contenido && touched.contenido ? <div className='text-danger' >{errors.contenido}</div> : null}
          </div>
          <div>
            <label>Fecha Pub</label>
            <Field
              type="text"
              id="fechaPub"
              name="fechaPub"
            />
            {errors.fechaPub && touched.fechaPub ? <div className='text-danger' >{errors.fechaPub}</div> : null}
          </div>
          <div>
            <button type="submit" className='' >Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  )

}

export default Formulario