import { ProfileHeader } from "@/components/sections/profile-header";
import { Overview } from "@/components/sections/overview";
import { SocialLinks } from "@/components/sections/social-links";
import { GitHubContributions } from "@/components/sections/github-contributions";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/panel";

/**
 * Single-column portfolio (inspired by minimal bordered-panel portfolios).
 * All content comes from `Data/portfolio.ts` — edit only that file.
 */
export default function HomePage() {
  return (
    <main className="overflow-x-clip px-2">
      <div className="mx-auto md:max-w-3xl">
        <ProfileHeader />
        <Separator />
        <Overview />
        <SocialLinks />
        <GitHubContributions />
        <Separator />
        <About />
        <Separator />
        <TechStack />
        <Separator />
        <Experience />
        <Separator />
        <Education />
        <Separator />
        <Projects />
        <Separator />
        <Services />
        <Separator />
        <Contact />
        {/* bottom padding for mobile nav */}
        <div className="h-20 md:hidden" aria-hidden />
      </div>
    </main>
  );
}
