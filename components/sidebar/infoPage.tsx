import React from "react";
import { Card, CardBody, Input, RadioGroup, Radio, Button } from "@nextui-org/react";

export default function NewApp() {
  const variants = ["bordered"];

  return (
    <div className="m-9">

      <Card >
        <CardBody className="flex gap-3">

          <div>
            <h3 className="text-xl font-semibold">Personal Details</h3>

            <div key='underlined' className="flex w-full flex-col md:flex-nowrap mb-6 md:mb-0 gap-9 mt-3 mr-9">
              <Input type="input" variant='underlined' label="Name" />
              <Input type="email" variant='underlined' label="Email" />

              <Input type="number" variant='underlined' label="Age" min={1} />

              <RadioGroup
                label="Select your gender"
                orientation="horizontal"
              >
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </RadioGroup>


              <Input type="number" variant='underlined' label="Weight" min={1} />
              <Input type="number" variant='underlined' label="Height" min={1} />
              
              <RadioGroup
                label="Enter Dietary Preference"
                orientation="horizontal"
              >
                <Radio value="veg">Veg</Radio>
                <Radio value="non-veg">Non-Veg</Radio>
              </RadioGroup>

              <Input type="text" variant='underlined' label="Allergies" />
              <RadioGroup
                label="Health Goals"
                orientation="horizontal"
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
        <Button color="success" className="m-3" variant="ghost"> Save </Button>

      </div>
    </div>
  );
}