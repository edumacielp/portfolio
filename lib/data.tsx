import React from "react";

export const profile = {
  name: "eduardo maciel",
  title: "a software engineer who builds with purpose",
  bio: "experimenting with new technologies, enjoying music, or working out.",
  linkedin: "https://www.linkedin.com/in/edumacielp",
  github: "https://github.com/edumacielp",
  email: "eduardomacielpereira@hotmail.com",
  avatar: "/edu_image.JPEG"
};

export const projects = [
  {
    id: "1",
    name: "MEDICCAE",
    description: "Founded and built Mediccae, a practice management platform for doctors. Handled everything technical: architecture, database design, frontend, backend, and Azure deployment. Designed it as multi-tenant from day one to scale properly.",
    highlights: [
      "Serving active practices with patient management, scheduling, and billing",
      "Shipped MVP in 4 months working solo",
      "Zero downtime since launch"
    ],
    stack: [".NET 10", "Blazor", "ASP.NET Core Web API", "PostgreSQL", "Azure"],
    link: "https://www.mediccae.com.br",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
  },
  {
    id: "2",
    name: "NANOSOFT",
    description: "Led the complete rewrite of a legacy VB6 business application to .NET 8 + Blazor. Migrated the entire system: database, business logic, and UI while keeping customers running. Built a new API layer and replaced Windows Forms with a modern Blazor interface.",
    highlights: [
      "Handles 30+ daily users and 5,000+ requests per day",
      "Performance improved significantly",
      "Bug reports dropped by 75%",
      "Team ships features 3x faster"
    ],
    stack: [".NET 8", "Blazor", "ASP.NET Core Web API", "SQL Server", "Azure", "VB6 to .NET"],
    link: "https://www.nanosoft.com.br",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
  }
];

export const contact = {
  linkedin: profile.linkedin,
  github: profile.github,
  email: profile.email,
};

export const writings = [
  {
    id: "scalable-dotnet-applications",
    title: "Building scalable .NET applications",
    description: "How I approach building applications that can handle growth without major rewrites.",
    date: "2025-02-07",
    readTime: "8 min read",
    href: "/writing/scalable-dotnet-applications",
    content: (
      <>
        <p>
          Building scalable applications isn't just about handling more traffic—it's about creating a foundation that can evolve without requiring complete rewrites. After working on Mediccae and Nanosoft, I've learned that scalability starts with architecture decisions made on day one.
        </p>

        <h2>Multi-tenancy from the start</h2>
        <p>
          When I built Mediccae, I made it multi-tenant from the beginning. This wasn't just a technical decision—it was a business one. Every feature, every database query, every authentication flow had to consider tenant isolation.
        </p>
        <p>
          The key insight? Retrofitting multi-tenancy is exponentially harder than building it in. Your data model, your caching strategy, your API design—all of these need to account for tenant separation from line one of code.
        </p>

        <h2>Database design matters</h2>
        <p>
          I've seen applications grind to a halt because of poor database decisions. Here's what I focus on:
        </p>
        <ul>
          <li><strong>Proper indexing</strong> - Don't index blindly, but don't skip it either. Profile your queries.</li>
          <li><strong>Normalized where it counts</strong> - Over-normalization kills read performance. Find the balance.</li>
          <li><strong>Consider eventual consistency</strong> - Not everything needs ACID transactions. Sometimes eventual consistency unlocks massive scale.</li>
        </ul>

        <h2>API design for growth</h2>
        <p>
          Your API is your contract with the outside world. Breaking changes are expensive. I always version my APIs and design endpoints with flexibility in mind. Pagination, filtering, and field selection aren't nice-to-haves—they're requirements.
        </p>

        <h2>Monitoring and observability</h2>
        <p>
          You can't scale what you can't measure. From day one, instrument your code. Logs, metrics, traces—all of it. When something breaks at 3 AM, you'll thank yourself for the detailed logging you set up months ago.
        </p>

        <h2>The hard truth</h2>
        <p>
          Scalability isn't about premature optimization. It's about making informed architectural decisions early and being willing to refactor when you outgrow them. The applications I've built handle thousands of requests per day not because I over-engineered them, but because I thought about scale from the beginning and iterated when needed.
        </p>

        <p>
          Start simple, but start right. Your future self will thank you.
        </p>
      </>
    ),
  },
  {
    id: "clean-architecture-thoughts",
    title: "Thoughts on clean architecture",
    description: "Practical insights on implementing clean architecture in real-world .NET projects.",
    date: "2025-01-15",
    readTime: "6 min read",
    href: "/writing/clean-architecture-thoughts",
    content: (
      <>
        <p>
          Clean architecture gets talked about a lot. Uncle Bob's circles diagram is everywhere. But here's the thing: most discussions stay theoretical. Let me share what clean architecture actually looks like in production .NET code.
        </p>

        <h2>It's not about folders</h2>
        <p>
          I've seen developers obsess over folder structure—Domain, Application, Infrastructure, Presentation. Sure, organization matters, but clean architecture is about dependency flow, not directory trees.
        </p>
        <p>
          The core principle? Your business logic shouldn't depend on your database, your UI framework, or your third-party services. Dependencies point inward, toward your domain.
        </p>

        <h2>Interfaces are your friend</h2>
        <p>
          In .NET, this means interfaces everywhere. Your domain defines what it needs (IUserRepository, IEmailService), and the infrastructure implements it. Dependency injection wires it all together.
        </p>
        <p>
          This isn't over-engineering. It's insurance. When I migrated Nanosoft from VB6, the clean boundaries made it possible to swap implementations while keeping the business logic intact.
        </p>

        <h2>CQRS and MediatR</h2>
        <p>
          I use MediatR for command and query separation. Not because it's trendy, but because it enforces single responsibility. Each handler does one thing. Testing is straightforward. Debugging is easier.
        </p>

        <pre><code>{`public class CreatePatientCommand : IRequest<Guid>
{
    public string Name { get; set; }
    public string Email { get; set; }
}

public class CreatePatientHandler : IRequestHandler<CreatePatientCommand, Guid>
{
    // Clean, testable, focused
}`}</code></pre>

        <h2>Don't go overboard</h2>
        <p>
          Here's where I disagree with purists: not every project needs every layer. A small internal tool doesn't need the same architecture as a multi-tenant SaaS platform.
        </p>
        <p>
          Start with what you need. Add layers when complexity demands it, not because a diagram says you should.
        </p>

        <h2>The real benefit</h2>
        <p>
          Clean architecture isn't about perfect code. It's about maintainability. It's about onboarding new developers who can find their way around. It's about changing your database from SQL Server to PostgreSQL without rewriting your business logic.
        </p>

        <p>
          Use it when it makes sense. Skip it when it doesn't. Just make sure you understand the trade-offs.
        </p>
      </>
    ),
  },
  {
    id: "development-workflow",
    title: "My development workflow",
    description: "Tools, practices, and mindset that help me ship quality software faster.",
    date: "2024-12-20",
    readTime: "5 min read",
    href: "/writing/development-workflow",
    content: (
      <>
        <p>
          I've spent years refining how I work. Not to be more "productive" in some abstract sense, but to ship better software with less stress. Here's what actually works for me.
        </p>

        <h2>Tools I can't live without</h2>
        <ul>
          <li><strong>Rider</strong> - JetBrains' IDE for .NET. Faster than Visual Studio for my workflow, better refactoring tools.</li>
          <li><strong>Git</strong> - Not GitHub Desktop. Command line. I know exactly what's happening.</li>
          <li><strong>Docker</strong> - Local development environments that match production. No "works on my machine" excuses.</li>
          <li><strong>Azure DevOps</strong> - CI/CD pipelines that deploy on every push to main. If it's not automated, it's broken.</li>
        </ul>

        <h2>How I structure my day</h2>
        <p>
          Deep work in the morning! No meetings, no Slack. Just me, code, and problems that need solving.
        </p>
        <p>
          Afternoons are for collaboration—code reviews, planning, answering questions. By then, I've already shipped something meaningful.
        </p>

        <h2>Testing philosophy</h2>
        <p>
          I write tests, but I'm not a TDD purist. Unit tests for business logic, integration tests for critical paths. E2E tests for user flows that can't break.
        </p>
        <p>
          The goal isn't 100% coverage. It's confidence that I can refactor without fear and deploy without crossing my fingers.
        </p>

        <h2>Code review mindset</h2>
        <p>
          I review code to learn, not to criticize. Every PR teaches me something—a pattern I hadn't considered, a library I didn't know existed, a way to simplify logic.
        </p>
        <p>
          When my code gets reviewed, I treat feedback as a gift. Defensiveness is ego. Improvement is the goal.
        </p>

        <h2>Deployment and monitoring</h2>
        <p>
          I deploy to production multiple times a week. Small changes, quick iterations. Feature flags let me test in production safely.
        </p>
        <p>
          Monitoring isn't optional—it's part of the code. Application Insights, structured logging, health checks. If I can't observe it, I can't fix it when it breaks.
        </p>

        <h2>What I've learned</h2>
        <p>
          Productivity isn't about working longer hours. It's about eliminating friction. Automate the boring stuff. Invest in tools that save time. Focus deeply when it matters.
        </p>

        <p>
          And most importantly: take breaks. Some of my best solutions came while working out or listening to music, not staring at code.
        </p>
      </>
    ),
  },
];
