"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/lib/CartContext";
import EstimateSummary from "./EstimateSummary";
import { ChevronLeft } from "lucide-react";
import styles from "@/styles/ContactForm.module.css";

const TOTAL_STEPS = 6; // 5 steps + 1 confirmation

const locationOptions = ["New York City", "Westchester", "Long Island", "New Jersey", "Connecticut", "Eastern PA", "Other"];
const themeChips = ["Princess", "Jungle", "Pastel Dream", "Minimalist White", "Barbie", "Custom"];
const durationOptions = ["2 Hours", "3 Hours", "4 Hours", "5+ Hours", "Full Day"];
const hearOptions = ["Instagram", "TikTok", "Google", "Word of Mouth", "Event Planner", "Other"];

function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validatePhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    location: string;
    date: string;
    theme: string;
    numKids: number;
    duration: string;
    hearAbout: string;
    notes: string;
}

export default function ContactForm() {
    const { items } = useCart();
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<"forward" | "back">("forward");
    const [form, setForm] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        location: "",
        date: "",
        theme: "",
        numKids: 1,
        duration: "",
        hearAbout: "",
        notes: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    const canAdvance = useCallback(() => {
        switch (step) {
            case 0: return form.name.trim().length > 0 && validatePhone(form.phone) && validateEmail(form.email);
            case 1: return form.location !== "" && form.date !== "";
            case 2: return form.theme !== "" && form.numKids >= 1 && form.duration !== "";
            case 3: return form.hearAbout !== "";
            case 4: return true; // notes optional
            default: return false;
        }
    }, [step, form]);

    const next = () => {
        if (!canAdvance()) return;
        setDirection("forward");
        if (step === TOTAL_STEPS - 2) {
            // Final step — submit
            setSubmitted(true);
            setStep(step + 1);
        } else {
            setStep(step + 1);
        }
    };

    const back = () => {
        if (step > 0) {
            setDirection("back");
            setStep(step - 1);
        }
    };

    const update = (field: keyof FormData, value: string | number | string[]) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const setHearOption = (option: string) => {
        update("hearAbout", option);
    };

    const handlePhoneChange = (value: string) => {
        const formatted = formatPhone(value);
        update("phone", formatted);
        if (formatted.length > 0 && !validatePhone(formatted)) {
            setPhoneError("Please enter a valid US phone number");
        } else {
            setPhoneError("");
        }
    };

    const handleEmailChange = (value: string) => {
        update("email", value);
        if (value.length > 0 && !validateEmail(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    // Progress
    const progress = submitted ? 100 : ((step) / (TOTAL_STEPS - 1)) * 100;

    // Confirmation screen
    if (submitted && step === TOTAL_STEPS - 1) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.confirmation}>
                    <div className={styles.logoMark}>
                        <span className={styles.logoLuxe}>LUXE</span>
                        <span className={styles.logoPlay}>PLAY</span>
                    </div>
                    <h2 className={styles.confirmTitle}>Thank You, {form.name.split(" ")[0]}!</h2>
                    <p className={styles.confirmText}>
                        We&apos;ve received your request and will be in touch within 2 hours during business hours.
                    </p>
                    <div className={styles.confirmDivider} />
                    <p className={styles.confirmSubtext}>
                        Check your inbox at <strong>{form.email}</strong> for a confirmation.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            {/* Estimate summary above form */}
            {step === 0 && items.length > 0 && (
                <div className={styles.estimateBlock}>
                    <EstimateSummary />
                </div>
            )}

            {/* Progress bar */}
            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <p className={styles.stepIndicator}>Step {step + 1} of {TOTAL_STEPS - 1}</p>

            {/* Step content */}
            <div
                className={`${styles.stepContainer} ${direction === "forward" ? styles.fadeInRight : styles.fadeInLeft}`}
                key={step}
            >
                {/* Step 1: Contact */}
                {step === 0 && (
                    <div className={styles.step}>
                        <h2 className={styles.question}>First, how can we reach you?</h2>
                        <div className={styles.contactFields}>
                            <input
                                type="text"
                                className={styles.textInput}
                                placeholder="Full name"
                                value={form.name}
                                onChange={(e) => update("name", e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className={styles.contactFields} style={{ marginTop: "24px" }}>
                            <div className={styles.fieldGroup}>
                                <input
                                    type="tel"
                                    className={`${styles.textInput} ${phoneError ? styles.inputError : ""}`}
                                    placeholder="Phone number"
                                    value={form.phone}
                                    onChange={(e) => handlePhoneChange(e.target.value)}
                                />
                                {phoneError && <span className={styles.errorMsg}>{phoneError}</span>}
                            </div>
                            <div className={styles.fieldGroup}>
                                <input
                                    type="email"
                                    className={`${styles.textInput} ${emailError ? styles.inputError : ""}`}
                                    placeholder="Email address"
                                    value={form.email}
                                    onChange={(e) => handleEmailChange(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && next()}
                                />
                                {emailError && <span className={styles.errorMsg}>{emailError}</span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Event Details */}
                {step === 1 && (
                    <div className={styles.step}>
                        <h2 className={styles.question}>When and where is the celebration?</h2>
                        <div className={styles.contactFields}>
                            <div className={styles.fieldGroup} style={{ flex: 1.5 }}>
                                <input
                                    type="date"
                                    className={styles.dateInput}
                                    value={form.date}
                                    onChange={(e) => update("date", e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                            </div>
                            <div className={styles.fieldGroup} style={{ flex: 2 }}>
                                <select
                                    className={styles.dateInput}
                                    value={form.location}
                                    onChange={(e) => update("location", e.target.value)}
                                >
                                    <option value="" disabled>Select Location...</option>
                                    {locationOptions.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: The Vibe */}
                {step === 2 && (
                    <div className={styles.step}>
                        <h2 className={styles.question}>Let&apos;s talk about the vibe.</h2>

                        <p className={styles.stepIndicator} style={{ marginBottom: "16px" }}>Theme</p>
                        <div className={styles.chipGroup}>
                            {themeChips.map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    className={`${styles.chip} ${form.theme === t || (form.theme !== "" && !themeChips.includes(form.theme) && t === "Custom") ? styles.chipSelected : ""}`}
                                    onClick={() => update("theme", t === "Custom" ? " " : t)}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                        {(!themeChips.includes(form.theme) && form.theme !== "") && (
                            <input
                                type="text"
                                className={styles.textInput}
                                placeholder="Type your custom theme..."
                                value={form.theme.trim()}
                                onChange={(e) => update("theme", e.target.value)}
                                style={{ marginBottom: "24px" }}
                                autoFocus
                            />
                        )}

                        <div className={styles.contactFields} style={{ marginTop: "32px", alignItems: "flex-end" }}>
                            <div className={styles.fieldGroup}>
                                <p className={styles.stepIndicator} style={{ marginBottom: "16px" }}>Kids Attending</p>
                                <div className={styles.numberPicker}>
                                    <button
                                        type="button"
                                        className={styles.numberBtn}
                                        onClick={() => update("numKids", Math.max(1, form.numKids - 1))}
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        className={styles.numberInput}
                                        value={form.numKids}
                                        min={1}
                                        max={50}
                                        onChange={(e) => {
                                            const v = parseInt(e.target.value) || 1;
                                            update("numKids", Math.min(50, Math.max(1, v)));
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className={styles.numberBtn}
                                        onClick={() => update("numKids", Math.min(50, form.numKids + 1))}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className={styles.fieldGroup}>
                                <p className={styles.stepIndicator} style={{ marginBottom: "16px" }}>Duration</p>
                                <div className={styles.chipGroup} style={{ marginBottom: 0 }}>
                                    {durationOptions.map((d) => (
                                        <button
                                            key={d}
                                            type="button"
                                            className={`${styles.chip} ${form.duration === d ? styles.chipSelected : ""}`}
                                            onClick={() => update("duration", d)}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Hear about us */}
                {step === 3 && (
                    <div className={styles.step}>
                        <h2 className={styles.question}>How did you hear about us?</h2>
                        <div className={styles.chipGroup}>
                            {hearOptions.map((opt) => (
                                <button
                                    key={opt}
                                    type="button"
                                    className={`${styles.chip} ${form.hearAbout === opt ? styles.chipSelected : ""}`}
                                    onClick={() => setHearOption(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Notes */}
                {step === 4 && (
                    <div className={styles.step}>
                        <h2 className={styles.question}>Anything else we should know?</h2>
                        <textarea
                            className={styles.textArea}
                            placeholder="Venue details, special requests, theme inspiration — anything that helps us prepare."
                            value={form.notes}
                            onChange={(e) => update("notes", e.target.value)}
                            rows={4}
                        />
                    </div>
                )}
            </div>

            {/* Navigation buttons */}
            <div className={styles.nav}>
                {step > 0 && (
                    <button type="button" className={styles.backBtn} onClick={back}>
                        <ChevronLeft size={16} /> Back
                    </button>
                )}
                <div className={styles.navSpacer} />
                <button
                    type="button"
                    className={styles.continueBtn}
                    onClick={next}
                    disabled={!canAdvance()}
                >
                    {step === TOTAL_STEPS - 2 ? "Send My Request" : "Continue"}
                </button>
            </div>
        </div>
    );
}
