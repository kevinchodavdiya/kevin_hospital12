import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';

function Login(props) {
    const [useType, setUseType] = useState("Login");

    let Login = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let SignUp = {
        name: yup.string().required("please Enter Name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let forgetPassowrd = {
        email: yup.string().email("please enter valid email").required("please enter email"),
    }

    let schema, initiValue;

    if (useType === "Login") {
        schema = yup.object().shape(Login);
        initiValue = {
            email: "",
            password: ""
        }

    } else if (useType === "SignUp") {
        schema = yup.object().shape(SignUp);
        initiValue = {
            name: "",
            email: "",
            password: ""
        }
    } else if (useType === "forgetPassowrd") {
        schema = yup.object().shape(forgetPassowrd);
        initiValue = {
            email: ""
        }
    }

    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            if (useType === "Login") {
                console.log("Successfully Login");
                sessionStorage.setItem("user","123456")

            } else if (useType === "SignUp") {
                console.log("Successfully SignUp");

            } else if (useType === "forgetPassowrd") {
                console.log("Successfully Forget Passowrd");
            }
            resetForm()
        },
    });

    console.log(formik.errors.email);

    return (
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className='login' style={{ width: "50%", margin: "auto" }}>
                        {
                            useType === 'forgetPassowrd' ? <h3 className='text-center'>Forgot Password</h3> :
                                useType === "Login" ?
                                    <h3 className='text-center'>Login</h3> :
                                    <h3 className='text-center'>Sign Up</h3>
                        }
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                {
                                    useType === 'forgetPassowrd' ?
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Enter Email"
                                                type="email"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.email ?
                                                    <p>{formik.errors.email}</p> : null
                                            }
                                        </FormGroup>
                                        : null
                                }
                                {
                                    useType === "SignUp" ?
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Name
                                            </Label>
                                            <Input
                                                name="name"
                                                placeholder="Enter Name"
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.name ?
                                                    <p>{formik.errors.name}</p> : null
                                            }
                                        </FormGroup> :
                                        null
                                }
                                {
                                    (useType === "Login" || useType === "SignUp") &&
                                    <>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Enter Email"
                                                type="email"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.email ?
                                                    <p>{formik.errors.email}</p> : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">
                                                Password
                                            </Label>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="password"
                                                type="password"
                                                onChange={formik.handleChange}
                                            />
                                            {
                                                formik.errors.password ?
                                                    <p>{formik.errors.password}</p> : null
                                            }
                                        </FormGroup>
                                    </>
                                }
                                {
                                    useType === "Login" ?
                                        <div className="text-center">
                                            <Button type='submit'
                                                className="appointment-btn scrollto m-0">Login</Button>
                                            <p className="mt-3 cursor-pointer" onClick={() => setUseType("forgetPassowrd")}
                                                style={{ cursor: "pointer" }}>Forgot Password</p>
                                            <Button type='submit' className="appointment-btn scrollto m-0"
                                                onClick={() => setUseType("SignUp")}>Sign Up</Button>
                                        </div> :
                                        <div className="text-center">
                                            <Button type='submit' className="appointment-btn scrollto m-0">
                                                {
                                                    useType === 'forgetPassowrd' ? "Send OPT" : "Sign Up"
                                                }</Button>
                                            <Button type='submit' className="appointment-btn scrollto m-0"
                                                onClick={() => setUseType("Login")}>Login</Button>
                                        </div>
                                }
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;