"use client";

import React, { ComponentType } from "react";
import Icons from "@/components/icons";

export interface ProjectSvgData {
  id: string;
  MainImg: ComponentType<any>;
  TechImg: ComponentType<any>;
  HighlightImg: ComponentType<any>;
  webScreens: {
    id: string;
    title: string;
    desc: string;
    Component: ComponentType<any>;
  }[];
  mobScreens: {
    id: string;
    title: string;
    desc: string;
    Component: ComponentType<any>;
  }[];
  allScreens: {
    id: string;
    title: string;
    type: "web" | "mobile";
    desc: string;
    Component: ComponentType<any>;
  }[];
}

export const PROJECT_SVG_MAP: Record<string, ProjectSvgData> = {
  sevanun: {
    id: "sevanun",
    MainImg: Icons.RcmsGalleryMain,
    TechImg: Icons.RcmsTech,
    HighlightImg: Icons.RcmsHighLights,
    webScreens: [
      {
        id: "web-1",
        title: "Doctor Clinical Dashboard",
        desc: "Comprehensive remote patient monitoring and telemetry triage portal",
        Component: Icons.RcmsGalleryOne,
      },
      {
        id: "web-2",
        title: "Patient Teleconsultation Suite",
        desc: "Encrypted HD WebRTC video consultation with live vitals overlay",
        Component: Icons.RcmsGalleryTwo,
      },
      {
        id: "web-3",
        title: "Health Analytics & Trends",
        desc: "Longitudinal health data charts, SpO2 & BP historical telemetry",
        Component: Icons.RcmsGalleryThree,
      },
    ],
    mobScreens: [
      {
        id: "mob-1",
        title: "Patient Vitals Home",
        desc: "Instant BLE sync with smart medical sensors & health status ring",
        Component: Icons.RcmsGalleryFour,
      },
      {
        id: "mob-2",
        title: "Doctor Appointment Booking",
        desc: "Specialist consultation scheduler with calendar sync",
        Component: Icons.RcmsGalleryFive,
      },
      {
        id: "mob-3",
        title: "Digital Prescription & Reports",
        desc: "Automated lab report summaries & medication alerts",
        Component: Icons.RcmsGallerySix,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Doctor Clinical Dashboard",
        type: "web",
        desc: "Comprehensive remote patient monitoring and telemetry triage portal",
        Component: Icons.RcmsGalleryOne,
      },
      {
        id: "screen-2",
        title: "Patient Teleconsultation Suite",
        type: "web",
        desc: "Encrypted HD WebRTC video consultation with live vitals overlay",
        Component: Icons.RcmsGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Health Analytics & Trends",
        type: "web",
        desc: "Longitudinal health data charts, SpO2 & BP historical telemetry",
        Component: Icons.RcmsGalleryThree,
      },
      {
        id: "screen-4",
        title: "Patient Vitals Home",
        type: "mobile",
        desc: "Instant BLE sync with smart medical sensors & health status ring",
        Component: Icons.RcmsGalleryFour,
      },
      {
        id: "screen-5",
        title: "Doctor Appointment Booking",
        type: "mobile",
        desc: "Specialist consultation scheduler with calendar sync",
        Component: Icons.RcmsGalleryFive,
      },
      {
        id: "screen-6",
        title: "Digital Prescription & Reports",
        type: "mobile",
        desc: "Automated lab report summaries & medication alerts",
        Component: Icons.RcmsGallerySix,
      },
    ],
  },
  parkese: {
    id: "parkese",
    MainImg: Icons.ParGalleryMain,
    TechImg: Icons.ParTech,
    HighlightImg: Icons.ParHighLights,
    webScreens: [
      {
        id: "web-1",
        title: "Facility Commander Portal",
        desc: "Multi-level parking occupancy heatmap & live gate barrier telemetry",
        Component: Icons.ParGalleryOne,
      },
      {
        id: "web-2",
        title: "ALPR Neural Camera Feed",
        desc: "Sub-second license plate optical recognition and gate telemetry",
        Component: Icons.ParGalleryTwo,
      },
      {
        id: "web-3",
        title: "Revenue & Ledger Analytics",
        desc: "Audited financial breakdown, dynamic pricing engine & fast audit",
        Component: Icons.ParGalleryThree,
      },
    ],
    mobScreens: [
      {
        id: "mob-1",
        title: "Smart Slot Navigator",
        desc: "Live geo-fenced turn-by-turn guidance directly to open slot",
        Component: Icons.ParGalleryFour,
      },
      {
        id: "mob-2",
        title: "Fast Cashless Checkout",
        desc: "Instant QR wallet debit with automated digital GST invoice",
        Component: Icons.ParGalleryFive,
      },
      {
        id: "mob-3",
        title: "Monthly Pass Manager",
        desc: "Corporate pass renewal, reserved bay access & overstay alerts",
        Component: Icons.ParGallerySix,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Facility Commander Portal",
        type: "web",
        desc: "Multi-level parking occupancy heatmap & live gate barrier telemetry",
        Component: Icons.ParGalleryOne,
      },
      {
        id: "screen-2",
        title: "ALPR Neural Camera Feed",
        type: "web",
        desc: "Sub-second license plate optical recognition and gate telemetry",
        Component: Icons.ParGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Revenue & Ledger Analytics",
        type: "web",
        desc: "Audited financial breakdown, dynamic pricing engine & fast audit",
        Component: Icons.ParGalleryThree,
      },
      {
        id: "screen-4",
        title: "Smart Slot Navigator",
        type: "mobile",
        desc: "Live geo-fenced turn-by-turn guidance directly to open slot",
        Component: Icons.ParGalleryFour,
      },
      {
        id: "screen-5",
        title: "Fast Cashless Checkout",
        type: "mobile",
        desc: "Instant QR wallet debit with automated digital GST invoice",
        Component: Icons.ParGalleryFive,
      },
      {
        id: "screen-6",
        title: "Monthly Pass Manager",
        type: "mobile",
        desc: "Corporate pass renewal, reserved bay access & overstay alerts",
        Component: Icons.ParGallerySix,
      },
    ],
  },
  "cold-chain": {
    id: "cold-chain",
    MainImg: Icons.InnGalleryMain,
    TechImg: Icons.InnTech,
    HighlightImg: Icons.InnHighlights,
    webScreens: [
      {
        id: "web-1",
        title: "Fleet Telematics Dispatcher",
        desc: "Global reefer temperature map with real-time GPS route tracking",
        Component: Icons.InnGalleryOne,
      },
      {
        id: "web-2",
        title: "Thermal Excursion Triage",
        desc: "Instant temperature breach detection with corrective rerouting",
        Component: Icons.InnGalleryTwo,
      },
      {
        id: "web-3",
        title: "Cold Chain Compliance Ledger",
        desc: "Pharma GDP & food safety automated audit certificate generation",
        Component: Icons.InnGalleryThree,
      },
    ],
    mobScreens: [
      {
        id: "mob-1",
        title: "Driver Reefer Assistant",
        desc: "Real-time cabin BLE sensor display and temperature checklist",
        Component: Icons.InnGalleryFour,
      },
      {
        id: "mob-2",
        title: "Proof of Delivery & Handover",
        desc: "Digital sign-off with temperature compliance stamp at receiver end",
        Component: Icons.InnGalleryFive,
      },
      {
        id: "mob-3",
        title: "Urgent Excursion Alerts",
        desc: "Immediate push notification for temperature anomalies during transit",
        Component: Icons.InnGallerySix,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Fleet Telematics Dispatcher",
        type: "web",
        desc: "Global reefer temperature map with real-time GPS route tracking",
        Component: Icons.InnGalleryOne,
      },
      {
        id: "screen-2",
        title: "Thermal Excursion Triage",
        type: "web",
        desc: "Instant temperature breach detection with corrective rerouting",
        Component: Icons.InnGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Cold Chain Compliance Ledger",
        type: "web",
        desc: "Pharma GDP & food safety automated audit certificate generation",
        Component: Icons.InnGalleryThree,
      },
      {
        id: "screen-4",
        title: "Driver Reefer Assistant",
        type: "mobile",
        desc: "Real-time cabin BLE sensor display and temperature checklist",
        Component: Icons.InnGalleryFour,
      },
      {
        id: "screen-5",
        title: "Proof of Delivery & Handover",
        type: "mobile",
        desc: "Digital sign-off with temperature compliance stamp at receiver end",
        Component: Icons.InnGalleryFive,
      },
      {
        id: "screen-6",
        title: "Urgent Excursion Alerts",
        type: "mobile",
        desc: "Immediate push notification for temperature anomalies during transit",
        Component: Icons.InnGallerySix,
      },
    ],
  },
  "hiring-management": {
    id: "hiring-management",
    MainImg: Icons.VardGalleryMain,
    TechImg: Icons.VardTech,
    HighlightImg: Icons.VardHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Talent Sourcing & Candidate Hub",
        desc: "AI-matched candidate profile cards with automated resume parsing",
        Component: Icons.VardGalleryOne,
      },
      {
        id: "mob-2",
        title: "Interview Pipeline & Scheduling",
        desc: "Multi-round interview workflow with interviewer evaluation scorecards",
        Component: Icons.VardGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Offer Lifecycle & Digital Sign",
        desc: "Automated compensation calculator and e-signature onboarding",
        Component: Icons.VardGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Talent Sourcing & Candidate Hub",
        type: "mobile",
        desc: "AI-matched candidate profile cards with automated resume parsing",
        Component: Icons.VardGalleryOne,
      },
      {
        id: "screen-2",
        title: "Interview Pipeline & Scheduling",
        type: "mobile",
        desc: "Multi-round interview workflow with interviewer evaluation scorecards",
        Component: Icons.VardGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Offer Lifecycle & Digital Sign",
        type: "mobile",
        desc: "Automated compensation calculator and e-signature onboarding",
        Component: Icons.VardGalleryThree,
      },
    ],
  },
  dnp: {
    id: "dnp",
    MainImg: Icons.DnpGalleryMain,
    TechImg: Icons.DnpTech,
    HighlightImg: Icons.DnpHighlights,
    webScreens: [
      {
        id: "web-1",
        title: "Billing & Invoicing Workspace",
        desc: "Dual soft/hard copy invoice generator with automated tax breakdown",
        Component: Icons.DnpGalleryOne,
      },
      {
        id: "web-2",
        title: "Inventory & Stock Telemetry",
        desc: "Real-time stock depletion alerts and warehouse reorder triggers",
        Component: Icons.DnpGalleryTwo,
      },
      {
        id: "web-3",
        title: "Sales Ledger & Audit Reporting",
        desc: "Enterprise financial dashboards with multi-currency reconciliation",
        Component: Icons.DnpGalleryThree,
      },
    ],
    mobScreens: [],
    allScreens: [
      {
        id: "screen-1",
        title: "Billing & Invoicing Workspace",
        type: "web",
        desc: "Dual soft/hard copy invoice generator with automated tax breakdown",
        Component: Icons.DnpGalleryOne,
      },
      {
        id: "screen-2",
        title: "Inventory & Stock Telemetry",
        type: "web",
        desc: "Real-time stock depletion alerts and warehouse reorder triggers",
        Component: Icons.DnpGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Sales Ledger & Audit Reporting",
        type: "web",
        desc: "Enterprise financial dashboards with multi-currency reconciliation",
        Component: Icons.DnpGalleryThree,
      },
    ],
  },
  tbta: {
    id: "tbta",
    MainImg: Icons.TbtaGalleryMain,
    TechImg: Icons.TbtaTech,
    HighlightImg: Icons.TbtaHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Distributor & Retailer Network",
        desc: "Hierarchical partner hierarchy with live credit and order limits",
        Component: Icons.TbtaGalleryOne,
      },
      {
        id: "mob-2",
        title: "Daily Price & Commodity Bulletin",
        desc: "Real-time market price push with instant discount authorization",
        Component: Icons.TbtaGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Event Streaming & Video Hub",
        desc: "Live trade broadcasts and recorded product demonstration vault",
        Component: Icons.TbtaGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Distributor & Retailer Network",
        type: "mobile",
        desc: "Hierarchical partner hierarchy with live credit and order limits",
        Component: Icons.TbtaGalleryOne,
      },
      {
        id: "screen-2",
        title: "Daily Price & Commodity Bulletin",
        type: "mobile",
        desc: "Real-time market price push with instant discount authorization",
        Component: Icons.TbtaGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Event Streaming & Video Hub",
        type: "mobile",
        desc: "Live trade broadcasts and recorded product demonstration vault",
        Component: Icons.TbtaGalleryThree,
      },
    ],
  },
  fliber: {
    id: "fliber",
    MainImg: Icons.FliberGalleryMain,
    TechImg: Icons.FliberTech,
    HighlightImg: Icons.FliberHighlights,
    webScreens: [
      {
        id: "web-1",
        title: "Wealth Dashboard & Asset Portfolio",
        desc: "Consolidated view of equity, mutual funds, gold and fixed income",
        Component: Icons.FliberGalleryOne,
      },
      {
        id: "web-2",
        title: "Financial Goal Planner",
        desc: "Monte Carlo simulation for retirement and education investment target",
        Component: Icons.FliberGalleryTwo,
      },
      {
        id: "web-3",
        title: "Tax Optimization & Advisory Engine",
        desc: "Automated tax harvesting suggestions and capital gain reports",
        Component: Icons.FliberGalleryThree,
      },
    ],
    mobScreens: [],
    allScreens: [
      {
        id: "screen-1",
        title: "Wealth Dashboard & Asset Portfolio",
        type: "web",
        desc: "Consolidated view of equity, mutual funds, gold and fixed income",
        Component: Icons.FliberGalleryOne,
      },
      {
        id: "screen-2",
        title: "Financial Goal Planner",
        type: "web",
        desc: "Monte Carlo simulation for retirement and education investment target",
        Component: Icons.FliberGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Tax Optimization & Advisory Engine",
        type: "web",
        desc: "Automated tax harvesting suggestions and capital gain reports",
        Component: Icons.FliberGalleryThree,
      },
    ],
  },
  "native-special": {
    id: "native-special",
    MainImg: Icons.NsGalleryMain,
    TechImg: Icons.NsTech,
    HighlightImg: Icons.NsHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Product Showcase & Native Catalog",
        desc: "Rich visual catalog celebrating authentic regional delicacies",
        Component: Icons.NsGalleryOne,
      },
      {
        id: "mob-2",
        title: "Express Cart & Dynamic Discounts",
        desc: "One-click checkout with transparent shipping & discount breakdown",
        Component: Icons.NsGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Order Tracking & Dispatch Timeline",
        desc: "Live parcel tracking with status toast alerts and digital receipt",
        Component: Icons.NsGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Product Showcase & Native Catalog",
        type: "mobile",
        desc: "Rich visual catalog celebrating authentic regional delicacies",
        Component: Icons.NsGalleryOne,
      },
      {
        id: "screen-2",
        title: "Express Cart & Dynamic Discounts",
        type: "mobile",
        desc: "One-click checkout with transparent shipping & discount breakdown",
        Component: Icons.NsGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Order Tracking & Dispatch Timeline",
        type: "mobile",
        desc: "Live parcel tracking with status toast alerts and digital receipt",
        Component: Icons.NsGalleryThree,
      },
    ],
  },
  "ride-sharing": {
    id: "ride-sharing",
    MainImg: Icons.FmfGalleryMain,
    TechImg: Icons.FmfTech,
    HighlightImg: Icons.FmfHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Smart Route Ride Matcher",
        desc: "Instant passenger-to-driver route correlation and empty seat pooling",
        Component: Icons.FmfGalleryOne,
      },
      {
        id: "mob-2",
        title: "Live GPS Trip Tracking & SOS",
        desc: "Real-time telemetry map with in-app emergency alert button",
        Component: Icons.FmfGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Fair Cost Split & Wallet Checkout",
        desc: "Automated toll and fuel cost division with instant UPI pay",
        Component: Icons.FmfGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Smart Route Ride Matcher",
        type: "mobile",
        desc: "Instant passenger-to-driver route correlation and empty seat pooling",
        Component: Icons.FmfGalleryOne,
      },
      {
        id: "screen-2",
        title: "Live GPS Trip Tracking & SOS",
        type: "mobile",
        desc: "Real-time telemetry map with in-app emergency alert button",
        Component: Icons.FmfGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Fair Cost Split & Wallet Checkout",
        type: "mobile",
        desc: "Automated toll and fuel cost division with instant UPI pay",
        Component: Icons.FmfGalleryThree,
      },
    ],
  },
  "snap-m": {
    id: "snap-m",
    MainImg: Icons.SnapGalleryMain,
    TechImg: Icons.SnapTech,
    HighlightImg: Icons.SnapHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "AI Media Gallery & Smart Albums",
        desc: "Automated photo tagging, album curation and timeline organization",
        Component: Icons.SnapGalleryOne,
      },
      {
        id: "mob-2",
        title: "Document Scanner & PDF Convert",
        desc: "Edge-detection camera scanner with direct multi-page PDF generation",
        Component: Icons.SnapGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Self-Destruct & Privacy Timer",
        desc: "Configurable scheduled auto-deletion for confidential document security",
        Component: Icons.SnapGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "AI Media Gallery & Smart Albums",
        type: "mobile",
        desc: "Automated photo tagging, album curation and timeline organization",
        Component: Icons.SnapGalleryOne,
      },
      {
        id: "screen-2",
        title: "Document Scanner & PDF Convert",
        type: "mobile",
        desc: "Edge-detection camera scanner with direct multi-page PDF generation",
        Component: Icons.SnapGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Self-Destruct & Privacy Timer",
        type: "mobile",
        desc: "Configurable scheduled auto-deletion for confidential document security",
        Component: Icons.SnapGalleryThree,
      },
    ],
  },
  "learning-management": {
    id: "learning-management",
    MainImg: Icons.UmsGalleryMain,
    TechImg: Icons.UmsTech,
    HighlightImg: Icons.UmsHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Course Catalog & Video Classroom",
        desc: "Interactive video player with chapter bookmarks and quiz popups",
        Component: Icons.UmsGalleryOne,
      },
      {
        id: "mob-2",
        title: "Student Progress & Gamification",
        desc: "Learning streak tracker, skill badges and certificate verification",
        Component: Icons.UmsGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Live Doubt Clearance & Notes",
        desc: "Real-time instructor messaging and collaborative study notepad",
        Component: Icons.UmsGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Course Catalog & Video Classroom",
        type: "mobile",
        desc: "Interactive video player with chapter bookmarks and quiz popups",
        Component: Icons.UmsGalleryOne,
      },
      {
        id: "screen-2",
        title: "Student Progress & Gamification",
        type: "mobile",
        desc: "Learning streak tracker, skill badges and certificate verification",
        Component: Icons.UmsGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Live Doubt Clearance & Notes",
        type: "mobile",
        desc: "Real-time instructor messaging and collaborative study notepad",
        Component: Icons.UmsGalleryThree,
      },
    ],
  },
  referral: {
    id: "referral",
    MainImg: Icons.SdGalleryMain,
    TechImg: Icons.SdTech,
    HighlightImg: Icons.SdHighlights,
    webScreens: [],
    mobScreens: [
      {
        id: "mob-1",
        title: "Member Referral Dashboard",
        desc: "Personalized referral link sharing with live conversion status",
        Component: Icons.SdGalleryOne,
      },
      {
        id: "mob-2",
        title: "Reward Tier & Cashout Center",
        desc: "Milestone bonus unlocking and direct bank payout processing",
        Component: Icons.SdGalleryTwo,
      },
      {
        id: "mob-3",
        title: "Network Analytics & Activity",
        desc: "Multi-tier affiliate tree visualization and engagement telemetry",
        Component: Icons.SdGalleryThree,
      },
    ],
    allScreens: [
      {
        id: "screen-1",
        title: "Member Referral Dashboard",
        type: "mobile",
        desc: "Personalized referral link sharing with live conversion status",
        Component: Icons.SdGalleryOne,
      },
      {
        id: "screen-2",
        title: "Reward Tier & Cashout Center",
        type: "mobile",
        desc: "Milestone bonus unlocking and direct bank payout processing",
        Component: Icons.SdGalleryTwo,
      },
      {
        id: "screen-3",
        title: "Network Analytics & Activity",
        type: "mobile",
        desc: "Multi-tier affiliate tree visualization and engagement telemetry",
        Component: Icons.SdGalleryThree,
      },
    ],
  },
};

/**
 * Helper to get project SVG data safely
 */
export function getProjectSvgData(projectId: string): ProjectSvgData | undefined {
  return PROJECT_SVG_MAP[projectId];
}
