"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";

const Pricing = () => {
    const posthog = usePostHog();
    const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cursorshorts.com";

    const plans = [
        {
            name: "Starter",
            description: "Perfect for getting started",
            price: "$39",
            features: [
                "2,000 credits per month",
                "HD quality",
                "Standard voice library",
                "Basic image models",
                "Email support",
            ],
            cta: "Get Started",
            popular: false,
            href: `${APP_URL}/checkout?plan=starter-plan`,
        },
        {
            name: "Growth",
            description: "Most popular for creators",
            price: "$69",
            features: [
                "5,000 credits per month",
                "FHD quality",
                "Premium voice library",
                "Advanced image models",
                "Priority support",
            ],
            cta: "Get Started",
            popular: true,
            current: false, // Assuming public landing page doesn't show "current"
            href: `${APP_URL}/checkout?plan=growth-plan`,
        },
        {
            name: "Ultra",
            description: "For power users",
            price: "$199",
            features: [
                "15,000 credits per month",
                "4K quality",
                "All image models",
                "Dedicated support",
                "Discord community access",
            ],
            cta: "Get Started",
            popular: false,
            href: `${APP_URL}/checkout?plan=ultra-plan`,
        },
        {
            name: "Team",
            description: "For teams and enterprises",
            price: "Custom",
            features: [
                "Unlimited credits",
                "4K quality",
                "All image models",
                "Dedicated account manager",
                "Priority support",
                "Team collaboration features",
                "Custom integrations",
            ],
            cta: "Contact Sales",
            popular: false,
            href: "https://calendly.com/thoufic/cursorshorts-meeting",
        },
    ];

    return (
        <section className="py-24" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gray-800 text-gray-300 text-sm font-medium mb-6">
                        Flexible Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Create Amazing Videos
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your video creation needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 flex flex-col h-full ${plan.popular
                                ? "bg-white text-black ring-2 ring-purple-500 scale-105 z-10 shadow-xl"
                                : "bg-transparent "
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-purple-600  text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="p-3 bg-gray-100/10 rounded-xl w-fit mb-6">
                                    {/* Placeholder icons based on plan name, simplified for now */}
                                    {index === 0 && <IconStarter className={plan.popular ? "text-black" : ""} />}
                                    {index === 1 && <IconGrowth className={plan.popular ? "text-black" : ""} />}
                                    {index === 2 && <IconUltra className={plan.popular ? "text-black" : ""} />}
                                    {index === 3 && <IconTeam className={plan.popular ? "text-black" : ""} />}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={`text-sm ${plan.popular ? "text-gray-600" : "text-gray-400"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.price !== "Custom" && (
                                    <span className={`text-sm ml-1 ${plan.popular ? "text-gray-600" : "text-gray-400"}`}>
                                        /mo
                                    </span>
                                )}
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 rounded-full p-0.5 ${plan.popular ? "bg-black " : "bg-gray-800 text-gray-400"}`}>
                                            <Check size={10} />
                                        </div>
                                        <span className={`text-sm ${plan.popular ? "text-gray-700" : "text-gray-400"}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                asChild
                                className={`w-full py-6 rounded-xl font-semibold transition-all ${plan.popular
                                    ? "bg-purple-500 hover:bg-purple-600  shadow-lg shadow-purple-500/25"
                                    : "bg-white text-black hover:bg-gray-200"
                                    }`}
                            >
                                <a
                                    href={plan.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        posthog?.capture("pricing_plan_clicked", {
                                            plan_name: plan.name,
                                            price: plan.price
                                        })
                                    }}
                                >
                                    {plan.cta}
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Secure Payments Footer */}
                <div className="border rounded-2xl p-8 bg-white border-gray-200">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Check className="w-5 h-5 text-black" />
                        <h4 className="font-bold text-black">Secure Payments</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 p-3 bg-gray-100 rounded-full">
                                <IconLock className="w-6 h-6 text-black" />
                            </div>
                            <h5 className="font-bold text-black text-sm mb-1">256-bit SSL</h5>
                            <p className="text-gray-500 text-xs">Fully encrypted</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 p-3 bg-gray-100 rounded-full">
                                <IconShield className="w-6 h-6 text-black" />
                            </div>
                            <h5 className="font-bold text-black text-sm mb-1">PCI Compliant</h5>
                            <p className="text-gray-500 text-xs">Industry standard</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 p-3 bg-gray-100 rounded-full">
                                <IconSafe className="w-6 h-6 text-black" />
                            </div>
                            <h5 className="font-bold text-black text-sm mb-1">Safe & Secure</h5>
                            <p className="text-gray-500 text-xs">Your data protected</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-xs text-gray-400">Powered by <span className="underline decoration-gray-400">Dodo Payments</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple SVG Icons
const IconStarter = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
)

const IconGrowth = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
)

const IconUltra = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
)

const IconTeam = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
)

const IconLock = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
)

const IconShield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
)

const IconSafe = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
)

export default Pricing;
