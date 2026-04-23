import { createContext, useContext, useState, useCallback } from "react";

export const DEFAULT_CONTENT = {
  hero: {
    label: "Youth Development & Author Coach · Founder, KELP Education",
    headlineStart: "Hi, I am",
    headlineHighlight: "Coach Laurien.",
    subheadline:
      "I help emerging authors, schools, parents, and mission-driven organizations who are serious and ready to have their desired goals achieved.",
    primaryCta: "Begin the Work",
    secondaryCta: "Explore Services",
    tagline: "Where serious work begins",
  },
  about: {
    label: "About Coach Laurien",
    headlineStart: "This is not",
    headlineHighlight: "motivational coaching.",
    quote:
      "It is structured, precise, hands-on work — built to produce outcomes that hold over time.",
    body1:
      "I am a youth development and emerging authors' coach and the founder of KELP Education. My work is positioned at a premium level because it is deep, hands-on, and has a sustained impact. I partner with clients through focused and collaborative engagements designed to achieve precision, clarity, and meaningful outcomes.",
    body2:
      "I am not a motivational coach; rather, I protect standards, strengthen thinking, and ensure that I serve with integrity and excellence.",
    valuesHeading:
      "Clients come to me when they have decided to prioritize:",
    values: [
      "Depth over hesitation",
      "Discipline over shortcuts",
      "Excellence over convenience",
    ],
    closing:
      "From book development to youth programs and school speaking, I guide clients through a structured process that moves from raw level to credible impact. Whether you are writing your first book, developing educational content, or engaging learners through presentations and programs — I am your right helper.",
    cta: "Book Me",
    statusPill: "Accepting new clients · Author Coaching & School Programs",
  },
  services: [
    {
      title: "Author's Coaching",
      intro: "For authors who want their work to stand,",
      subtitle: "",
      description:
        "I provide structured, personalized coaching to help you write with confidence, clarity, authenticity, and purpose—from idea to final draft.",
      partnerLabel: "",
      partnerWith: [],
      featuresLabel: "Services include:",
      features: [
        "Manuscript development — Architect book ideas into coherent, powerful structures",
        "Writing mentorship & accountability — Guide you from concept → manuscript → publication readiness",
        "Editorial refinement and honest and structural feedback designed to elevate the work — Refine language for clarity, credibility, and tone while challenging weak thinking, vague arguments, and unfocused storytelling",
      ],
      focusAreas: [],
      suitedFor: [],
      note: "This service is best suited for authors who are serious about producing work of substance and credibility, rather than speed or volume.",
      cta: "Book Me",
    },
    {
      title: "Youth Coaching",
      intro: "",
      subtitle:
        "Speaking & Learning programs for Schools and Educational Institutions",
      description:
        "Inspiring the next generation through language, literacy, and life skills, building disciplined thinkers, not passive learners.",
      partnerLabel: "I partner with schools and educational institutions to:",
      partnerWith: [
        "Strengthen English proficiency and academic communication",
        "Develop student confidence and critical thinking in writing and speaking",
        "Deliver engaging talks and workshops that equip students with learning, academic skills and discipline, communication skills, confidence, vision, and purpose.",
      ],
      featuresLabel: "Services Include:",
      features: [
        "Keynote speeches",
        "Literacy and life-skills masterclasses and workshops",
        "Learning and purpose talks",
        "Program and course design and development",
      ],
      focusAreas: [
        "Better learning skills and strategies",
        "Literacy & academic writing mastery",
        "Critical thinking and expression",
        "Career clarity and communication skills",
        "Life skills through language",
      ],
      suitedFor: ["Structure", "High standards", "Long-term student development"],
      note: "",
      cta: "Invite me to your school or institution",
    },
  ],
  booking: {
    label: "Work With Me",
    headingStart: "This work begins",
    headingHighlight: "with a conversation.",
    subtext:
      "If you have read this far and recognize yourself in what I describe, I want to hear from you.",
    qualificationsHeading: "This engagement is right for you if:",
    qualifications: [
      "You are writing a book and want structured, honest guidance — not just encouragement",
      "You lead a school or institution seeking quality youth programs with lasting impact",
      "You are a parent invested in your child's academic and personal development",
      "You represent a mission-driven organization committed to educational outcomes",
      "You prioritize substance over speed, and results over reassurance",
    ],
    primaryCta: "Book a Consultation",
    microcopy: "15-minute call · No commitment required · Response within 48 hours",
    coachName: "Coach Laurien",
    coachRole: "Founder, KELP Education",
    responseTime: "Responding within 48 hrs.",
  },
  trustedBy: [
    "Independent Authors",
    "Education Leaders",
    "Schools",
    "Community Programs",
    "Nonprofits",
  ],
  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    x: "https://twitter.com/your-profile",
    facebook: "https://facebook.com/your-profile",
    instagram: "https://instagram.com/your-profile",
    youtube: "https://youtube.com/@your-channel",
  },
  contact: {
    email: "hello@coachlaurien.com",
    calendlyUrl: "https://calendly.com/laurienikuzwe25",
    label: "Ready to Begin?",
    headlineStart: "Let's start a",
    headlineHighlight: "conversation.",
    subtext: "Fill in the form and I'll get back to you within 48 hours. Every serious enquiry receives a thoughtful, personal response.",
    emailSub: "Direct line — always read personally",
    responseTime: "Within 48 hours",
    responseTimeSub: "For all serious enquiries",
    availability: "Remote & In-person",
    availabilitySub: "Author coaching & school programs",
    tagline: "From book development to youth programs — I am your right helper.",
    successTitle: "Message Received.",
    successMessage: "Thank you for reaching out. I'll be in touch within 48 hours with a thoughtful response.",
    submitLabel: "Send Message",
    disclaimer: "No spam, ever. I respond personally within 48 hours.",
  },
  footer: {
    bio: "Youth development and emerging authors' coach.\nFounder of KELP Education.",
    tagline: "Where serious work begins.",
    ctaHeadingStart: "Let's do the work",
    ctaHeadingHighlight: "that holds.",
  },
  settings: {
    adminPassword: "laurien2024",
  },
  profilePhoto: null,
  aboutPhoto: null,
};

function deepMerge(defaults, saved) {
  const result = { ...defaults };
  for (const key of Object.keys(saved)) {
    if (
      key in defaults &&
      typeof defaults[key] === "object" &&
      !Array.isArray(defaults[key]) &&
      saved[key] !== null &&
      typeof saved[key] === "object" &&
      !Array.isArray(saved[key])
    ) {
      result[key] = deepMerge(defaults[key], saved[key]);
    } else {
      result[key] = saved[key];
    }
  }
  return result;
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem("coach_laurien_content");
      if (saved) {
        return deepMerge(DEFAULT_CONTENT, JSON.parse(saved));
      }
    } catch {
     
    }
    return DEFAULT_CONTENT;
  });

  const updateContent = useCallback((section, data) => {
    setContent((prev) => {
      const next = { ...prev, [section]: data };
      localStorage.setItem("coach_laurien_content", JSON.stringify(next));
      return next;
    });
  }, []);

  const resetContent = useCallback(() => {
    localStorage.removeItem("coach_laurien_content");
    setContent(DEFAULT_CONTENT);
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
