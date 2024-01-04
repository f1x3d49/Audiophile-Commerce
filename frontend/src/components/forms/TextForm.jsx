import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const TextForm = ({ title, value, type, placeholder }) => {
  const [initial, setInitial] = useState({});
  const [validation, setValidation] = useState({});

  // function for determining the initialValues and the validationSchema
  const getValue = () => {
    if (value === "name") {
      setInitial({ name: "" });
      setValidation({ name: Yup.string("Wrong format").required("Required!") });
    } else if (value === "email") {
      setInitial({ email: "" });
      setValidation({
        email: Yup.string().email("Invalid email").required("Required"),
      });
    } else if (value === "phone") {
      setInitial({ phone: "" });
      setValidation({
        phone: Yup.string()
          .required("Phone number is required")
          .matches(
            /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
            "Invalid phone number"
          ),
      });
    } else if (value === "address") {
      setInitial({ adress: "" });
      setValidation(Yup.object({ adress: Yup.string().required("Required") }));
    } else if (value === "zip") {
      setInitial({ zip: "" });
      setValidation({
        zip: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(5, "Must be exactly 5 digits")
          .max(5, "Must be exactly 5 digits"),
      });
    } else if (value === "city") {
      setInitial({ city: "" });
      setValidation({ city: Yup.string().required("Required") });
    } else if (value === "country") {
      setInitial({ country: "" });
      setValidation({ country: Yup.string().required("Required") });
    } else if (value === "enumber") {
      setInitial({ enumber: "" });
      setValidation({
        enumber: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(9, "Must be only 9 digits")
          .max(9, "Must be only 9 digits"),
      });
    } else if (value === "epin") {
      setInitial({ epin: "" });
      setValidation({
        epin: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(4, "Must be only 4 digits")
          .max(4, "Must be only 4 digits"),
      });
    }
  };

  getValue();

  // formik logic
  const formik = useFormik({
    initialValues: initial,
    // validate form

    validationSchema: validation,
  });

  return (
    <div className="flex flex-col justify-center flex-shrink-0 items-start gap-2 w-[309px] h-[81px]">
      <label
        className="block font-bold text-[12px] text-color7"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        type={type}
        name={title}
        value={formik.values.value}
        onChange={formik.handleChange}
        placeholder={placeholder}
        className="focus:ring-0 border-[1px] focus:border-color1 rounded-[8px] h-[56px] w-full text-[14px] text-color7 font-bold tracking-[-0.25px] opacity-40 focus:opacity-100 caret-color1"
      />
    </div>
  );
};

export default TextForm;
