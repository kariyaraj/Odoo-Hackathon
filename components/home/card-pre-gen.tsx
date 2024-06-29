"use client";
import React, { useState } from "react";
import { Card, CardBody, Input, RadioGroup, Radio, Button } from "@nextui-org/react";

export const CardPreGen = () => {
  const [showCard, setShowCard] = useState(false);
  const [meal, setMeal] = useState("");
  const [generatedMealCount, setGeneratedMealCount] = useState(0);

  const handleButtonClick = () => {
    setShowCard(true);
    const mealCount = {
      thrice: 3,
      quad: 4,
      quint: 5,
    }[meal] || 0;
    setGeneratedMealCount(mealCount);
  };

  const handleMealChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMeal(event.target.value);
  };

  const renderDishCards = () => {
    const dishCards = [];
    for (let i = 0; i < 3; i++) {
      dishCards.push(
        <Card key={i} className="m-2 flex-1">
          <CardBody className="flex gap-3">
            <div className="dish-card-content">
              <strong>Dish {i + 1} Name</strong>
            </div>
          </CardBody>
        </Card>
      );
    }
    return dishCards;
  };

  const renderMealCards = () => {
    const mealCards = [];
    for (let i = 0; i < generatedMealCount; i++) {
      mealCards.push(
        <Card key={i} className="mt-3">
          <CardBody className="flex flex-col gap-3">
            <div className="meal-card-content">Meal {i + 1}</div>
            <div className="flex gap-3">
              {renderDishCards()}
            </div>
          </CardBody>
        </Card>
      );
    }
    return mealCards;
  };

  return (
    <div className="m-9">
      <Card>
        <CardBody className="flex gap-3">
          <div>
            <h3 className="text-xl font-semibold">Dynamic Details</h3>
            <div key="underlined" className="flex w-full flex-col md:flex-nowrap mb-6 md:mb-0 gap-9 mt-3 mr-9">
              <Input type="number" variant="underlined" label="Weight(kg)" min={1} />
              <RadioGroup label="Meals a day" orientation="vertical" value={meal} onChange={handleMealChange}>
                <Radio value="thrice">3</Radio>
                <Radio value="quad">4</Radio>
                <Radio value="quint">5</Radio>
              </RadioGroup>
              <RadioGroup label="Health Goals" orientation="horizontal">
                <Radio value="maintain">Maintain Weight</Radio>
                <Radio value="mild">Mild Weight Loss</Radio>
                <Radio value="loss">Weight Loss</Radio>
                <Radio value="extreme">Extreme Weight Loss</Radio>
              </RadioGroup>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex-row">
        <Button color="success" className="m-3 mt-5 ml-0 mb-0" variant="ghost" onClick={handleButtonClick}>
          Generate
        </Button>
        {showCard && (
          <div className="flex flex-col mt-5">
            {renderMealCards()}
          </div>
        )}
      </div>
    </div>
  );
};
