"use client";

import { useEffect, useState } from "react";

const GRACE_PERIOD_DAYS = 15;

export const useAccess = () => {
  const [isWithinGracePeriod, setIsWithinGracePeriod] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(GRACE_PERIOD_DAYS);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state for now

  useEffect(() => {
    if (typeof window === "undefined") return;

    const firstVisit = localStorage.getItem("first_visit_date");
    const now = new Date();

    if (!firstVisit) {
      localStorage.setItem("first_visit_date", now.toISOString());
      setIsWithinGracePeriod(true);
      setDaysRemaining(GRACE_PERIOD_DAYS);
    } else {
      const visitDate = new Date(firstVisit);
      const diffTime = Math.abs(now.getTime() - visitDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > GRACE_PERIOD_DAYS) {
        setIsWithinGracePeriod(false);
        setDaysRemaining(0);
      } else {
        setIsWithinGracePeriod(true);
        setDaysRemaining(GRACE_PERIOD_DAYS - diffDays);
      }
    }
    
    // Check for mock login (we'll implement real auth later)
    const storedAuth = localStorage.getItem("is_logged_in");
    setIsLoggedIn(storedAuth === "true");
  }, []);

  const login = () => {
    localStorage.setItem("is_logged_in", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("is_logged_in");
    setIsLoggedIn(false);
  };

  return { isWithinGracePeriod, daysRemaining, isLoggedIn, login, logout };
};

export const usePoints = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedPoints = localStorage.getItem("user_points");
    setPoints(storedPoints ? parseInt(storedPoints) : 100); // Start with 100 mock points
  }, []);

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    localStorage.setItem("user_points", newPoints.toString());
  };

  const spendPoints = (amount: number) => {
    if (points >= amount) {
      const newPoints = points - amount;
      setPoints(newPoints);
      localStorage.setItem("user_points", newPoints.toString());
      return true;
    }
    return false;
  };

  return { points, addPoints, spendPoints };
};
