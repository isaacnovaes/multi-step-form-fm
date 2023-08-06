type BillingPlanPeriod = 'monthly' | 'yearly';
type PlanTypes = 'arcade' | 'advanced' | 'pro';

interface PlanModel {
    type: PlanTypes;
    monthlyBilling: string;
    yearlyBilling: string;
    freeMonthPeriod: string;
}

export type { BillingPlanPeriod, PlanModel, PlanTypes };
