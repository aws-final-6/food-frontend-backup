"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { ImStopwatch } from "react-icons/im";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const formatTime = (timer: number) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

const useTimer = (initialState: number) => {
  const [timer, setTimer] = React.useState(initialState);
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const countRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countRef.current as NodeJS.Timeout);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countRef.current as NodeJS.Timeout);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setIsActive(false);
    setIsPaused(false);
    setTimer(initialState);
  };

  const updateTimer = (newTime: number) => {
    setTimer(newTime);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    updateTimer,
  };
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    updateTimer,
  } = useTimer(time);

  const handleUpdateTime = (increment: number) => {
    const newTime = time + increment;
    setTime(newTime);
    updateTimer(newTime);
  };

  return (
    <div className="fixed bottom-20 right-20 flex flex-col gap-3 justify-center items-center z-30">
      <Card>
        <CardBody className="flex flex-col gap-5">
          <p className="text-center py-1 bg-slate-200 rounded-full">
            {formatTime(timer)}
          </p>
        </CardBody>
        <CardFooter>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <Button
                name="onemin"
                onClick={() => handleUpdateTime(60)}
                size="sm"
                id={"1min"}
              >
                +1분
              </Button>
              <Button onClick={() => handleUpdateTime(300)} size="sm">
                +5분
              </Button>
            </div>
            {!isActive && !isPaused ? (
              <Button
                variant="ghost"
                color="primary"
                onClick={handleStart}
                name={"start"}
              >
                시작
              </Button>
            ) : isPaused ? (
              <Button
                variant="ghost"
                color="primary"
                isDisabled={!isPaused}
                onClick={handlePause}
              >
                중지
              </Button>
            ) : (
              <Button variant="ghost" color="primary" onClick={handleResume}>
                재시작
              </Button>
            )}
            <Button
              variant="ghost"
              color="primary"
              onClick={handleReset}
              isDisabled={!isActive}
            >
              초기화
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Button
        className="rounded-ful"
        color="primary"
        size="lg"
        startContent={<ImStopwatch />}
        variant="flat"
      >
        타이머
      </Button>
    </div>
  );
};

export default Timer;
