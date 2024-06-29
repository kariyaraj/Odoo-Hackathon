"use client";

import { createAuthCookie } from "@/actions/auth.action";
import { RegisterSchema } from "@/helpers/schemas";
import { RegisterFormType } from "@/helpers/types";
import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { auth,createUserWithEmailAndPassword,db} from "@/actions/firebaseconfig";
// functions.js or wherever you manage your Firebase functions
import { collection, addDoc } from "firebase/firestore";

export async function addUserDetailsToFirestore(userData: RegisterFormType) {
  try {
    const usersCollectionRef = collection(db, "users");
    await addDoc(usersCollectionRef, userData);
    console.log("User details added to Firestore:", userData);
  } catch (error) {
    console.error("Error adding user details to Firestore:", error);
    throw new Error("Failed to add user details to Firestore");
  }
}

export const Register = () => {
  const router = useRouter();

  const initialValues: RegisterFormType = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleRegister = useCallback(
    async (values: RegisterFormType) => {
      try {
        const { email, password } = values;
        await createUserWithEmailAndPassword(auth, email, password);
        addUserDetailsToFirestore(values);
;        await createAuthCookie();
        router.replace("/");
      } catch (error) {
        console.error("Email registration error:", error);
      }
    },
    [router]
  );
  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Register</div>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className='flex flex-col w-1/2 gap-4 mb-4'>
              <Input
                variant='bordered'
                label='Name'
                value={values.name}
                isInvalid={!!errors.name && !!touched.name}
                errorMessage={errors.name}
                onChange={handleChange("name")}
              />
              <Input
                variant='bordered'
                label='Email'
                type='email'
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange("email")}
              />
              <Input
                variant='bordered'
                label='Password'
                type='password'
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange("password")}
              />
              <Input
                variant='bordered'
                label='Confirm password'
                type='password'
                value={values.confirmPassword}
                isInvalid={
                  !!errors.confirmPassword && !!touched.confirmPassword
                }
                errorMessage={errors.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant='flat'
              color='primary'>
              Register
            </Button>
          </>
        )}
      </Formik>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Already have an account ?{" "}
        <Link href='/login' className='font-bold'>
          Login here
        </Link>
      </div>
    </>
  );
};
