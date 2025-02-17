import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
 
 
export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
  return (
    <>
    <div className="w-full py-4 px-6">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          {/* <HomeIcon className="h-7 w-7" /> */}
        </Step>
      
        <Step onClick={() => setActiveStep(1)}>
          {/* <UserIcon className="h-7 w-7" /> */}
        </Step>
        
        <Step onClick={() => setActiveStep(2)}>
          {/* <CogIcon className="h-7 w-7" /> */}
        </Step>
        
        <Step onClick={() => setActiveStep(3)}>
          {/* <CogIcon className="h-7 w-7" /> */}
        </Step>
        
        <Step onClick={() => setActiveStep(4)}>
          {/* <CogIcon className="h-7 w-7" /> */}
        </Step>
        <Step onClick={() => setActiveStep(4)}>
          <CogIcon className="h-7 w-7" />
        </Step>
      </Stepper>
      {/* <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
    </div>
    </>
  );
}


