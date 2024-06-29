"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Input, RadioGroup, Radio, Button } from "@nextui-org/react";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import Link from "next/link";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import { collection, addDoc, getFirestore, where, query, getDocs, doc, updateDoc } from "firebase/firestore";
import { db,auth} from "../../actions/firebaseconfig";
export default function Bio() {
  const variants = ["bordered"];
  const [name, setName] = useState("");
  const email=auth.currentUser?.email as string;
  
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight , setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [healthGoals, setHealthGoals] = useState("");
    // const db=getFirestore();
    useEffect(() => {
      const fetchUserDetailsAndSetVariables = async () => {
        if (auth.currentUser) {
          console.log("Current user is not null");
          const userEmail = auth.currentUser.email;
          console.log("Current user email: ", userEmail);
  
          const userCollectionRef = collection(db, "users");
          const userQuery = query(userCollectionRef, where("email", "==", userEmail));
          const querySnapshot = await getDocs(userQuery);
  
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
  
            setName(userData.name || "");
            setAge(userData.age || "");
            setGender(userData.gender || "");
            setWeight(userData.weight || "");
            setHeight(userData.height || "");
            setDietaryPreference(userData.dietaryPreference || "");
            setAllergies(userData.allergies || "");
            setHealthGoals(userData.healthGoals || "");
  
            console.log("User details fetched successfully:");
          } else {
            console.log("No user found with the provided email.");
          }
        } else {
          console.error("Current user is null");
        }
      };
  
      fetchUserDetailsAndSetVariables();
    }, [email]);
const calculateCaloriesForStayFit = (weight:number, height:number, age:number, gender:string) => {
  let bmr = 0;
  if (gender === "Male") {
    // Harris-Benedict equation for males
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === "Female") {
    // Harris-Benedict equation for females
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    // Default to male calculation if gender is not specified (or handle other genders as per requirement)
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  }

  // For staying fit, multiply BMR by activity factor (example: moderate activity)
  const calories = bmr * 1.55; // Example: Moderate activity

  return Math.round(calories);
};


const calculateCaloriesForWeightLoss = (weight:number, height:number, age:number, gender:string) => {
    let bmr = 0;
    if (gender === "Male") {
      // Harris-Benedict equation for males
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "Female") {
      // Harris-Benedict equation for females
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
      // Default to male calculation if gender is not specified (or handle other genders as per requirement)
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
  
    // For weight loss, create a caloric deficit (example: reduce 500 calories/day)
    const calories = bmr * 1.2 - 500; // Example: Reduce 500 calories/day
  
    return Math.round(calories);
  };
  

  const calculateCaloriesForWeightGain = (weight:number, height:number, age:number, gender:string) => {
    let bmr = 0;
    if (gender === "Male") {
      // Harris-Benedict equation for males
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "Female") {
      // Harris-Benedict equation for females
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
      // Default to male calculation if gender is not specified (or handle other genders as per requirement)
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
  
    // For weight gain, create a caloric surplus (example: increase 500 calories/day)
    const calories = bmr * 1.2 + 500; // Example: Increase 500 calories/day
  
    return Math.round(calories);
  };
  async function fetchUserDetailsAndSetVariables() {
    const db = getFirestore();
  
    if (auth.currentUser) {
      console.log("Current user is not null");
      const userEmail = auth.currentUser.email;
      console.log("Current user email: ", userEmail);
  
      // Query to find the user document with matching email
      const userCollectionRef = collection(db, "users");
      const userQuery = query(userCollectionRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(userQuery);
  
      if (!querySnapshot.empty) {
        // If a matching document is found, get the existing user data
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
  
        // Set variables with the fetched data
        const userName = userData.name || "";
        const userAge = userData.age || null;
        const dietaryPreference = userData.dietaryPreference || "";
        // const userAddress = userData.address || "";
        // Add other variables as needed
        setGender(userData.gender);
        setAge(userAge);
        setName(userName);
        setWeight(userData.weight || "");
        setHeight(userData.height || "");
        setDietaryPreference(dietaryPreference);
        setAllergies(userData.allergies || "");
        setHealthGoals(userData.healthGoals || "");
        console.log("User details fetched successfully:");
        console.log("Name:", userName);
        console.log("Age:", userAge);
        // console.log("Address:", userAddress);
        // Log other variables as needed 
        
      } else {
        console.log("No user found with the provided email.");
      }
    } else {
      console.error("Current user is null"); // Handle the case where currentUser is null
    }
  }
  
  try {
    
  } catch (error) {
    console.error("Error fetching user details: ", error);
  }
  const handleSave = async () => {
    try {
      // Calculate BMI
      const heightInMeters = parseInt(height) / 100;
      const bmi = parseInt(weight) / (heightInMeters * heightInMeters);
        console.log(heightInMeters);
        console.log(bmi);
      // Calculate calories based on health goals
      let calories = 0;
      if (healthGoals === "Stay Fit") {
        // Example calculation for "Stay Fit"
        calories = calculateCaloriesForStayFit(parseInt(weight), parseInt(weight), parseInt(age), gender);
      } else if (healthGoals === "Weight Loss") {
        // Example calculation for "Weight Loss"
        calories = calculateCaloriesForWeightLoss(parseInt(weight), parseInt(weight), parseInt(age), gender);
      } else if (healthGoals === "Weight Gain") {
        // Example calculation for "Weight Gain"
        calories = calculateCaloriesForWeightGain(parseInt(weight), parseInt(weight), parseInt(age), gender);
      }
      const userData = {
        name,
        email,
        age,
        gender,
        weight,
        height,
        dietaryPreference,
        allergies,
        healthGoals,
        bmi,
        calories,
      };
      console.log(userData);

      // Add user data to Firestore
      if (auth.currentUser) {
        fetchUserDetailsAndSetVariables();
        const userEmail = auth.currentUser.email;
        console.log(userEmail);
        const userCollectionRef = collection(db, "users");
        const userQuery = query(userCollectionRef, where("email", "==", userEmail));
        const querySnapshot = await getDocs(userQuery);
        let existingUserData = {};
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          existingUserData = userDoc.data();
        }
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, "users", userDoc.id);
        const mergedUserData = { ...existingUserData, ...userData, email: userEmail };
        await updateDoc(userDocRef, mergedUserData);
        console.log("Document written with ID: ");
        fetchUserDetailsAndSetVariables();
      } else {
        console.error("Current user is null"); // Handle the case where currentUser is null
      }
    
      // Optionally handle success, e.g., show confirmation message
    } catch (error) {
      console.error("Error adding document: ", error);
    }

  };
  return (
      // fetchUserDetailsAndSetVariables(),
    <div className="m-9">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Bio</span>
          <span> / </span>{" "}
        </li>

      </ul>
      <br></br>
      <Card>
        <CardBody className="flex gap-3">
          <div>
            <h3 className="text-xl font-semibold">Personal Details</h3>

            <div
              key="underlined"
              className="flex w-full flex-col md:flex-nowrap mb-6 md:mb-0 gap-9 mt-3 mr-9"
            >
              <Input type="text" variant="underlined" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input type="email" variant="underlined" label="Email" value={email} readOnly />
              <Input type="number" variant="underlined" label="Age" min={1} value={age} onChange={(e) => setAge(e.target.value)} />

              <RadioGroup label="Select your gender" orientation="horizontal" value={gender} onChange={(e) => setGender(e.target.value)}>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </RadioGroup>

              <Input type="number" variant="underlined" label="Weight" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} />
              <Input type="number" variant="underlined" label="Height" min={1} value={height} onChange={(e) => setHeight(e.target.value)} />

              <RadioGroup
                label="Enter Dietary Preference"
                orientation="horizontal"
                value={dietaryPreference}
                onChange={(e) => setDietaryPreference(e.target.value)}
              >
                <Radio value="veg">Veg</Radio>
                <Radio value="non-veg">Non-Veg</Radio>
              </RadioGroup>

              <Input type="text" variant="underlined" label="Allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} />

              <RadioGroup
                label="Health Goals"
                orientation="horizontal"
                value={healthGoals}
                onChange={(e) => setHealthGoals(e.target.value)}
              >
                <Radio value="fit">Stay Fit</Radio>
                <Radio value="loss">Weight Loss</Radio>
                <Radio value="gain">Weight Gain</Radio>
              </RadioGroup>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex-row">
        <Button color="danger" className="m-3 ml-0" variant="ghost"> Cancel </Button>
        <Button color="success" className="m-3" variant="ghost" onClick={handleSave}> Save </Button>

      </div>
    </div>
  );
}