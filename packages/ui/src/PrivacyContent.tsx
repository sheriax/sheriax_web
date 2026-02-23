import React from 'react';
import { LegalPage } from './LegalPage';

const PRIVACY_MD = `# Privacy Policy

Last updated: January 10, 2026

## 1. Introduction

Sheriax Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and products.

## 2. Information We Collect

We may collect the following types of information:

- **Contact Information:** Name, email address, phone number when you contact us or sign up for our services.
- **Usage Data:** Information about how you interact with our websites and services.
- **Technical Data:** IP address, browser type, device information for analytics and security.

## 3. How We Use Your Information

- To provide and maintain our services
- To communicate with you about projects and updates
- To improve our services and user experience
- To comply with legal obligations

## 4. Data Security

We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.

## 5. Your Rights

You have the right to:

- Access, update, or delete your personal information
- Opt-out of marketing communications
- Request data portability

## 6. Contact Us

For any privacy-related questions, please contact us at: [privacy@sheriax.com](mailto:privacy@sheriax.com)

## Product-Specific Privacy Policies

Our products have their own detailed privacy policies:

- [Kizu Privacy Policy](https://kizu.in/privacy) — AI-powered financial recovery app
`;

export function PrivacyContent() {
  return <LegalPage markdown={PRIVACY_MD} />;
}
