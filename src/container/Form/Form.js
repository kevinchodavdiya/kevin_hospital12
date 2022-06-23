import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { Button, Input, Label } from 'reactstrap';

function Form(props) {
    const [userform, setuserform] = useState("Form");

    let Form = {
        name: yup.string().required("please enter Pationt name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phonenumber: yup.string().required("please enter your Phone Number"),
    }

    let schema, initialVal;

    schema = yup.object().shape(Form);
    initialVal = {
        name: "",
        email: "",
        phonenumber: ""
    }

    const formik = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userform === "Form") {
                console.log("Successfully Send Message");
            }
            resetForm()
        },
    });
    console.log(formik.errors.name);
    console.log(formik.errors.email);
    console.log(formik.errors.phonenumber);

    return (
        <>
            <main>
                <section className='mt-5'>
                    <div className='container'>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                        <h3 className='text-center mb-4 text-success'>Pationt Form</h3>
                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                                <Label>Pationt Name</Label>
                                            <Input type="text" name="name" className="form-control" id="name" placeholder="Pationt Name" onChange={formik.handleChange} />
                                            {
                                                formik.errors.name ?
                                                <p>{formik.errors.name}</p> : null
                                            }
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <Label>Pationt Email</Label>
                                            <Input type="email" className="form-control" name="email" id="email" placeholder="Pationt Email" onChange={formik.handleChange} />
                                            {
                                                formik.errors.email ? 
                                                <p>{formik.errors.email}</p> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                            <Label>Pationt Phone Number</Label>
                                        <Input type="text" className="form-control" name="phonenumber" id="phonenumber" placeholder="Phone Number" onChange={formik.handleChange} />
                                        {
                                                formik.errors.phonenumber ? 
                                                <p>{formik.errors.phonenumber}</p> : null
                                            }
                                    </div>
                                    
                                    <div className="text-center mt-4"><Button type="submit" onClick={() => setuserform("Form")}>Send Message</Button></div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Form;