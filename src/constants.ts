import { 
  Heart, 
  Users, 
  Lightbulb, 
  Globe, 
  Calendar, 
  Video, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const LINKS = {
  feedback: "https://forms.gle/2koMusVhVxE79SXe7",
  linkedin: "https://www.linkedin.com/company/sebaid-foundation/",
  instagram: "https://www.instagram.com/sebaid_foundation/profilecard/?igsh=MWNraGVzNWI2M2Nzag==",
  facebook: "https://www.facebook.com/share/1GKRAfQuRQ/?mibextid=wwXIfr",
  email: "mailto:info@sebaid.org",
  phone: "tel:+233245436230",
  logo: "https://i.imgur.com/kWy9czd.png",
  location: "Accra, Ghana",
  youtube: "https://www.youtube.com/@sebaidfoundation"
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#portfolio" },
  { label: "Events", href: "#events" },
  { label: "Media", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export const PROGRAMS = [
  {
    title: "Health Equity",
    description: "Ensuring accessible healthcare services and education for underserved communities.",
    icon: Heart,
    image: "https://i.imgur.com/ixpGhy6.png"
  },
  {
    title: "Skill Development",
    description: "Empowering youth and women with vocational skills for sustainable livelihoods.",
    icon: Lightbulb,
    image: "https://i.imgur.com/WBrhCZ3.png"
  },
  {
    title: "Community Support",
    description: "Building resilient communities through infrastructure and social support systems.",
    icon: Users,
    image: "https://i.imgur.com/ixpGhy6.png"
  }
];

export const EVENTS = [
  {
    title: "Annual Health Screening",
    date: "March 15, 2026",
    location: "Accra Community Center",
    description: "Free health screening and consultation for community members."
  },
  {
    title: "Youth Skills Workshop",
    date: "April 22, 2026",
    location: "Kumasi Tech Hub",
    description: "A 3-day intensive workshop on digital literacy and vocational skills."
  },
  {
    title: "Charity Gala Night",
    date: "June 10, 2026",
    location: "Grand Hotel, Accra",
    description: "Fundraising event to support our ongoing community projects."
  }
];

export const VIDEOS = [
  {
    id: "s7rEYEQoTrY",
    title: "Beneficiary Testimonials",
    thumbnail: "https://img.youtube.com/vi/s7rEYEQoTrY/maxresdefault.jpg",
    duration: "2:30",
    description: "Hear directly from the people whose lives have been transformed by SebAid Foundation's initiatives."
  },
  {
    id: "57D-itnN1B8",
    title: "Adwumawura Initiative",
    thumbnail: "https://img.youtube.com/vi/57D-itnN1B8/maxresdefault.jpg",
    duration: "3:45",
    description: "Empowering local entrepreneurs and small business owners through our Adwumawura program."
  },
  {
    id: "4nkBRUtW6iI",
    title: "Pitch Day Highlights",
    thumbnail: "https://img.youtube.com/vi/4nkBRUtW6iI/maxresdefault.jpg",
    duration: "4:15",
    description: "Young innovators showcasing their ideas and solutions for community development."
  }
];
