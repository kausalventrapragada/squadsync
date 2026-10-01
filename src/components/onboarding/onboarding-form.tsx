"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = ["About you", "Skills", "Interests", "Experience", "Availability"];
const skillOptions = ["Java", "JavaScript", "C#", "Python", "React", "UI/UX", "AI / ML", "IoT", "Data Science", "Git / GitHub"];
const interestOptions = ["AI", "Gaming", "Healthcare", "FinTech", "Robotics", "Education", "Web", "Sustainability"];

export function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Java"]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Web"]);

  const toggle = (value: string, setter: (items: string[]) => void, current: string[]) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  return (
    <main className="onboarding-page">
      <header className="onboarding-topbar">
        <Link href="/" className="brand-mark">SQUAD <span>SYNC</span></Link>
        <span className="step-counter">Step {step + 1} of {steps.length}</span>
      </header>
      <section className="onboarding-wrap">
        <div className="progress-row" aria-label={`Step ${step + 1} of ${steps.length}`}>
          {steps.map((label, index) => <div key={label} className={`progress-step ${index <= step ? "active" : ""}`}><span>{index + 1}</span><small>{label}</small></div>)}
        </div>

        <div className="onboarding-card">
          {step === 0 && <StepAbout />}
          {step === 1 && <StepChoices title="What can you contribute?" subtitle="Pick the skills you can bring to a squad. You can change these later." options={skillOptions} selected={selectedSkills} onToggle={(value) => toggle(value, setSelectedSkills, selectedSkills)} />}
          {step === 2 && <StepChoices title="What do you want to build?" subtitle="Your interests help us surface projects that actually fit you." options={interestOptions} selected={selectedInterests} onToggle={(value) => toggle(value, setSelectedInterests, selectedInterests)} />}
          {step === 3 && <StepExperience />}
          {step === 4 && <StepAvailability />}

          <div className="onboarding-actions">
            {step > 0 ? <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button> : <span />}
            {step < steps.length - 1 ? <Button onClick={() => setStep(step + 1)}>Continue <span aria-hidden="true">→</span></Button> : <Button href="/app/dashboard">Finish profile <span aria-hidden="true">→</span></Button>}
          </div>
        </div>
      </section>
    </main>
  );
}

function StepAbout() {
  return <div className="onboarding-content"><p className="eyebrow">About you</p><h1>Tell us about yourself.</h1><p className="muted-copy">This information helps your profile make sense to project creators.</p><div className="form-grid"><label className="field"><span className="field-label">College / University</span><input className="input" placeholder="Your college" /></label><label className="field"><span className="field-label">Course</span><input className="input" placeholder="e.g. B.Tech" /></label><label className="field"><span className="field-label">Specialization</span><input className="input" placeholder="e.g. Computer Science" /></label><label className="field"><span className="field-label">Year</span><select className="input" defaultValue="1"><option value="1">1st year</option><option value="2">2nd year</option><option value="3">3rd year</option><option value="4">4th year</option></select></label></div></div>;
}

function StepChoices({ title, subtitle, options, selected, onToggle }: { title: string; subtitle: string; options: string[]; selected: string[]; onToggle: (value: string) => void }) {
  return <div className="onboarding-content"><p className="eyebrow">Your profile</p><h1>{title}</h1><p className="muted-copy">{subtitle}</p><div className="choice-grid">{options.map((option) => <button type="button" key={option} className={`choice ${selected.includes(option) ? "selected" : ""}`} aria-pressed={selected.includes(option)} onClick={() => onToggle(option)}>{option}<span aria-hidden="true">{selected.includes(option) ? "✓" : "+"}</span></button>)}</div><div className="selected-line"><strong>Selected</strong>{selected.length ? selected.join(" · ") : "Nothing selected yet"}</div></div>;
}

function StepExperience() {
  return <div className="onboarding-content"><p className="eyebrow">Experience</p><h1>Where are you right now?</h1><p className="muted-copy">Choose the description that feels closest. This is not a test.</p><div className="experience-list">{[["Beginner","I'm learning and building my first projects."],["Intermediate","I've built projects before and can contribute independently."],["Advanced","I'm comfortable owning technical or project work."]].map(([title, copy], index) => <label className="experience-option" key={title}><input type="radio" name="experience" defaultChecked={index === 1} /><span><strong>{title}</strong><small>{copy}</small></span></label>)}</div></div>;
}

function StepAvailability() {
  return <div className="onboarding-content"><p className="eyebrow">Availability</p><h1>How much time can you contribute?</h1><p className="muted-copy">Projects use this to avoid mismatched expectations.</p><label className="field"><span className="field-label">Hours per week</span><input className="input" type="number" min="1" max="40" defaultValue="6" /></label><div className="availability-grid"><label><input type="checkbox" defaultChecked /> Weekday evenings</label><label><input type="checkbox" defaultChecked /> Weekends</label><label><input type="checkbox" /> Weekday mornings</label></div></div>;
}
