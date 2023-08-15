type BillingPlanPeriod = 'monthly' | 'yearly';
type PlanTypes = 'arcade' | 'advanced' | 'pro';
type Step = 1 | 2 | 3 | 4 | 5;

interface PlanModel {
    type: PlanTypes;
    monthlyBilling: string;
    yearlyBilling: string;
    freeMonthPeriod: string;
}

type AddOnTypes = 'online-service' | 'larger-storage' | 'customizable-profile';

interface AddOn {
    type: AddOnTypes;
    addOn: string;
    description: string;
    monthlyBilling: string;
    yearlyBilling: string;
}

type OrNull<T> = T | null;

export type { BillingPlanPeriod, PlanModel, PlanTypes, Step, AddOnTypes, AddOn, OrNull };
