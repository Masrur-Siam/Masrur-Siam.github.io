---
title: "QShare - Privacy SaaS"
date: 2026-05-08
description: "A secure, privacy-first file sharing platform featuring an automated self-destruction engine for ephemeral data."
featured: true
tags: ["Next.js", "Supabase", "Edge Functions", "Deno", "SaaS"]
external_link: "https://qshare69.vercel.com"
repo_link: "https://github.com/masrur-siam/qshare"
image: "/images/qshare-thumb.png"
---

### Project Overview
**QShare** is a modern, privacy-centric file-sharing solution built for users who prioritize data security. Traditional sharing platforms often leave temporary files on servers indefinitely, posing a long-term privacy risk. QShare solves this with a built-in auto-purge engine, ensuring your files exist only for the duration you intend.

### Key Highlights
* **Automated Self-Destruction:** Powered by **Supabase Edge Functions**, the system runs a background purge engine that scans and permanently deletes expired files every 5 minutes.
* **Seamless QR Integration:** Features instant QR code generation to facilitate rapid, contactless file transfers between mobile and desktop devices.
* **Zero-Footprint Environment:** By automatically scrubbing expired assets, the platform maintains a clean server environment and ensures no residual data is left behind.
* **Enterprise-Grade Security:** Utilizes **Supabase Auth** and **Row Level Security (RLS)** to ensure that data is only accessible to authorized recipients during the sharing window.

### Technical Deep Dive
* **Frontend:** Built with **Next.js** (Server Components) for high-performance rendering and SEO optimization.
* **Backend & Infrastructure:** Leverages the **Supabase** ecosystem for real-time database management and secure cloud storage.
* **Serverless Logic:** Employs **Deno**-based Edge Functions to handle the core purge logic without the need for a dedicated, always-on backend server.
* **Design:** Crafted with a sleek, minimalistic dark-themed UI using **Tailwind CSS**.

### Use Cases
* **Sensitive Documents:** Safely sharing temporary files like National IDs, resumes, or private photos.
* **Quick Cross-Device Transfer:** Moving files between a mobile phone and a public PC without the need for logging into email or social media.
* **Draft Deliverables:** Freelancers sharing time-sensitive drafts that should expire automatically after client review.

### Workflow
1. **Upload:** User uploads a file and sets a custom expiration timer.
2. **Generate:** The system creates a unique, secure URL and a corresponding QR code.
3. **Purge:** Once the timer hits zero, the Edge Function triggers an automated deletion, removing the file from both the database and physical storage.