import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useForm, useFieldArray } from "react-hook-form";

import { getCategory } from "./../services/category.services";
import { getLot } from "./../services/lot.services";
import { saveProduct, getProduct } from "./../services/product.services";

const ExpandedComponent = ({ data }) => {
  return (
    <div className="row">
      <div className="col-4">
        <table className="table">
          <thead>
            <tr>
              <th>Colors</th>
            </tr>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.colors
              ? data.colors.map((e) => (
                  <tr>
                    <td>{e}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th colspan="3">Lots</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Descirption</th>
              <th>Lot</th>
              <th>Date Lot</th>
            </tr>
          </thead>
          <tbody>
            {data.featurs
              ? data.featurs.map((e) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e?.description}</td>
                    <td>{e.lot_id.nombre}</td>
                    <td>{e.lot_id.date}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Product = () => {
  const [categories, setCategories] = useState();
  const [lots, setLots] = useState();
  const [products, setProducts] = useState([]);

  const { control, register, handleSubmit, trigger } = useForm();
 
  const { fields, append, remove } = useFieldArray({
    control,
    name: "featurs",
  });

  const {
    fields: fieldColors,
    append: appendColors,
    // remove: removeColors,
  } = useFieldArray({
    control,
    name: "colors",
  });

  const columns = [
    {
      name: "Name",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category_id.nombre,
      sortable: true,
    },
    {
      name: "Width",
      selector: (row) => row.size.widht,
      sortable: true,
    },
    {
      name: "Height",
      selector: (row) => row.size.height,
      sortable: true,
    },
  ];

  const addLots = () => {
    append({
      nombre: "",
      description: "",
      lot_id: "",
    });
  };

  const addColors = () => {
    appendColors({ color: "" });
  };

  const onSubmit = async (form) => {
    console.log(form);
    if (form.featurs.length > 0 && form.colors.length > 0) {
      form = { ...form, colors: form.colors.map((e) => e.color) };
      const { data } = await saveProduct(form);
      if (data.status) {
        alert("Se registro correctamente");
        listProducts();
      }
    }
  };

  const listProducts = () => {
    getProduct().then(({ data }) => {
      setProducts(data.items);
    });
  };

  useEffect(() => {
    getCategory().then(({ data }) => {
      setCategories(data.items);
    });
    getLot().then(({ data }) => {
      setLots(data.items);
    });
    listProducts();
  }, []);

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("nombre")}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" {...register("category_id")}>
                    <option value="">Choose opcion</option>
                    {categories
                      ? categories.map((c) => (
                          <option value={c._id}>{c.nombre}</option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Widht</label>
                      <input
                        className="form-control"
                        type="number"
                        {...register("size.widht")}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Height</label>
                      <input
                        className="form-control"
                        type="number"
                        {...register("size.height")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3>
                  Colors{" "}
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={addColors}
                  >
                    Add
                  </button>
                </h3>
                {fieldColors.map((color, colorIndex) => (
                  <div className="form-group">
                    <label>Color</label>
                    <input
                      className="form-control"
                      type="color"
                      {...register(`colors[${colorIndex}].color`)}
                    />
                  </div>
                ))}
                <hr></hr>
                <h3>
                  Lot{" "}
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={addLots}
                  >
                    Add
                  </button>
                </h3>
                {fields.map((lot, lotIndex) => (
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`featurs[${lotIndex}].name`)}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`featurs[${lotIndex}].description`)}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label>Lot</label>
                        <select
                          className="form-control"
                          {...register(`featurs[${lotIndex}].lot_id`)}
                        >
                          <option value="">Choose opcion</option>
                          {lots
                            ? lots.map((c) => (
                                <option value={c._id}>{c.nombre}</option>
                              ))
                            : null}
                        </select>
                      </div>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        onClick={() => {
                          remove(lotIndex);
                          trigger();
                        }}
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-center">
                <button type="submit" className="btn btn-success">
                  Guadar
                </button>
              </div>
            </div>
          </form>
          <DataTable
            title="Products List"
            columns={columns}
            data={products}
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
      </section>
    </>
  );
};

export default Product;