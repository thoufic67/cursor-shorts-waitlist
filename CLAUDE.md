# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 waitlist application template that uses Notion as a CMS, Resend for email delivery, and Upstash Redis for rate limiting. The application allows users to join a waitlist by submitting their name and email, which gets stored in Notion and triggers a welcome email.

## Development Commands

- `bun install` - Install dependencies (project uses Bun as package manager)
- `bun dev` - Start development server
- `bun build` - Build for production  
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun email` - Start email development server for testing emails

## Architecture

### API Routes
- `/api/notion/route.ts` - Handles creating new entries in the Notion database
- `/api/mail/route.ts` - Handles sending welcome emails via Resend with rate limiting (2 requests per minute per IP)

### Key Components
- `app/page.tsx` - Main landing page with form submission logic
- `components/form.tsx` - Waitlist signup form component
- `emails/index.tsx` - React Email template for welcome emails
- UI components in `components/ui/` using shadcn/ui

### Form Submission Flow
1. Client validates name and email fields
2. POST to `/api/mail` - sends welcome email (rate limited)
3. If email succeeds, POST to `/api/notion` - stores data in Notion database
4. Uses toast notifications for user feedback

### Environment Variables Required
```
NOTION_SECRET - Notion integration secret key
NOTION_DB - Notion database ID
RESEND_API_KEY - Resend API key for sending emails
UPSTASH_REDIS_REST_URL - Upstash Redis URL for rate limiting
UPSTASH_REDIS_REST_TOKEN - Upstash Redis token
NEXT_PUBLIC_POSTHOG_KEY - PostHog project API key for analytics
NEXT_PUBLIC_POSTHOG_HOST - PostHog host URL (optional, defaults to https://app.posthog.com)
```

### Styling & UI
- Uses Tailwind CSS with dark theme by default
- Framer Motion for animations
- shadcn/ui components with custom styling
- Figtree font from Google Fonts
- Particle background effect

### Rate Limiting
- Implemented via Upstash Redis with sliding window
- 2 requests per minute per IP address  
- Applied to email endpoint to prevent spam

## Database Schema (Notion)
The Notion database expects these properties:
- **Name** (Title type) - User's name
- **Email** (Email type) - User's email address