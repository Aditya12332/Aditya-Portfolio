# Aditya Sultania — Portfolio

Personal portfolio of **Aditya Sultania**, Full Stack Developer (Django · Node.js · React · RAG/AI).

Built with Next.js 15, React 19, Tailwind CSS 4 and Motion.

## Editing content

All personal content lives in [`src/constants/data.tsx`](src/constants/data.tsx): name, tagline, links, skills, experience, education, projects and the About-section highlight notes.

- **Profile photo:** replace `public/images/profile.jpg` (portrait, 7:10, e.g. 420×600; shown as a polaroid). Set `profileImg` to `""` to show initials instead.
- **Project covers:** live in `public/images/projects/` and are imported in `data.tsx`. Each project has a tall cover (`imgUrl`, 1040×1920, desktop card) and a wide one (`imgUrlWide`, 1440×960, phones). The current covers are illustrative mockups built from each project's features; swap in real screenshots any time. Projects without an image get a coloured placeholder card.
- **Resume:** `resumeLink` in `candidateInfo` points to a public Google Drive file. Replace the file in Drive (Manage versions) to update it without changing the link.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

Push to your GitHub repo and import it on [Vercel](https://vercel.com/new). No environment variables are needed.

## Credits

Design based on the portfolio by [Juvita Saini](https://github.com/JuvitaSaini09/portfolio).
