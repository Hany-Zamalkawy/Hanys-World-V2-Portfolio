# Next portfolio case study plan

## Named next piece of work

**Branchline - Visual AI Workflow Studio** is the next project to add to the portfolio. Its source project is in the FlyRank repository under `ai-yes-no-workflow/`.

## Where it goes

Add a project card to `src/data.ts`, inside the existing `projectsData` array after `proj-5`. The `ProjectsShowcase` component in `src/components/ProjectsShowcase.tsx` reads this array and renders cards in the existing Projects section. There is no separate case-study page or route in the current site.

## Three-beat case text

- **Problem:** A multi-step AI workflow is hard to trust when its decisions, branches, and background work are hidden.
- **What I did:** Built Branchline with React Flow, an Express API, and Inngest. Added graph validation, per-node durable steps, YES/NO routing, strict-schema OpenAI integration, a visible execution log, and a deterministic demo path.
- **What came of it:** A local end-to-end demo completed two decisions and showed the selected path. The run was in demo mode; no OpenAI call or production deployment is claimed. Persistent run storage and a measured model evaluation remain next improvements.

Keep the card description short enough for the grid and link its GitHub icon to `https://github.com/Hany-Zamalkawy/moustafa-azab-flyrank-ai.vercel.app/tree/main/ai-yes-no-workflow`. Leave the live link empty until a real deployment URL has been verified.

## Steps when adding the case

1. Review the three beats above against the final code, actual run evidence, and build log. Correct claims that changed.
2. Add a unique `proj-6` object in `projectsData` in `src/data.ts`, with a clear title, the concise three-beat description, `category: "Data & AI"`, relevant existing skill tags, and the GitHub link. Do not add a live link yet.
3. If the card should read naturally in Arabic, extend the project data and `ProjectsShowcase` rendering to use English and Arabic text; project descriptions are currently plain strings.
4. Run the portfolio production build, open the Projects section on desktop and phone, test its filters and repository link, and confirm the case text stays readable in both languages.
5. Add a live demo link only after the deployment responds successfully. Update the repository index and capture a current screenshot as evidence.

## Reminder

Proposed nudge: **Tuesday, 20 October 2026 at 5:00 PM Africa/Cairo** - “Add the Branchline case study to HANY'S WORLD: verify the three beats, update `projectsData`, test the card on desktop/mobile, and add only verified links.”

Reminder set in TickTick: **Tuesday, 20 October 2026 at 5:00 PM Africa/Cairo**, with an alert 30 minutes earlier. No Claude Project was changed; keep using the existing project and its voice/identity context when you review the case wording.

