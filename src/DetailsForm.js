import React from "react";
import { Formik, 
  /*
  Form, 
  Field, 
  ErrorMessage
  */
 } from "formik";
import styled from "styled-components";
import { usePDFData } from "./hooks/use-pdf-data";

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: 80%;
	font-size: 62.5%;
	margin: auto;

	.btn {
		&,
		&:link,
		&:visited {
			text-transform: uppercase;
			text-decoration: none;
			/* padding: 1.5rem 2rem; */
			height: 3rem;
			display: inline-block;
			border-radius: 10rem;
			transition: all 0.2s;
			position: relative;
			text-align: center;
			width: 8rem;
			/* font-size: $default-font-size; */

			//Change for the <button> element
			border: none;
			cursor: pointer;
		}
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

			&::after {
				transform: scaleX(1.4) scaleY(1.6);
				opacity: 0;
			}
		}

		&:active,
		&:focus {
			outline: none;
			transform: translateY(-1px);
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
		}

		& {
			background-color: yellowgreen;
			color: white;

			&::after {
				background-color: yellowgreen;
			}
		}

		&::after {
			content: "";
			display: inline-block;
			height: 100%;
			width: 8rem;
			/* padding: 1.5rem 4rem; */

			border-radius: 10rem;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			transition: all 0.4s;
		}

		/* &--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    } */
	}

	& > div:not(:last-child) {
		margin-bottom: 2rem;
	}

	input {
		font-size: 1rem;
		font-family: inherit;
		color: inherit;
		padding: 1rem 2rem;
		border-radius: 2px;
		background-color: rgba(255, 255, 255, 0.5);
		border: none;
		border-bottom: 3px solid transparent;
		width: 90%;
		display: block;
		transition: all 0.3s;

		/* @include respond(tab-port) {
            width: 80%;
        } */

		&:focus {
			outline: none;
			box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
			border-bottom: 3px solid green;
		}

		&:focus:invalid {
			border-bottom: 3px solid red;
		}

		&::-webkit-input-placeholder {
			color: #eee;
		}
	}

	&__label {
		font-size: 1.2rem;
		font-weight: 700;
		margin-left: 2rem;
		margin-top: 0.7rem;
		display: block;
		transition: all 0.3s;
	}

	input:placeholder-shown + label {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4rem);
	}
`;

function DetailsForm() {
	const { pdfData, updatePdfData } = usePDFData();

	const newObject = {
		...pdfData,
	};
	// setPDFData()
	return (
		<div>
			<h1>Anywhere in your app!</h1>
			<Formik
				initialValues={{ email: "", password: "" }}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					newObject.data.mySection = values.email;
					console.log(newObject.data.mySection);
					updatePdfData(newObject);
					//  setTimeout(() => {
					//    alert(JSON.stringify(values, null, 2));
					//    setSubmitting(false);
					//  }, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<FormWrapper onSubmit={handleSubmit}>
						<div>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && errors.email}
						</div>
						<div>
							<input
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && touched.password && errors.password}
						</div>
						<button className="btn" type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</FormWrapper>
				)}
			</Formik>
		</div>
	);
}

export default DetailsForm;
