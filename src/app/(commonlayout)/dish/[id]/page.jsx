import Container from '../../../components/Container';
import Link from 'next/link';

async function fetchItem(id) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  try {
    const res = await fetch(`${apiUrl}/api/items/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error('Error fetching item detail:', err);
    return null;
  }
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const item = await fetchItem(id);

  if (!item) {
    return (
      <main className="pt-20">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Dish not found</h1>
            <p className="text-base-content/60 mb-6">The requested item does not exist or was removed.</p>
            <Link href="/menu" className="text-primary font-semibold hover:underline">Back to Menu</Link>
          </div>
        </Container>
      </main>
    );
  }

  const badges = item.badge ? [item.badge] : [];
  const tags = Array.isArray(item.tags) ? item.tags : [];

  return (
    <main className="pt-20 bg-base-100">
      <Container>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-20 bg-base-100">
            <div className="w-full h-full p-4 lg:p-12">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: `url('${item.image || ''}')` }}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-base-100 overflow-y-auto">
            <div className="py-12 lg:py-20 flex flex-col gap-10">
              <Link href="/menu" className="flex items-center gap-2 group transition-colors hover:text-primary w-fit">
                <span>←</span>
                <span className="text-sm font-semibold uppercase tracking-tight">Back to Menu</span>
              </Link>

              <section className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span key={badge} className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold tracking-widest uppercase rounded">
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-base-content">
                  {item.name}
                </h1>
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-light text-primary">${item.price}</span>
                  {item.category && (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-base-200 rounded text-xs">
                      {item.category}
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-base-content/40">Description</h3>
                <p className="text-lg leading-relaxed text-base-content/70">
                  {item.description}
                </p>
              </section>

              {tags.length > 0 && (
                <section className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <div key={tag} className="flex h-10 items-center gap-2 rounded-lg bg-base-200 px-4 border border-base-300 hover:border-secondary transition-colors">
                      <span className="text-sm font-medium">{tag}</span>
                    </div>
                  ))}
                </section>
              )}

              <section className="pt-6 flex flex-col sm:flex-row gap-4">
                <button className="flex-grow bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 group">
                  ADD TO ORDER
                  <span>→</span>
                </button>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
