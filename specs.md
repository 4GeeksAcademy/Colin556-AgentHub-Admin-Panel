# AgentHub Admin Panel Prototype Specification (Vision to Spec)

## 1. Objective

Create a fully designed front-end prototype of the AgentHub Admin Panel using HTML, CSS, and optional Tailwind CSS utility classes. The prototype must be static-first (hardcoded data), visually polished, responsive, and interaction-complete for demo/review purposes.

This document is implementation-ready and should be followed exactly by an AI coding agent or developer.

## 2. Scope and Deliverables

### Required Deliverables

1. A single interactive prototype page with all required sections:
   1. Dashboard
   2. User Management
   3. Agent Management
   4. Skills Catalog
   5. Agent Contracts
   6. Error Log
2. All required dropdowns, modals, expand/collapse interactions, and visual states.
3. Light and dark mode support with readable contrast.
4. Mobile-first responsive behavior that scales cleanly to desktop.

### Out of Scope

1. Backend integration
2. Authentication
3. Real chart library integration
4. Persistent state (localStorage/db)

## 3. Technical Constraints

1. Use semantic HTML5 structure.
2. Use CSS variables for design tokens (colors, spacing, radius, shadows, typography).
3. Tailwind can be used, but custom CSS variables are mandatory to ensure consistent theming.
4. JavaScript must be vanilla JS for interactions.
5. All content is hardcoded mock data.
6. No external API calls.

## 4. Information Architecture

### Top-Level Layout

1. Fixed/sticky left sidebar on desktop, collapsible drawer behavior on mobile.
2. Top header area with page title, theme toggle, and optional search field placeholder.
3. Main scrollable content area containing six stacked sections in this exact order:
   1. Dashboard
   2. User Management
   3. Agent Management
   4. Skills Catalog
   5. Agent Contracts
   6. Error Log

### Sidebar Navigation Items

1. Dashboard
2. Users
3. Agents
4. Skills
5. Contracts
6. Errors

Each item anchors to its section ID.

## 5. Visual Direction

### Brand Tone

Modern operations console with warm neutral background, vibrant accent colors, and clear status semantics. Avoid generic dashboard appearance.

### Typography

1. Headings: Sora (or Space Grotesk fallback)
2. Body/UI text: Manrope (or DM Sans fallback)
3. Monospace snippets/logs: JetBrains Mono fallback

### Core Token Suggestions

Define in :root and .theme-dark.

1. Surface and background
   1. --bg: page background
   2. --surface-1: card base
   3. --surface-2: elevated panel
2. Text
   1. --text-strong
   2. --text-muted
   3. --text-inverse
3. Semantic states
   1. --success
   2. --warning
   3. --danger
   4. --info
4. Interactive
   1. --accent
   2. --accent-soft
   3. --border
   4. --ring
5. Effects
   1. --shadow-sm
   2. --shadow-md
   3. --radius-sm
   4. --radius-md
   5. --radius-lg

### Accessibility Targets

1. Text contrast target: WCAG AA minimum.
2. Visible focus ring on all interactive controls.
3. Keyboard access for:
   1. Dropdown triggers
   2. Modal open/close
   3. Expand/collapse buttons
4. Escape closes open modal/dropdown.

## 6. Responsive Breakpoints

1. Mobile: < 768px
2. Tablet: 768px to 1023px
3. Desktop: >= 1024px

### Key Responsive Rules

1. Dashboard KPI cards:
   1. Mobile: 1 column
   2. Tablet: 2 columns
   3. Desktop: 4 columns
2. Tables:
   1. Horizontal overflow allowed on small screens
   2. Keep action buttons always visible
3. Modals:
   1. Max width on desktop
   2. Full-width with margins on mobile

## 7. Shared Component Specifications

### 7.1 Card Component

1. Structure:
   1. Icon container
   2. Label (small muted text)
   3. Primary value (prominent)
2. Style:
   1. Rounded corners
   2. Border + subtle shadow
   3. Hover lift transition (transform + shadow)

### 7.2 Status Badge

1. Pill shape
2. Font-size small, medium weight
3. Color mapping:
   1. Active/Resolved/Healthy: success
   2. Pending/Warning: warning
   3. Failing/Error/Critical/Disabled: danger
   4. Info/Trial: info

### 7.3 Row Action Dropdown (Three-Dot)

1. Trigger icon: vertical ellipsis (⋮)
2. Menu appears anchored to trigger, right-aligned
3. Contains section-specific actions
4. Auto-close behaviors:
   1. Click outside
   2. Escape
   3. Action selection
5. Only one dropdown open at a time

### 7.4 Modal

1. Includes backdrop overlay
2. Header with title + close button
3. Content body scrollable if long
4. Closes via:
   1. Close button
   2. Backdrop click
   3. Escape key
5. Body scroll lock while open

### 7.5 Section Shell

Each section uses:
1. Title row
2. Optional subtitle/help text
3. Divider or spacing before content
4. Consistent padding and border radius

## 8. Data Fixtures (Hardcoded)

Use these exact minimum counts:

1. Users: at least 5
2. Agents: at least 4
3. Skills: at least 4
4. Contracts: at least 4
5. Errors: at least 6

Values can be fictional but realistic and internally consistent.

## 9. Section-by-Section Requirements

### 9.1 Dashboard

#### Must Render

1. Exactly 4 metric cards:
   1. Total Revenue
   2. Discount/Coupon Losses
   3. Active Agents
   4. Failing Agents
2. Each card must include:
   1. Icon
   2. Label
   3. Hardcoded value
3. Full-width weekly activity chart placeholder below KPI cards.
4. Clear visual separation between KPI block and chart block.
5. Light/dark mode readability across labels, values, icons.

#### Chart Placeholder Spec

1. Large panel with heading "Weekly Activity"
2. Faux chart area using grid lines and a simple SVG/polyline or styled bars (static)
3. X-axis labels for days Mon to Sun
4. No runtime chart library required

### 9.2 User Management

#### Must Render

1. Table columns:
   1. Name
   2. Email
   3. Plan
   4. Status badge
   5. Actions
2. At least 5 user rows
3. Each row has action dropdown (⋮) with:
   1. View detail
   2. Delete

#### User Detail Modal

On View detail:
1. Open modal with full user details (name, email, plan, status, joined date, usage summary).
2. Close behavior must include:
   1. Close button
   2. Backdrop click

Delete action can be non-destructive demo behavior (for example, close menu and show toast placeholder).

### 9.3 Agent Management

#### Must Render

1. At least 4 agents
2. Per row show:
   1. Agent name
   2. Owner
   3. Status badge
   4. Skills list collapsed by default
3. Expand/collapse control to reveal skills
4. Expansion animation must be smooth and visible
5. Row action dropdown with:
   1. Configure
   2. Delete

#### Configure Modal

On Configure:
1. Open modal with editable textarea containing the agent system prompt.
2. Include visible label for textarea.
3. Include Cancel and Save buttons (Save can be demo-only behavior).

### 9.4 Skills Catalog

#### Must Render

1. At least 4 skill entries
2. Each entry shows:
   1. Skill name
   2. Short description
   3. Enabled-agents count
3. Include explanatory text visible in section explaining what a skill means in AgentHub context.
4. Per skill row/item include action dropdown (⋮) with:
   1. View detail
   2. Delete

### 9.5 Agent Contracts

#### Must Render

1. Contracts table with at least 4 entries
2. Columns:
   1. Client
   2. Rented agent
   3. Contracted skills
   4. Start date
   5. End date
   6. Total paid amount
   7. Actions
3. Actions dropdown includes View detail

#### Contract Detail Modal

On View detail:
1. Show full contract breakdown including:
   1. Client and agent metadata
   2. Contract window
   3. Itemized skill pricing table/list
   4. Subtotal, tax/fees (optional), final total

### 9.6 Error Log

#### Must Render

1. At least 6 error entries
2. Fields per entry:
   1. Timestamp
   2. Agent name
   3. Error type badge
   4. Short description
   5. Actions
3. Error badge colors must indicate type/severity.
4. Actions dropdown includes:
   1. View detail
   2. Mark as resolved

#### Error Detail Modal

On View detail:
1. Show full trace details in readable format (monospace block)
2. Include metadata (error ID, severity, impacted workflow)

Mark as resolved can be demo behavior (status update in-memory optional).

## 10. Interaction Model

### Global Interaction Rules

1. Dropdowns:
   1. Toggle on trigger click
   2. Close when another dropdown opens
   3. Close on outside click or Escape
2. Modals:
   1. Single active modal at a time
   2. Opening modal sets focus to modal container/title
   3. Closing returns focus to trigger element
3. Expandable agent skills:
   1. Default collapsed
   2. Animate max-height and opacity
   3. Toggle icon rotates to indicate state

### Theme Toggle

1. Provide light/dark toggle control in header.
2. Implementation:
   1. Add/remove theme class on body or html
   2. Persisting preference is optional
3. Verify contrast in both modes for:
   1. Cards
   2. Badges
   3. Table text
   4. Icons

## 11. Motion and Transition Guidelines

Use restrained but visible animations:

1. Initial page load:
   1. Subtle fade/slide for section containers
2. Cards:
   1. Hover translateY(-2px) and shadow increase
3. Dropdowns/modals:
   1. Fade + scale transition (100 to 180ms)
4. Expand/collapse:
   1. 180 to 260ms easing

All motion must remain functional if reduced-motion is preferred.

## 12. Accessibility Checklist

1. All icon-only buttons have aria-label.
2. Dropdown triggers expose aria-expanded.
3. Modal has role="dialog", aria-modal="true", and descriptive title.
4. Keyboard navigation order is logical.
5. Focus outlines are visible in both themes.
6. Table headers use th semantics.

## 13. Suggested File Structure

1. index.html
2. styles.css
3. app.js

Optional:
1. assets/icons.svg

## 14. Implementation Sequence (For AI Coding Agent)

1. Scaffold base HTML layout with sidebar, header, and main sections.
2. Define CSS variables for light/dark themes and core tokens.
3. Build reusable primitives:
   1. Card
   2. Badge
   3. Dropdown
   4. Modal
4. Implement Dashboard section and chart placeholder.
5. Implement User Management table + modal wiring.
6. Implement Agent Management list + expand/collapse + configure modal.
7. Implement Skills Catalog list + explanatory text + dropdown actions.
8. Implement Contracts table + detail modal with itemized pricing.
9. Implement Error Log list + severity badges + trace modal.
10. Implement theme toggle and verify readability in both modes.
11. Add keyboard and accessibility attributes.
12. Validate responsiveness at mobile/tablet/desktop widths.

## 15. Acceptance Criteria

Prototype is accepted only if all statements below are true:

1. Dashboard has exactly 4 KPI cards with icon, label, and hardcoded value.
2. Dashboard includes full-width weekly chart placeholder below cards.
3. User table has at least 5 rows and required columns.
4. User row dropdown includes View detail and Delete.
5. User detail modal opens from View detail and closes via button and backdrop.
6. Agent section has at least 4 agents with collapsed skills by default.
7. Agent skills expand/collapse with visible smooth transition.
8. Agent row dropdown includes Configure and Delete.
9. Configure opens modal with editable system prompt textarea.
10. Skills section has at least 4 skills and explanatory in-view text defining skill context.
11. Each skill has dropdown with View detail and Delete.
12. Contracts table has at least 4 entries and required columns.
13. Contract row has dropdown containing View detail.
14. Contract detail modal shows full breakdown with itemized skill pricing.
15. Error log has at least 6 entries with timestamp, agent, badge, description.
16. Error badge colors clearly map to type/severity.
17. Error dropdown has View detail and Mark as resolved.
18. Error detail modal shows trace details.
19. Light and dark modes are both readable and visually consistent.
20. Prototype works on mobile and desktop without layout breakage.

## 16. Quality Review Steps

1. Manually test each dropdown opens/closes correctly.
2. Manually test each modal open path and all close paths.
3. Confirm no section misses minimum row/item counts.
4. Test keyboard only navigation for core interactive elements.
5. Test at approximate widths 375px, 768px, 1280px.
6. Run a final visual pass in both themes for contrast and spacing.

## 17. Notes for Future Backend Handoff

1. Keep data arrays isolated in JS for easy API replacement.
2. Add data-id attributes on rows to simplify event delegation and integration.
3. Keep modal templates generic so payload can be injected dynamically.
