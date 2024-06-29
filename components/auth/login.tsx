"use client";
import { doc, getDoc } from "firebase/firestore";
import { createAuthCookie } from "@/actions/auth.action";
import { LoginSchema } from "@/helpers/schemas";
import { LoginFormType, RegisterFormType } from "@/helpers/types";
import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { auth, provider, signInWithPopup ,signInWithEmailAndPassword} from "../../actions/firebaseconfig.js";
import { addUserDetailsToFirestore } from "./register";
import { UserCredential } from "firebase/auth";
import { db } from "@/actions/firebaseconfig";
export const Login = () => {
  const router = useRouter();

  const initialValues: LoginFormType = {
    email: "",
    password: "",
  };

  const handleLogin = useCallback(
    async (values: LoginFormType) => {
      // `values` contains email & password. You can use provider to connect user
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        await createAuthCookie();
        router.replace("/");
      } catch (error) {
        console.error("Email sign-in error:", error);
      }
    },
    [router]
  );
  const handleGoogleLogin = useCallback(async () => {
    // const router = useRouter();
  
    try {
      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);
  
      // Check if user details already exist in Firestore
      const userDetails = await getUserDetailsFromFirestore(result.user.uid);
      
      // If user details do not exist, add them to Firestore
      if (!userDetails) {
        await addUserDetailsToFirestore({
          "name": result.user.displayName || "",
          "email": result.user.email || "",
          password: "",
          confirmPassword: ""
        });
      }
  
      // Create authentication cookie (assuming implementation in createAuthCookie)
      await createAuthCookie();
  
      // Redirect to homepage after successful login
      router.replace("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      // Handle sign-in error
    }
  }, []);

  async function getUserDetailsFromFirestore(uid: string) {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // Document exists, return the document data
        return docSnap.data();
      } else {
        // Document does not exist
        return null;
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw new Error("Failed to fetch user details from Firestore");
    }
  }
  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Login</div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className='flex flex-col w-1/2 gap-4 mb-4'>
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
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant='flat'
              color='primary'>
              Login
            </Button>
            <br>
            </br>
            <Button onPress={handleGoogleLogin} variant='flat' color='secondary'>
              Login with Google
            </Button>
          </>
        )}
      </Formik>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Don&apos;t have an account ?{" "}
        <Link href='/register' className='font-bold'>
          Register here
        </Link>
      </div>
    </>
  );
};