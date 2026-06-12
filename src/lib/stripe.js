import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TgVLk5Wf1iVfbeP8azkx90X',
    'seeker_premium': 'price_1TgW6E5Wf1iVfbePIqwipqNF',
    'recruiter_growth': 'price_1TgW9Z5Wf1iVfbePKraYALSv',
    'recruiter_enterprise': 'price_1TgWAt5Wf1iVfbePmU53OHsc'
}