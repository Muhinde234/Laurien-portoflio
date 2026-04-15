import {
  Award,
  BookOpen,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Mic,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import laurien from "../assets/laurien.jpeg";
import prof1 from "../assets/prof1.jpg";

export const CALENDLY_URL = "https://calendly.com/laurienikuzwe25";
export const FAQ_URL = "/faq.html";
export const CHATBASE_ID = "oVsrKnGcv-xjLc4RbEmVE";

export const navItems = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work With Me", id: "booking" },
  { label: "Contact", id: "contact" },
];

export const services = [
  {
    icon: BookOpen,
    title: "Author Coaching",
    description:
      "For writers who are serious about the work — not just the idea of writing a book. I provide structured, personalized coaching to help you write with confidence, clarity, and purpose from idea to final draft.",
    features: [
      "Manuscript development — Structure and architect your book from the inside out",
      "Writing mentorship & accountability — Guided progress from concept to publication-ready draft",
      "Editorial refinement — Precise, honest feedback that strengthens clarity, argument, and tone",
    ],
    note: "This engagement is for authors committed to producing work of substance — not speed.",
    cta: "Begin the Work",
  },
  {
    icon: Mic,
    title: "Youth Coaching & School Programs",
    description:
      "Speaking and learning programs for schools and institutions building disciplined, capable students — not passive learners.",
    features: [
      "Keynote addresses on literacy, purpose, and academic life",
      "Masterclasses in literacy, life skills, and academic writing",
      "Program and curriculum design and development",
    ],
    focusAreas: [
      "Stronger learning skills and strategies",
      "Academic writing mastery",
      "Critical thinking and expression",
      "Career clarity and communication",
      "Life skills through language",
    ],
    cta: "Invite Me to Your Institution",
  },
];

export const socialLinks = [
  { icon: Linkedin, url: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Twitter, url: "https://twitter.com/your-profile", label: "Twitter" },
  { icon: Facebook, url: "https://facebook.com/your-profile", label: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/your-profile", label: "Instagram" },
  { icon: Youtube, url: "https://youtube.com/@your-channel", label: "YouTube" },
];

export const testimonials = [
  {
    name: "Irakoze Pacifique",
    role: "Published Author",
    image: prof1,
    content:
      "Working with Coach Laurien transformed my manuscript from a rough draft into a published book. Her guidance was precise, structured, and exactly what I needed to produce work I am proud of.",
    rating: 5,
  },
  {
    name: "Shema Samuel",
    role: "Content Manager",
    image: prof1,
    content:
      "Laurien's structured approach helped us develop content that actually connects. She has a rare ability to cut through the vague and get to what truly matters.",
    rating: 5,
  },
  {
    name: "Sophia Njeri",
    role: "High School Principal",
    image: prof1,
    content:
      "The program Laurien delivered at our school was exceptional. Students left with skills, clarity, and a standard they now hold themselves to. That is rare.",
    rating: 5,
  },
];

export const bookingQualifications = [
  "You are writing a book and want structured, honest guidance — not just encouragement",
  "You lead a school or institution seeking quality youth programs with lasting impact",
  "You are a parent invested in your child's academic and personal development",
  "You represent a mission-driven organization committed to educational outcomes",
  "You prioritize substance over speed, and results over reassurance",
];

export const featuredLogos = [
  "Independent Authors",
  "Education Leaders",
  "Schools",
  "Community Programs",
  "Nonprofits",
];

export const aboutBadges = {
  awardIcon: Award,
};

export const sectionIcons = {
  services: BookOpen,
  testimonials: Users,
  booking: Calendar,
};

export const profileImages = {
  laurien,
};
