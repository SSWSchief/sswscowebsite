export const PRICING = { overagePerTon: 85, fuelEnvironmentalPercent: 5, salesTaxPercent: 8.375 };
export const dumpsters = [
  { id: "20-yard", name: "20 Yard", price: 425, rentalDays: 7, includedTons: 4, extraDayRate: 25, featured: true,
    idealFor: ["Home Cleanouts", "Garage & Estate Cleanouts", "Kitchen/Bath Remodels", "Small Roofing Jobs", "Yard Waste", "Small Construction Projects"],
    note: "Not for concrete, dirt, rock, asphalt, or other heavy materials." },
  { id: "40-yard", name: "40 Yard", price: 525, rentalDays: 14, includedTons: 6, extraDayRate: 30, featured: false,
    idealFor: ["Large Construction Projects", "Demolition", "Commercial Cleanouts", "Major Renovations", "Roofing Tear-Offs", "Large-Scale Debris"],
    note: "Call dispatch before loading concrete, dirt, rock, asphalt, or other heavy materials." },
];
