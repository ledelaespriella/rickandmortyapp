import React from 'react';
import Nav from "./../../components/nav";
import Footer from "./../../components/footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { useForm } from "react-hook-form";

const AppLayout = () => {

    const { register, handleSubmit } = useForm();
    const auth = useAuth();

    const onSubmit = (data) => {
        auth.signin(data, () => {
            window.location.reload();
        });
    };

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />

            {/* <!-- Feedback Modal--> */}
            <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-gradient-primary-to-secondary p-4">
                            <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Login</h5>
                            <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body border-0 p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("email")}
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        data-sb-validations="required,email"
                                    />
                                    <label htmlFor="email">Email address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        {...register("password")}
                                        className="form-control"
                                        id="phone"
                                        type="password"
                                        placeholder="(123) 456-7890"
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="phone">Password</label>
                                </div>

                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary rounded-pill btn-lg"
                                        id="submitButton"
                                        type="submit"
                                    >
                                        LogIn
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

};

export default AppLayout;