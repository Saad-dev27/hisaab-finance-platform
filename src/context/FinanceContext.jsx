"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
import {transactions as seedTransactions,notifications as seedNotifications} from "../data/financeData";
const FinanceContext=createContext(null);
export function FinanceProvider({children}){const [theme,setTheme]=useState("light");const [transactions,setTransactions]=useState(seedTransactions);const [notifications,setNotifications]=useState(seedNotifications);const [balancesVisible,setBalancesVisible]=useState(true);useEffect(()=>{const saved=localStorage.getItem("hisaab-theme");if(saved)setTheme(saved)},[]);useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem("hisaab-theme",theme)},[theme]);const value=useMemo(()=>({theme,setTheme,transactions,setTransactions,notifications,setNotifications,balancesVisible,setBalancesVisible}),[theme,transactions,notifications,balancesVisible]);return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>}
export const useFinance=()=>useContext(FinanceContext);
