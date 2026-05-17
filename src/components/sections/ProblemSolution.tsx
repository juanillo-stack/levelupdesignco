export function ProblemSolution() {
    return (
      <section className="bg-brand-soft/40 border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-7 grid md:grid-cols-2 gap-3">
          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Problema
            </div>
  
            <p className="mt-2 font-serif text-lg text-ink leading-snug">
              Muchos negocios tienen presencia online, pero no está bien
              organizada.
            </p>
          </div>
  
          <div className="bg-brand text-brand-foreground rounded-xl p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-foreground/70">
              Solución
            </div>
  
            <p className="mt-2 font-serif text-lg leading-snug">
              Organizo tu negocio digital para que funcione y genere clientes.
            </p>
          </div>
        </div>
      </section>
    );
  }