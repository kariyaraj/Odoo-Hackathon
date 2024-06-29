"use client";
import React, { useState } from "react";
import {
    Card, CardBody, Input, RadioGroup, Radio, Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";

export const CardPreGen = () => {
    const [showCard, setShowCard] = useState(false);
    const [meal, setMeal] = useState("");
    const [generatedMealCount, setGeneratedMealCount] = useState(0);
    const [selectedDish, setSelectedDish] = useState<{ mealIndex: number, dishIndex: number } | null>(null);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleButtonClick = () => {
        setShowCard(true);
        const mealCount = {
            thrice: 3,
            quad: 4,
            quint: 5,
        }[meal] || 0;
        setGeneratedMealCount(mealCount);
    };

    const handleMealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMeal(event.target.value);
    };

    const handleDishClick = (mealIndex: number, dishIndex: number): void => {
        setSelectedDish({ mealIndex, dishIndex });
        onOpen();
    };

    const renderDishCards = (mealIndex: number) => {
        const dishCards = [];
        for (let i = 0; i < 3; i++) {
            dishCards.push(
                <div key={i} className="m-2 flex-1 cursor-pointer" onClick={() => handleDishClick(mealIndex, i)}>
                    <Card>
                        <CardBody className="flex gap-3">
                            <div className="dish-card-content">
                                <strong>Dish {i + 1} Name</strong>
                            </div>
                        </CardBody>
                    </Card>
                </div>
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
                            {renderDishCards(i)}
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

            {selectedDish && (
                <Modal
                    size="4xl"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-2 modal-header">
                                    Low-Fat Berry Blue Frozen Dessert
                                </ModalHeader>
                                <ModalBody>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex gap-6">
                                            <div style={{ flex: 1 }}>
                                                <h1 className="section-title">Ingredients</h1>
                                                <ul className="ingredients-list">
                                                    <li>1 cup fresh blueberries</li>
                                                    <li>1 cup fresh blackberries</li>
                                                    <li>1 cup fresh raspberries</li>
                                                    <li>1 cup fresh strawberries, hulled</li>
                                                    <li>1/2 cup sugar</li>
                                                    <li>1/2 cup water</li>
                                                    <li>1/2 cup lemon juice</li>
                                                    <li>1/2 cup fat-free milk</li>
                                                </ul>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h1 className="section-title">Nutritional Facts & Details</h1>
                                                <div className="prep-details">
                                                    <p><strong>Preparation Time:</strong> 23 Days 14 Hr 54 Min</p>
                                                    <p><strong>Calories:</strong> 100</p>
                                                    <p><strong>Protein:</strong> 1g</p>
                                                    <p><strong>Fat:</strong> 0g</p>
                                                    <p><strong>Carbohydrates:</strong> 25g</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="section-title">Recipe</h1>
                                            <ol className="recipe-steps">
                                                <li>Place the blueberries, blackberries, raspberries, strawberries, sugar, and water in a saucepan over medium heat. Bring to a boil, reduce heat to low, and simmer until the berries have softened, about 10 minutes. Remove from heat and allow to cool.</li>
                                                <li>Place the berry mixture into a blender, add the lemon juice, and puree until smooth. Strain the puree through a fine mesh sieve to remove the seeds.</li>
                                                <li>Stir the milk into the berry mixture. Pour the mixture into an ice cream maker and freeze according to manufacturers directions.</li>
                                                <li>Transfer the frozen dessert to a one- or two-quart lidded plastic container; cover surface with plastic wrap and seal. For best results, frozen dessert should ripen in the freezer for at least 2 hours or overnight.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};