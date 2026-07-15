# Design Decisions – RahuNow Redesign
Assessment Submission by Tanish Sanghvi
---

# Overview

This document outlines the design, UX, and technical decisions made while redesigning the RahuNow website.

The objective was **not simply to beautify the UI**, but to rethink the user experience from first principles and create a cleaner, more trustworthy, and more intuitive astrology platform.

The redesign focuses on:

- Better usability
- Strong visual hierarchy
- Faster navigation
- Consistent design system
- Mobile-first responsive experience
- Reduced cognitive load
- Modern interface while respecting the spiritual nature of astrology

---

# Design Philosophy

The original website contains a large amount of information but presents it in a visually inconsistent manner.

Major issues observed:

- Dark theme without purpose
- Too many accent colors
- Generic AI-generated layouts
- Weak typography hierarchy
- Inconsistent spacing
- Inconsistent card styles
- Navigation overload
- Little visual breathing space
- Repeated CTAs
- Poor content prioritization

Instead of redesigning individual components randomly, the application was rebuilt around three core principles:

## 1. Simplicity

Only show what users need.

Everything unnecessary was removed.

---

## 2. Trust

Astrology is a trust-based domain.

The interface should feel:

- professional
- premium
- calm
- authentic

instead of flashy.

---

## 3. Guidance

Users should always know

- where they are
- what to do next
- why something matters

The redesign introduces a clear visual flow throughout the application.

---

# Why Light Mode?

The original application heavily relied on dark backgrounds.

This redesign intentionally adopts a light theme because:

- easier readability
- larger perceived spacing
- better accessibility
- cleaner presentation
- feels more trustworthy
- aligns with modern SaaS applications

Dark mode can always be added later.

Light mode was chosen as the default because it improves content discoverability.

---

# Color Palette Decisions

Instead of many saturated colors, a minimal palette was used.

Primary

- Indigo

Reason

- trust
- intelligence
- premium

Secondary

- Amber

Reason

- subtle connection to astrology
- warmth
- spirituality

Neutral

- White
- Gray
- Slate

Reason

Keep content readable.

Avoid visual noise.

---

# Typography Decisions

Typography was simplified.

Instead of multiple font weights everywhere:

- Large bold headings
- Medium section titles
- Comfortable body text
- Small muted metadata

This improves scanning speed.

---

# Layout Decisions

The application follows a consistent layout throughout.

Navigation

↓

Hero

↓

Main Feature

↓

Supporting Sections

↓

Testimonials

↓

FAQ

↓

Footer

Every page follows the same visual rhythm.

Users never need to relearn navigation.

---

# Spacing System

Spacing follows an 8px system.

Examples

- 8
- 16
- 24
- 32
- 48
- 64

Benefits

- predictable layouts
- cleaner alignment
- easier maintenance

---

# Card Design

All cards follow one design language.

Each card contains

- title
- description
- action

Optional

- icon
- badge

No unnecessary gradients.

No excessive shadows.

Rounded corners remain consistent across the application.

---

# Navigation Decisions

Navigation was simplified.

Only important pages remain visible.

The goal is reducing decision fatigue.

Desktop

- Horizontal Navbar

Mobile

- Drawer Menu

Sticky navigation ensures users always know how to move around the application.

---

# Hero Section

Instead of multiple buttons and text blocks,

the hero focuses on

- one clear headline
- supporting description
- primary CTA
- secondary CTA

This improves conversion.

---

# Interactive Generator & Chat Experience

The birth chart generator and the AI Guruji chat are treated as primary interactions.

Instead of hiding them behind authentication or complex navigation, they are immediately visible.

Reasons

- reduces time-to-value for the user
- highlights the local-computation architecture
- encourages immediate user engagement

---

# Information Architecture

Content was reorganized into a logical narrative progression.

Rather than mixing everything together, the flow guides users step-by-step:

Hero (Introduction & Birth Chart Form)

↓

Planetary Ticker (Live sky positions)

↓

Stats (Trusted by numbers)

↓

Services (Astrology tools)

↓

Today's Astrology (Daily forecast & timing)

↓

Birth Chart Preview (Interactive chart sample)

↓

AI Assistant (Ask Guruji chat)

↓

Features (Why choose us)

↓

How It Works (Four-step timeline)

↓

Testimonials (User stories)

↓

FAQ (Accordion Q&A)

↓

CTA (Final section redirect)

↓

Footer (Directory & legal warnings)

Users naturally understand the flow.

---

# Button System

Five button variants exist to support different contextual actions:

- Primary (Filled indigo for main actions)
- Secondary (Outlined white/indigo for secondary options)
- Ghost (Border-free for subtle navbar login)
- Accent (Amber fill for spiritual accent redirects)
- Success (Green fill to indicate successfully completed form actions)

No unnecessary button styles are used.

This improves consistency.

---

# Icon Usage

Icons are used only when they improve comprehension.

No decorative icons.

Icons always accompany meaningful actions.

---

# Responsive Design Decisions

The redesign follows mobile-first principles.

Breakpoints

Mobile

↓

Tablet

↓

Desktop

Each layout was optimized individually.

No desktop-first scaling.

---

# Accessibility Decisions

Accessibility improvements include

- semantic HTML
- sufficient color contrast
- keyboard-friendly navigation
- larger click targets
- readable font sizes
- consistent focus states

---

# Component Strategy

Instead of repeating code,

the UI was divided into reusable components.

Examples

- Button
- Card
- Section
- Navbar
- Footer
- Badge
- Container

Benefits

- maintainability
- scalability
- consistency

---

# Performance Decisions

The redesign intentionally avoids unnecessary libraries.

Reasons

- smaller bundle size
- faster loading
- easier maintenance

Images are optimized.

Animations are lightweight.

---

# Animation Philosophy

Animations should support usability,

not distract users.

Used

- fade
- slight movement
- hover feedback

Avoided

- spinning elements
- excessive motion
- large entrance animations

---

# Why No Glassmorphism?

Glassmorphism often reduces readability.

Astrology websites contain significant textual information.

Solid surfaces improve

- readability
- accessibility
- trust

---

# Why No Heavy Gradients?

Heavy gradients often feel artificial.

Instead,

gradients are used sparingly.

Mostly

- section highlights
- CTA backgrounds

---

# Why No AI-style Landing Page?

Modern AI-generated websites usually include

- giant gradients
- floating blobs
- random animations
- oversized spacing
- generic illustrations

This redesign intentionally avoids those patterns.

The goal was originality through restraint.

---

# Visual Hierarchy Decisions

Every screen answers three questions immediately

1. What is this?

2. Why should I care?

3. What should I do next?

This greatly improves usability.

---

# CTA Strategy

Every section ends with one clear action.

Examples

- Explore
- Get Started
- Learn More

Users never encounter multiple competing CTAs.

---

# Design Consistency

Consistency was prioritized over creativity.

Rules include

- same border radius
- same spacing
- same shadows
- same typography scale
- same button styles
- same card patterns

Consistency improves perceived quality.

---

# Technology Decisions

Framework

Next.js

Reason

- routing
- scalability
- performance
- production readiness

---

Styling

Tailwind CSS

Reason

- consistency
- utility-first workflow
- rapid development

---

Language

JavaScript

Reason

Simple project requirements.

Fast iteration.

---

Component Architecture

Reusable UI components

Reason

Cleaner codebase

Better scalability

---

# UX Improvements Compared to Original

The redesign improves

✓ readability

✓ consistency

✓ accessibility

✓ navigation

✓ spacing

✓ typography

✓ visual hierarchy

✓ responsiveness

✓ trust

✓ maintainability

✓ scalability

✓ overall user experience

---

# Future Enhancements

Potential future improvements include

- Dark mode
- Personalized dashboard
- Horoscope personalization
- Authentication
- Saved birth charts
- Progressive Web App
- Internationalization
- AI-powered recommendations
- Micro-interactions
- Offline support

---

# Conclusion

This redesign was approached as a complete UX and design improvement exercise rather than a cosmetic visual update.

Every decision was made to improve clarity, consistency, usability, and maintainability while preserving the core purpose of the platform.

The final result is a modern, responsive, scalable, and user-centric interface built using Next.js and Tailwind CSS, providing a significantly improved experience compared to the original website.