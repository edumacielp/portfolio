import { notFound } from "next/navigation";
import Link from "next/link";
import { writings } from "@/lib/data";

export async function generateStaticParams() {
  return writings.map((post) => ({
    slug: post.id,
  }));
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = writings.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="mx-auto max-w-2xl px-6 pt-8">
        <Link 
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-heading"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>

      <article className="mx-auto max-w-2xl px-6 py-12 pb-24">
        {/* Header */}
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="mb-4 text-4xl font-bold text-heading md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}