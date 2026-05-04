import { Award, BookOpen, Calendar, Mic, Users } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../components/icons/BrandIcons";
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
    title: "Author's Coaching",
    offerings: [
      {
        title: "Writing Skills Development for Young Learners",
        description:
          "Coaching children and teens to improve writing through creative exercises and personalized feedback.",
      },
      {
        title: "Online Writing Masterclass Series",
        description:
          "Refine writing, publishing strategies, and author branding through expert feedback and peer networking.",
      },
    ],
    intro: "For authors who want their work to stand,",
    description:
      "I provide structured, personalized coaching to help you write with confidence, clarity, authenticity, and purpose—from idea to final draft.",
    featuresLabel: "Services include:",
    features: [
      "Manuscript development — Architect book ideas into coherent, powerful structures",
      "Writing mentorship & accountability — Guide you from concept → manuscript → publication readiness",
      "Editorial refinement and honest and structural feedback designed to elevate the work — Refine language for clarity, credibility, and tone while challenging weak thinking, vague arguments, and unfocused storytelling",
    ],
    note: "This service is best suited for authors who are serious about producing work of substance and credibility, rather than speed or volume.",
    cta: "Book Me",
  },
  {
    icon: Mic,
    title: "Youth Coaching",
    subtitle: "Speaking & Learning programs for Schools and Educational Institutions",
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
    suitedFor: [
      "Structure",
      "High standards",
      "Long-term student development",
    ],
    cta: "Invite me to your school or institution",
  },
];

export const socialLinks = [
  { icon: LinkedInIcon, url: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: XIcon, url: "https://twitter.com/your-profile", label: "X (Twitter)" },
  { icon: FacebookIcon, url: "https://facebook.com/your-profile", label: "Facebook" },
  { icon: InstagramIcon, url: "https://instagram.com/your-profile", label: "Instagram" },
  { icon: YouTubeIcon, url: "https://youtube.com/@your-channel", label: "YouTube" },
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
