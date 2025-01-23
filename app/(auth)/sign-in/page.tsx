import { signInSchema } from "@/lib/validations";
import React from "react";
import AuthForm from "@/components/AuthForm";

const Page = () => {
    return (
        <AuthForm 
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: "",
                password: "",
            }}
            onSubmit={() => {}}
        />
    );
};

export default Page;