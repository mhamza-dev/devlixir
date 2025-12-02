"use client";

import { Formik, Form, FormikConfig, FormikValues } from "formik";
import { ReactNode } from "react";

interface FormikFormProps<Values extends FormikValues>
    extends Omit<FormikConfig<Values>, "children"> {
    children: (props: any) => ReactNode;
    className?: string;
}

export default function FormikForm<Values extends FormikValues>({
    children,
    className = "space-y-6",
    ...formikProps
}: FormikFormProps<Values>) {
    return (
        <Formik {...formikProps}>
            {(formikState) => (
                <Form className={className}>{children(formikState)}</Form>
            )}
        </Formik>
    );
}


