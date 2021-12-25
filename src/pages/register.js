import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required()
    
  }).required();

const Register = () => {

    const { 
        register, 
        handleSubmit,  
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="bg-light">
            <div className="container px-5">
                <h1>View Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row m-3">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="m-2">Nombre</label>
                                <input {...register('firstName')} type="text" className="" ></input>
                                {/* {errors.firstName?.type === 'required' && <p className="text-danger">This field is required</p>} */}
                                <p className="text-danger">{errors.firstName?.message}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="m-2">Apellido</label>
                                <input {...register('lastName')} type="text" className="" ></input>
                                {/* {errors.lastName && <p className="text-danger">This field is required</p>} */}
                                <p className="text-danger">{errors.lastName?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
    );
};

export default Register;